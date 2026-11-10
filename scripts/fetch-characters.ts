// Looks up every roster character in the WoW Forever API and writes what it finds to src/data/characters.json,
// which the timeline reads. The site is static, so this runs before each build instead of in the browser.
// Run with: npm run fetch:characters (reads BLIZZARD_CLIENT_ID / BLIZZARD_CLIENT_SECRET from .env.local,
// or from the environment in CI)

import { readFile, writeFile } from 'node:fs/promises'
import { roster } from '../src/data/roster.ts'

type FoundCharacter = { name: string; level: number; className: string; race: string }
type CharacterFile = { fetchedAt: string | null; characters: Record<string, FoundCharacter> }

const outFile = new URL('../src/data/characters.json', import.meta.url)
const namespace = 'profile-forever-us'

const previous: CharacterFile = JSON.parse(await readFile(outFile, 'utf8').catch(() => '{"fetchedAt":null,"characters":{}}'))

const { BLIZZARD_CLIENT_ID: id, BLIZZARD_CLIENT_SECRET: secret } = process.env
if (!id || !secret) {
  // Leave the committed file alone so a build without credentials still has data
  console.warn('Missing BLIZZARD_CLIENT_ID or BLIZZARD_CLIENT_SECRET; keeping the existing characters.json')
  process.exit(0)
}

const tokenRes = await fetch('https://oauth.battle.net/token', {
  method: 'POST',
  headers: {
    Authorization: `Basic ${Buffer.from(`${id}:${secret}`).toString('base64')}`,
    'Content-Type': 'application/x-www-form-urlencoded',
  },
  body: 'grant_type=client_credentials',
})
if (!tokenRes.ok) {
  console.warn(`Token request failed (${tokenRes.status}); keeping the existing characters.json`)
  process.exit(0)
}
const { access_token: token } = (await tokenRes.json()) as { access_token: string }

// Forever characters have no realm; they're addressed as "name-surname"
const slug = (fullName: string) => encodeURIComponent(fullName.trim().toLowerCase().replace(/\s+/g, '-'))

const characters: Record<string, FoundCharacter> = {}
for (const fullName of roster.flatMap((p) => p.characters)) {
  const url = `https://us.api.blizzard.com/profile/wow/character/${slug(fullName)}?namespace=${namespace}&locale=en_US`
  try {
    const res = await fetch(url, { headers: { Authorization: `Bearer ${token}` } })
    if (res.status === 404) {
      console.log(`${fullName}: not found`)
      continue
    }
    if (!res.ok) throw new Error(`HTTP ${res.status}`)
    const c = (await res.json()) as {
      name: string
      surname?: string
      level: number
      character_class: { name: string }
      race: { name: string }
    }
    characters[fullName] = {
      name: [c.name, c.surname].filter(Boolean).join(' '),
      level: c.level,
      className: c.character_class.name,
      race: c.race.name,
    }
    console.log(`${fullName}: level ${c.level} ${c.race.name} ${c.character_class.name}`)
  } catch (err) {
    // A hiccup shouldn't wipe someone off the chart, so fall back to what we had
    console.warn(`${fullName}: lookup failed (${(err as Error).message}); keeping the last known data`)
    if (previous.characters[fullName]) characters[fullName] = previous.characters[fullName]
  }
}

const out: CharacterFile = { fetchedAt: new Date().toISOString(), characters }
await writeFile(outFile, `${JSON.stringify(out, null, 2)}\n`)
console.log(`\nWrote ${Object.keys(characters).length} characters to src/data/characters.json`)

// Keep in sync with docs/content/roster.md

export type CharacterClass = 'Warrior' | 'Priest' | 'Mage' | 'Paladin' | 'Hunter' | 'Warlock' | 'Shaman' | 'Druid' | 'Rogue'

// A player and the WoW Forever characters they're leveling, each written "Name Surname" as it is in game.
// Level, class and race come from the Blizzard API (scripts/fetch-characters.ts writes them to characters.json).
export type Person = {
  name: string
  characters: string[]
}

// Alphabetical by name
export const roster: Person[] = [
  { name: 'Alysia', characters: ['Kali Mari'] },
  { name: 'Ben', characters: ['Gliff Cavin'] },
  { name: 'Billy', characters: ['Nox Pox', 'Bjorn Wild', 'Pan Sylvan'] },
  { name: 'Cesar', characters: ['Sielle Arcayus'] },
  { name: 'Danny', characters: ['Rocket Riot'] },
  { name: 'Diego', characters: ['Sleast Astolin'] },
  { name: 'Garrett', characters: ['Thumps Pumps'] },
  { name: 'Kevin', characters: ['Thund Urstorm'] },
  { name: 'Manuel', characters: ['Zan Devistan'] },
  { name: 'Pat', characters: ['Dreizig Lightsworn'] },
  { name: 'Reyn', characters: ['Emi Skye'] },
  { name: 'Sheyla', characters: ['Lulu Lemonbeard'] },
  { name: 'Tiago', characters: ['Conan Sequence', 'Criticus Maximus'] },
  { name: 'Tommy C', characters: ['Varrah Frost'] },
  { name: 'Tommy R', characters: ['Elroth Galewyn'] },
  { name: 'Wyatt', characters: ['Cheese Weaver'] },
  { name: 'Jerry', characters: ['Davidd Goggins'] },
]

// Placeholder roster; keep in sync with docs/content/roster.md

export type CharacterClass = 'Warrior' | 'Priest' | 'Mage' | 'Paladin' | 'Hunter' | 'Warlock' | 'Shaman' | 'Druid' | 'Rogue'

// Anything not known yet is left out; empty roles or professions mean TBD
export type Character = {
  name: string
  level?: number
  className?: CharacterClass
  race?: string
  roles: string[]
  professions: string[]
}

// Alphabetical by name, with anyone whose class isn't known yet at the end
export const roster: Character[] = [
  { name: 'Alysia', level: 0, className: 'Mage', race: 'Skyborne', roles: ['DPS'], professions: [] },
  { name: 'Ben', level: 0, className: 'Priest', race: 'Human', roles: ['Healer'], professions: [] },
  { name: 'Billy', level: 0, className: 'Druid', race: 'Skyborne', roles: ['Healer'], professions: [] },
  { name: 'Cesar', level: 0, className: 'Shaman', race: 'Dwarf', roles: ['DPS'], professions: [] },
  { name: 'Danny', level: 0, className: 'Rogue', race: 'Gnome', roles: ['DPS'], professions: [] },
  { name: 'Garrett', level: 0, className: 'Paladin', race: 'Human', roles: ['DPS'], professions: [] },
  { name: 'Kevin', level: 0, className: 'Shaman', race: 'Dwarf', roles: ['DPS'], professions: [] },
  { name: 'Manuel', level: 0, className: 'Hunter', race: 'Human', roles: ['DPS'], professions: [] },
  { name: 'Pat', level: 0, className: 'Paladin', race: 'Human', roles: ['Tank'], professions: [] },
  { name: 'Reyn', level: 0, className: 'Warrior', race: 'Human', roles: ['Tank'], professions: [] },
  { name: 'Sheyla', level: 0, className: 'Hunter', race: 'Dwarf', roles: ['DPS'], professions: [] },
  { name: 'Tommy C', level: 0, className: 'Mage', race: 'Human', roles: ['DPS'], professions: [] },
  { name: 'Tommy R', level: 0, className: 'Paladin', race: 'Human', roles: ['DPS'], professions: [] },
  { name: 'Greg', roles: [], professions: [] },
  { name: 'Tiago', roles: [], professions: [] },
  { name: 'Wyatt', roles: [], professions: [] },
]

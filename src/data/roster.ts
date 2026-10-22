// Placeholder roster; keep in sync with docs/content/roster.md

export type CharacterClass = 'Warrior' | 'Priest' | 'Mage' | 'Paladin' | 'Hunter' | 'Warlock' | 'Shaman' | 'Druid' | 'Rogue'

export type Character = {
  name: string
  level: number
  className: CharacterClass
  race: string
  roles: string[]
  professions: string[]
}

export const roster: Character[] = [
  { name: 'Brannoc', level: 8, className: 'Warrior', race: 'Dwarf', roles: ['Tank'], professions: ['Mining', 'Blacksmithing'] },
  { name: 'Elowyn', level: 7, className: 'Priest', race: 'Night Elf', roles: ['Healer'], professions: ['Herbalism', 'Alchemy'] },
  { name: 'Fizzlecog', level: 6, className: 'Mage', race: 'Gnome', roles: ['DPS'], professions: ['Tailoring', 'Enchanting'] },
  { name: 'Vanecroft', level: 5, className: 'Paladin', race: 'Human', roles: ['Tank', 'Healer'], professions: ['Mining', 'Engineering'] },
  { name: 'Kaelith', level: 7, className: 'Hunter', race: 'Night Elf', roles: ['DPS'], professions: ['Skinning', 'Leatherworking'] },
  { name: 'Grimsby', level: 4, className: 'Warlock', race: 'Human', roles: ['DPS'], professions: ['Tailoring', 'Enchanting'] },
  { name: 'Thorga', level: 6, className: 'Shaman', race: 'Dwarf', roles: ['Healer', 'DPS'], professions: ['Herbalism', 'Alchemy'] },
  {
    name: 'Ashleaf',
    level: 8,
    className: 'Druid',
    race: 'Night Elf',
    roles: ['Tank', 'Healer', 'DPS'],
    professions: ['Skinning', 'Leatherworking'],
  },
  { name: 'Tinkwhistle', level: 5, className: 'Rogue', race: 'Gnome', roles: ['DPS'], professions: ['Mining', 'Engineering'] },
  { name: 'Baelgar', level: 6, className: 'Paladin', race: 'Dwarf', roles: ['Tank', 'Healer'], professions: ['Mining', 'Engineering'] },
  { name: 'Zephyrine', level: 4, className: 'Hunter', race: 'Skyborne', roles: ['DPS'], professions: ['Skinning', 'Leatherworking'] },
  { name: 'Hollis', level: 7, className: 'Warrior', race: 'Human', roles: ['DPS'], professions: ['Mining', 'Blacksmithing'] },
  { name: 'Durgana', level: 5, className: 'Priest', race: 'Dwarf', roles: ['Healer'], professions: ['Tailoring', 'Enchanting'] },
  { name: 'Nyxaria', level: 4, className: 'Rogue', race: 'Night Elf', roles: ['DPS'], professions: ['Herbalism', 'Alchemy'] },
  { name: 'Pellinore', level: 8, className: 'Paladin', race: 'Human', roles: ['Healer'], professions: ['Herbalism', 'Alchemy'] },
]

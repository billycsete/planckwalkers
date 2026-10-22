// Keep these in sync with docs/content/forever-together-plan.md

export type Dungeon = { level: number; name: string; range: string; zone: string }

// Each checkpoint is a date the group meets up; some have more than one dungeon to run
export type Checkpoint = { date: string; dungeons: Dungeon[] }

// Dates are ISO (YYYY-MM-DD) so they can be placed on the timeline; formatDate turns them back into "Dec 5, 2026"
export const checkpoints: Checkpoint[] = [
  { date: '2026-12-05', dungeons: [{ level: 16, name: 'Hall of Thanes (new)', range: '13–18', zone: 'Ironforge, Dun Morogh' }] },
  { date: '2026-12-12', dungeons: [{ level: 18, name: 'Ruins of Lordaeron (new)', range: '15–20', zone: 'Tirisfal Glades' }] },
  {
    date: '2026-12-19',
    dungeons: [
      { level: 19, name: 'Deadmines', range: '16–21*', zone: 'Westfall' },
      { level: 20, name: 'Wailing Caverns', range: '17–22*', zone: 'The Barrens' },
      { level: 21, name: 'Shadowfang Keep', range: '18–23*', zone: 'Silverpine Forest' },
    ],
  },
  { date: '2027-01-02', dungeons: [{ level: 25, name: 'Blackfathom Deeps', range: '22–27*', zone: 'Ashenvale' }] },
  {
    date: '2027-01-09',
    dungeons: [
      { level: 26, name: 'Stormwind Stockade', range: '23–28*', zone: 'Stormwind City' },
      { level: 27, name: 'Razorfen Kraul', range: '24–29*', zone: 'The Barrens' },
      { level: 27, name: 'Excavation Site: Wetlands (new)', range: '24–29', zone: 'Wetlands' },
    ],
  },
  { date: '2027-01-16', dungeons: [{ level: 28, name: 'Gnomeregan', range: '25–30*', zone: 'Dun Morogh' }] },
  { date: '2027-01-23', dungeons: [{ level: 31, name: 'City of Dalaran (new)', range: '28–33', zone: 'Alterac Mountains' }] },
  {
    date: '2027-01-30',
    dungeons: [{ level: 33, name: 'Scarlet Monastery, all four wings', range: '30–35*', zone: 'Tirisfal Glades' }],
  },
  {
    date: '2027-02-20',
    dungeons: [
      { level: 37, name: 'Razorfen Downs', range: '34–39*', zone: 'The Barrens' },
      { level: 38, name: 'Uldaman', range: '35–40*', zone: 'Badlands' },
      { level: 38, name: 'The Drowned City (new)', range: '35–40', zone: 'Off the Stranglethorn Vale coast' },
    ],
  },
  {
    date: '2027-04-03',
    dungeons: [
      { level: 45, name: "Zul'Farrak", range: '42–47*', zone: 'Tanaris' },
      { level: 45, name: 'Maraudon', range: '42–47*', zone: 'Desolace' },
    ],
  },
  {
    date: '2027-04-24',
    dungeons: [
      { level: 48, name: 'Sunken Temple', range: '45–50*', zone: 'Swamp of Sorrows' },
      { level: 48, name: "Krol'dok Stronghold (new, outdoor)", range: '40–55', zone: 'Riverglades' },
    ],
  },
  {
    date: '2027-05-15',
    dungeons: [
      { level: 51, name: 'Blackrock Depths', range: '48–53*', zone: 'Blackrock Mountain' },
      {
        level: 51,
        name: 'Alcaz Prison (new)',
        range: '48–53',
        zone: 'Alcaz Island, Dustwallow Marsh (likely, not yet confirmed)',
      },
    ],
  },
  { date: '2027-06-19', dungeons: [{ level: 56, name: 'Lower Blackrock Spire', range: '53–58*', zone: 'Blackrock Mountain' }] },
  { date: '2027-07-03', dungeons: [{ level: 57, name: 'Dire Maul', range: '54–59*', zone: 'Feralas' }] },
  {
    date: '2027-07-10',
    dungeons: [
      { level: 58, name: 'Stratholme', range: '55–60*', zone: 'Eastern Plaguelands' },
      { level: 58, name: 'Blackmaw Hold (new)', range: '55–60', zone: 'Azshara' },
    ],
  },
  {
    date: '2027-07-24',
    dungeons: [
      { level: 59, name: 'Scholomance', range: '57–60*', zone: 'Western Plaguelands' },
      { level: 59, name: "Shaper's Terrace (new)", range: '58–60', zone: "Un'Goro Crater" },
    ],
  },
  {
    date: '2027-07-31',
    dungeons: [{ level: 60, name: 'Upper Blackrock Spire, then raids', range: '60', zone: 'Blackrock Mountain' }],
  },
]

// Game-wide dates that aren't part of the leveling plan itself; `end` marks a window rather than a single day
export const keyDates: { date: string; end?: string; label: string }[] = [
  { date: '2026-09-17', label: 'Beta begins' },
  { date: '2026-10-23', label: 'Beta ends' },
  { date: '2026-10-27', end: '2026-11-04', label: 'Name reservations' },
  { date: '2026-11-04', label: 'WoW Forever launch' },
]

const dateFormat = new Intl.DateTimeFormat('en-US', { month: 'short', day: 'numeric', year: 'numeric', timeZone: 'UTC' })

export function formatDate(iso: string) {
  return dateFormat.format(new Date(`${iso}T00:00:00Z`))
}

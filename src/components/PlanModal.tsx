import type { Ref } from 'react'
import { X } from 'lucide-react'
import headerBg from '../assets/backgrounds/forever-skyborn.webp'

// Each checkpoint is a date the group meets up; some have more than one dungeon to run
const checkpoints = [
  { date: 'Dec 5, 2026', dungeons: [{ level: 16, name: 'Hall of Thanes (new)', range: '13–18', zone: 'Ironforge, Dun Morogh' }] },
  { date: 'Dec 12, 2026', dungeons: [{ level: 18, name: 'Ruins of Lordaeron (new)', range: '15–20', zone: 'Tirisfal Glades' }] },
  {
    date: 'Dec 19, 2026',
    dungeons: [
      { level: 19, name: 'Deadmines', range: '16–21*', zone: 'Westfall' },
      { level: 20, name: 'Wailing Caverns', range: '17–22*', zone: 'The Barrens' },
      { level: 21, name: 'Shadowfang Keep', range: '18–23*', zone: 'Silverpine Forest' },
    ],
  },
  { date: 'Jan 2, 2027', dungeons: [{ level: 25, name: 'Blackfathom Deeps', range: '22–27*', zone: 'Ashenvale' }] },
  {
    date: 'Jan 9, 2027',
    dungeons: [
      { level: 26, name: 'Stormwind Stockade', range: '23–28*', zone: 'Stormwind City' },
      { level: 27, name: 'Razorfen Kraul', range: '24–29*', zone: 'The Barrens' },
      { level: 27, name: 'Excavation Site: Wetlands (new)', range: '24–29', zone: 'Wetlands' },
    ],
  },
  { date: 'Jan 16, 2027', dungeons: [{ level: 28, name: 'Gnomeregan', range: '25–30*', zone: 'Dun Morogh' }] },
  { date: 'Jan 23, 2027', dungeons: [{ level: 31, name: 'City of Dalaran (new)', range: '28–33', zone: 'Alterac Mountains' }] },
  {
    date: 'Jan 30, 2027',
    dungeons: [{ level: 33, name: 'Scarlet Monastery, all four wings', range: '30–35*', zone: 'Tirisfal Glades' }],
  },
  {
    date: 'Feb 20, 2027',
    dungeons: [
      { level: 37, name: 'Razorfen Downs', range: '34–39*', zone: 'The Barrens' },
      { level: 38, name: 'Uldaman', range: '35–40*', zone: 'Badlands' },
      { level: 38, name: 'The Drowned City (new)', range: '35–40', zone: 'Off the Stranglethorn Vale coast' },
    ],
  },
  {
    date: 'Apr 3, 2027',
    dungeons: [
      { level: 45, name: "Zul'Farrak", range: '42–47*', zone: 'Tanaris' },
      { level: 45, name: 'Maraudon', range: '42–47*', zone: 'Desolace' },
    ],
  },
  {
    date: 'Apr 24, 2027',
    dungeons: [
      { level: 48, name: 'Sunken Temple', range: '45–50*', zone: 'Swamp of Sorrows' },
      { level: 48, name: "Krol'dok Stronghold (new, outdoor)", range: '40–55', zone: 'Riverglades' },
    ],
  },
  {
    date: 'May 15, 2027',
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
  { date: 'Jun 19, 2027', dungeons: [{ level: 56, name: 'Lower Blackrock Spire', range: '53–58*', zone: 'Blackrock Mountain' }] },
  { date: 'Jul 3, 2027', dungeons: [{ level: 57, name: 'Dire Maul', range: '54–59*', zone: 'Feralas' }] },
  {
    date: 'Jul 10, 2027',
    dungeons: [
      { level: 58, name: 'Stratholme', range: '55–60*', zone: 'Eastern Plaguelands' },
      { level: 58, name: 'Blackmaw Hold (new)', range: '55–60', zone: 'Azshara' },
    ],
  },
  {
    date: 'Jul 24, 2027',
    dungeons: [
      { level: 59, name: 'Scholomance', range: '57–60*', zone: 'Western Plaguelands' },
      { level: 59, name: "Shaper's Terrace (new)", range: '58–60', zone: "Un'Goro Crater" },
    ],
  },
  {
    date: 'Jul 31, 2027',
    dungeons: [{ level: 60, name: 'Upper Blackrock Spire, then raids', range: '60', zone: 'Blackrock Mountain' }],
  },
]

export default function PlanModal({ ref }: { ref: Ref<HTMLDialogElement> }) {
  return (
    <dialog ref={ref} className="modal" aria-labelledby="plan-modal-title">
      <div className="modal-box max-w-3xl p-0">
        <header
          className="relative bg-cover bg-center px-10 pt-14 pb-10 sm:px-14"
          style={{ backgroundImage: `url(${headerBg})` }}
        >
          {/* Tint the image so the title stays readable, then fade into the modal body */}
          <div className="absolute inset-0 bg-linear-to-b from-base-300/40 to-base-100" />
          <form method="dialog">
            <button className="btn btn-circle btn-ghost btn-sm absolute top-5 right-5" aria-label="Close">
              <X className="size-4" />
            </button>
          </form>
          <h2
            id="plan-modal-title"
            className="relative text-3xl font-bold text-white drop-shadow-[0_2px_8px_rgb(0_0_0/0.6)]"
          >
            Forever Together Plan
          </h2>
        </header>
        {/* Keep this copy in sync with docs/content/forever-together-plan.md */}
        <div className="space-y-8 px-10 pt-4 pb-14 text-base-content/80 sm:px-14">
          <section>
            <h3 className="mb-2 text-lg font-semibold text-primary">How the Plan Works</h3>
            <p>
              WoW is more fun when we get to play together! This plan aims to give the team a guideline for a
              relaxed leveling plan that keeps us all around the same level with key check-in points where we could
              group up and run dungeons together as we level.
            </p>
          </section>
          <section>
            <h3 className="mb-2 text-lg font-semibold text-primary">Keys to Success</h3>
            <ul className="list-disc space-y-2 pl-5">
              <li>
                <strong>Everyone roll a character on an Alliance race on a PvE server.</strong> PvP is a sweat fest
                for gankers, and we must be in the same faction to group up.
              </li>
              <li>
                <strong>Everyone pick one character to go at this relaxed pace!</strong> If you find you're enjoying
                the game and want to play more, create another character to go fast on, level up professions, or
                become a day trader at the AH making stacks of gold.
              </li>
              <li>
                <strong>Assumes approximately 3 hours of playtime a week each.</strong> Same budget every week, start
                to finish. This allows us to play always with the double XP rested bonus.
              </li>
              <li>
                <strong>Rested-only after level 5.</strong> Level 1–5 freely on launch day, then always log out in an
                inn or a capital city.
              </li>
              <li>
                <strong>The level checkpoints are not strict.</strong> Just a general target, the plan does not break
                down if people are + or - 2 levels.
              </li>
              <li>
                <strong>The plan is adjustable.</strong> We can keep a pulse on if the leveling targets are too fast
                or slow and adjust the timeline accordingly.
              </li>
            </ul>
          </section>
          <section>
            <h3 className="mb-2 text-lg font-semibold text-primary">Alliance Faction Notes</h3>
            <ul className="list-disc space-y-2 pl-5">
              <li>
                <strong>Skipped: Ragefire Chasm.</strong> It's inside Orgrimmar, so it's left off the plan. Ruins of Lordaeron is the
                Horde's dungeon, but Alliance players can sneak in, so it stays.
              </li>
              <li>
                <strong>Skyborne</strong> is a new race that can be Alliance. It starts on Zephras Isle (levels 1–12) instead of the
                old starting zones, so a Skyborne player will meet the group a bit later.
              </li>
            </ul>
          </section>
          <section>
            <h3 className="mb-2 text-lg font-semibold text-primary">Leveling Timeline</h3>
            <p>
              The dates use roughly how long each level took a relaxed player in Classic, sped up by rested XP doubling
              monster-kill XP. That works out to about 105 hours played from 5 to 60. WoW Forever's numbers aren't
              known yet, so check the pace at the first few checkpoints and shift later dates if needed.
            </p>
            <div className="mt-8 overflow-x-auto rounded-box border border-base-content/10">
              <table className="table table-sm">
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Target level</th>
                    <th>Dungeon</th>
                    <th>Level range</th>
                    <th>Zone</th>
                  </tr>
                </thead>
                <tbody>
                  {checkpoints.map((checkpoint, i) =>
                    checkpoint.dungeons.map((dungeon, j) => (
                      <tr key={`${i}-${j}`}>
                        {j === 0 && (
                          <td rowSpan={checkpoint.dungeons.length} className="align-top whitespace-nowrap">
                            {checkpoint.date}
                          </td>
                        )}
                        <td>{dungeon.level}</td>
                        <td>{dungeon.name}</td>
                        <td className="whitespace-nowrap">{dungeon.range}</td>
                        <td>{dungeon.zone}</td>
                      </tr>
                    )),
                  )}
                </tbody>
              </table>
            </div>
          </section>
        </div>
      </div>
      {/* Clicking outside the box closes the modal */}
      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  )
}

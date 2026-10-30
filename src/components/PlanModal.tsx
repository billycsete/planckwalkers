import type { Ref } from 'react'
import { X } from 'lucide-react'
import headerBg from '../assets/backgrounds/forever-skyborn.webp'
import { checkpoints, formatDate } from '../data/plan.ts'

export default function PlanModal({ ref }: { ref: Ref<HTMLDialogElement> }) {
  return (
    // Darken daisyUI's 40% scrim so the page behind recedes further
    <dialog ref={ref} className="modal open:bg-black/70" aria-labelledby="plan-modal-title">
      {/* Cap the height below the viewport so the centered box keeps a gap above and below */}
      <div className="modal-box max-h-[calc(100dvh-2rem)] max-w-3xl p-0 sm:max-h-[calc(100dvh-4rem)]">
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
                <strong>Rested-only after level 10.</strong> Level 1–10 freely through launch weekend, then
                always log out in an inn or a capital city.
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
              monster-kill XP. That works out to about 100 hours played from 10 to 60. WoW Forever's numbers aren't
              known yet, so check the pace at the first few checkpoints and shift later dates if needed.
            </p>
            <div className="mt-8 overflow-x-auto rounded-box border border-base-content/10">
              <table className="table table-sm">
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Target level</th>
                    <th>Dungeon(s)</th>
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
                            {formatDate(checkpoint.date)}
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

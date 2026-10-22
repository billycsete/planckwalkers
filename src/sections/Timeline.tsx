export default function Timeline() {
  return (
    <section id="timeline" className="mx-auto w-full max-w-5xl px-4 py-12">
      {/* Keep this copy in sync with docs/content/forever-together-plan.md */}
      <header className="mb-8 max-w-3xl">
        <h2 className="mb-3 text-3xl font-bold text-white">Leveling Timeline</h2>
        <p className="text-base-content/80">
          The dates use roughly how long each level took a relaxed player in Classic, sped up by rested XP doubling
          monster-kill XP. That works out to about 105 hours played from 5 to 60. WoW Forever's numbers aren't known
          yet, so check the pace at the first few checkpoints and shift later dates if needed.
        </p>
      </header>
      <div className="card border border-base-content/10 bg-base-100">
        <div className="card-body">
          <p className="text-base-content/70">
            Each character's level over time, drawn against the group leveling plan's checkpoints, will go here.
          </p>
        </div>
      </div>
    </section>
  )
}

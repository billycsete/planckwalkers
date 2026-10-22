import type { Ref } from 'react'
import { X } from 'lucide-react'

export default function PlanModal({ ref }: { ref: Ref<HTMLDialogElement> }) {
  return (
    <dialog ref={ref} className="modal" aria-labelledby="plan-modal-title">
      <div className="modal-box max-w-2xl">
        <form method="dialog">
          <button className="btn btn-circle btn-ghost btn-sm absolute top-3 right-3" aria-label="Close">
            <X className="size-4" />
          </button>
        </form>
        <h2 id="plan-modal-title" className="text-2xl font-bold text-primary">
          Forever Together Plan
        </h2>
        <p className="py-4 text-base-content/70">The group leveling plan will go here.</p>
      </div>
      {/* Clicking outside the box closes the modal */}
      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  )
}

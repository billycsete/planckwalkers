import heroBg from '../assets/backgrounds/ironforge.webp'
import { useRef } from 'react'
import { Info } from 'lucide-react'
import logo from '../assets/plankwalkers-logo-transparent.png'
import PlanModal from '../components/PlanModal.tsx'

export default function Hero() {
  const planModalRef = useRef<HTMLDialogElement>(null)

  return (
    <section
      id="top"
      className="hero relative min-h-[60vh] bg-cover bg-center"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      {/* Lightly tint the bright snow, then fade into the page background below */}
      <div className="absolute inset-0 bg-base-300/20" />
      <div className="absolute inset-0 bg-linear-to-b from-transparent from-30% to-base-200" />
      <div className="hero-content relative py-10 text-center">
        <div className="flex max-w-2xl flex-col items-center">
          <h1 className="sr-only">Planckwalkers</h1>
          <img
            src={logo}
            alt="World of Warcraft: Planckwalkers"
            className="w-full max-w-xs sm:max-w-sm drop-shadow-[0_8px_24px_rgb(0_0_0/0.5)]"
          />
          <p className="max-w-xl py-6 text-lg text-shadow-md">
            A small guild of friendly folks leveling together on a PvE Alliance server in WoW Forever. Adventures will be
            had, dungeons will be cleared, but a good nerd-life balance comes first!
          </p>
          <button
            type="button"
            className="btn btn-primary"
            aria-haspopup="dialog"
            onClick={() => planModalRef.current?.showModal()}
          >
            Forever Together Plan
            <Info className="size-4" />
          </button>
        </div>
      </div>
      <PlanModal ref={planModalRef} />
    </section>
  )
}

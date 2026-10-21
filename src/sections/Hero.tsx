import mapBg from '../assets/map-bg.png'
import logo from '../assets/plankwalkers-logo-transparent.png'

export default function Hero() {
  return (
    <section
      id="top"
      className="hero relative min-h-[60vh] bg-cover bg-center"
      style={{ backgroundImage: `url(${mapBg})` }}
    >
      {/* Fade the map into the page background below */}
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-base-200" />
      <div className="hero-content relative py-10 text-center">
        <div className="flex max-w-2xl flex-col items-center">
          <h1 className="sr-only">Planckwalkers</h1>
          <img
            src={logo}
            alt="World of Warcraft: Planckwalkers"
            className="w-full max-w-xs sm:max-w-sm drop-shadow-[0_8px_24px_rgb(0_0_0/0.5)]"
          />
          <p className="max-w-xl py-6 text-lg text-shadow-md">
            A small guild of friends on US Stormrage, leveling together in WoW Forever from launch on Nov 4, 2026.
          </p>
          <a href="#timeline" className="btn btn-primary">
            See our progress
          </a>
        </div>
      </div>
    </section>
  )
}

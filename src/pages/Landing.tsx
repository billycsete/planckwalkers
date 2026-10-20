import { Link } from 'react-router'

export default function Landing() {
  return (
    <section className="hero rounded-box bg-base-100 py-16">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-4xl font-bold text-primary sm:text-5xl">Planckwalkers</h1>
          <p className="py-6">A small guild of friends on US Stormrage.</p>
          <div className="flex justify-center gap-3">
            <Link to="/retail" className="btn btn-secondary">
              Retail
            </Link>
            <Link to="/forever" className="btn btn-primary">
              WoW Forever
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

import { Menu, Shield } from 'lucide-react'
import { Link, NavLink } from 'react-router'

const links = [
  { to: '/retail', label: 'Retail' },
  { to: '/forever', label: 'Forever' },
]

function navClass({ isActive }: { isActive: boolean }) {
  return isActive ? 'menu-active' : ''
}

export default function NavBar() {
  return (
    <header className="navbar sticky top-0 z-10 bg-base-100 px-4 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown sm:hidden">
          <button tabIndex={0} className="btn btn-ghost btn-square" aria-label="Open menu">
            <Menu className="size-5" />
          </button>
          <ul tabIndex={0} className="menu dropdown-content z-20 mt-3 w-40 rounded-box bg-base-100 p-2 shadow">
            {links.map((link) => (
              <li key={link.to}>
                <NavLink to={link.to} className={navClass}>
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost text-xl text-primary">
          <Shield className="size-6" />
          Planckwalkers
        </Link>
      </div>
      <nav className="navbar-end hidden sm:flex">
        <ul className="menu menu-horizontal gap-1 px-1">
          {links.map((link) => (
            <li key={link.to}>
              <NavLink to={link.to} className={navClass}>
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

import { Shield } from 'lucide-react'

export default function NavBar() {
  return (
    <header className="navbar sticky top-0 z-10 bg-base-100 px-4 shadow-sm">
      <a href="#top" className="btn btn-ghost text-xl text-primary">
        <Shield className="size-6" />
        Planckwalkers
      </a>
    </header>
  )
}

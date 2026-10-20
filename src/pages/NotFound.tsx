import { Link } from 'react-router'

export default function NotFound() {
  return (
    <section className="text-center">
      <h1 className="mb-4 text-3xl font-bold">Page not found</h1>
      <Link to="/" className="btn btn-primary">
        Back home
      </Link>
    </section>
  )
}

import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] flex-col items-center justify-center px-6 pt-32 text-center">
      <p className="font-heading text-6xl font-extrabold text-clw-blue">404</p>
      <h1 className="mt-4 font-heading text-2xl font-bold text-clw-navy">Page Not Found</h1>
      <p className="mt-2 max-w-sm text-sm text-clw-muted">
        The page you're looking for doesn't exist or may have moved.
      </p>
      <Link to="/" className="btn-primary mt-8">
        Back to Home
      </Link>
    </section>
  )
}

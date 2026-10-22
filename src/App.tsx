import Hero from './sections/Hero.tsx'
import Timeline from './sections/Timeline.tsx'

export default function App() {
  return (
    <div className="flex min-h-screen flex-col bg-base-200">
      <main className="flex-1">
        <Hero />
        <Timeline />
      </main>
      <footer className="footer footer-center p-4 text-sm text-base-content/60">
        <p>Planckwalkers · Alliance</p>
      </footer>
    </div>
  )
}

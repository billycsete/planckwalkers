import NavBar from './components/NavBar.tsx'
import Hero from './sections/Hero.tsx'
import Timeline from './sections/Timeline.tsx'

export default function App() {
  return (
    <div className="flex min-h-screen flex-col bg-base-200">
      <NavBar />
      <main className="flex-1">
        <Hero />
        <Timeline />
      </main>
      <footer className="footer footer-center p-4 text-sm text-base-content/60">
        <p>Planckwalkers · US Stormrage · Alliance</p>
      </footer>
    </div>
  )
}

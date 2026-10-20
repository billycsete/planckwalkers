import { Navigate, Route, Routes } from 'react-router'
import NavBar from './components/NavBar.tsx'
import Forever from './pages/Forever.tsx'
import ForeverPlan from './pages/ForeverPlan.tsx'
import ForeverProgress from './pages/ForeverProgress.tsx'
import Landing from './pages/Landing.tsx'
import NotFound from './pages/NotFound.tsx'
import Retail from './pages/Retail.tsx'

export default function App() {
  return (
    <div className="flex min-h-screen flex-col bg-base-200">
      <NavBar />
      <main className="mx-auto w-full max-w-5xl flex-1 px-4 py-8">
        <Routes>
          <Route index element={<Landing />} />
          <Route path="retail" element={<Retail />} />
          <Route path="forever" element={<Forever />}>
            <Route index element={<Navigate to="plan" replace />} />
            <Route path="plan" element={<ForeverPlan />} />
            <Route path="progress" element={<ForeverProgress />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <footer className="footer footer-center p-4 text-sm text-base-content/60">
        <p>Planckwalkers · US Stormrage · Alliance</p>
      </footer>
    </div>
  )
}

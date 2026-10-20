import { NavLink, Outlet } from 'react-router'

function tabClass({ isActive }: { isActive: boolean }) {
  return isActive ? 'tab tab-active' : 'tab'
}

export default function Forever() {
  return (
    <section>
      <h1 className="mb-4 text-3xl font-bold">WoW Forever</h1>
      <div role="tablist" className="tabs tabs-border mb-6">
        <NavLink to="plan" role="tab" className={tabClass}>
          Leveling plan
        </NavLink>
        <NavLink to="progress" role="tab" className={tabClass}>
          Group progress
        </NavLink>
      </div>
      <Outlet />
    </section>
  )
}

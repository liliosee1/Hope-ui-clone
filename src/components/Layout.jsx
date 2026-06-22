import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'
import Navbar from './Navbar'

export default function Layout() {
  return (
    <div className="min-h-screen bg-[#f5f6fa] text-[#071434] lg:flex">
      <Sidebar />
      <div className="min-w-0 flex-1">
        <Navbar />
        <main className="min-h-[calc(100vh-54px)] p-5 [font-size:var(--app-font-size)] md:p-7">
          <Outlet />
        </main>
      </div>
    </div>
  )
}

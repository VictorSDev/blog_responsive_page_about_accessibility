import { Bars3Icon } from '@heroicons/react/24/outline'

interface NavBarProps {
  setSidebarOpen: (sidebarOpen: boolean) => void
}
export default function NavBar({ setSidebarOpen }: NavBarProps) {
  return (
    <div className="bg-[#141920] sticky top-0 z-40 flex items-center gap-x-6 px-4 py-4 shadow-sm sm:px-6 lg:hidden">
      <button
        type="button"
        className="-m-2.5 p-2.5 text-gray-700 lg:hidden"
        onClick={() => setSidebarOpen(true)}
        aria-label="modalOpen"
        aria-controls="menuOculto"
      >
        <Bars3Icon className="h-6 w-6 text-white" aria-hidden="true" />
      </button>
    </div>
  )
}

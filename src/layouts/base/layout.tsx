import NavBar from '@/components/Navigation/NavBar'
import SideBar from '@/components/Navigation/SideBar'
import { useState } from 'react'

type Props = {
  children: React.ReactNode
}

export default function BaseLayout({ children }: Props) {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div>
      <SideBar setSidebarOpen={setSidebarOpen} sidebarOpen={sidebarOpen} />
      <NavBar setSidebarOpen={setSidebarOpen} />
      <main className="py-10 lg:pl-72 bg-[#141920]">
        <article className="px-4 sm:px-6 lg:px-8 flex flex-col justify-center items-center max-w-[768px] mx-auto text-[#a8a8b3]">
          {children}
        </article>
      </main>
    </div>
  )
}

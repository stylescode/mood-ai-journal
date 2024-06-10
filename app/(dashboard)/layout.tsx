import { UserButton } from "@clerk/nextjs"
import React from "react"

interface DashboardLayoutProps {
  children: React.ReactNode
}

const links = [
  { href: '/', label: 'Home' },
  { href: '/journal', label: 'Journal' },
  { href: '/insights', label: 'Insights' },
]

const DashboardLayout = ({ children }: DashboardLayoutProps) => {

  return (
    <div className="w-screen h-screen relative">
      <aside className="absolute top-0 left-0 h-full w-[200px] border-r border-black/10">
        <div>
          Mood
        </div>
        <ul>
          {links.map((link, index) => (
            <li key={index}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>
      </aside>
      <div className="ml-[200px] h-full">
        <header className="h-[70px] border-b border-black/10">
          <div className="h-full w-full px-6 flex items-center justify-end">
            <UserButton />
          </div>
        </header>
        <div className="h-[calc(100vh - 60px)]">
          {children}
        </div>
      </div>
    </div>
  )
}

export default DashboardLayout
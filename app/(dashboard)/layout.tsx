import { UserButton } from "@clerk/nextjs"
import React from "react"

interface DashboardLayoutProps {
  children: React.ReactNode
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {

  return (
    <div className="w-screen h-screen relative">
      <div className="absolute top-0 left-0 h-full w-[200px] border-r border-black/10">
        Mood
      </div>
      <div className="ml-[200px]">
        <header className="h-[70px] border-b border-black/10">
          <div className="h-full w-full px-6 flex items-center justify-end">
            <UserButton />
          </div>
        </header>
        <div>
          {children}
        </div>
      </div>
    </div>
  )
}

export default DashboardLayout
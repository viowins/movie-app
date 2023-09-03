import { Logo } from "@/components"
import Navigation from "./Navigation"

export default function Sidebar() {
  return (
    <div className='fixed grid w-[124px] min-h-screen p-6'>
      <div className='flex flex-col gap-6 justify-between items-center h-full bg-zinc-900 rounded-lg px-4 py-6'>
        <div className="flex flex-col gap-6 items-center">
          <Logo to />
          <Navigation />
        </div>
      </div>
    </div>
  )
}

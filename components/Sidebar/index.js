import { Logo } from '@/components'
import Navigation from './Navigation'

export default function Sidebar() {
  return (
    <div className='fixed grid bottom-0 md:top-0 left-0 w-full md:w-[124px] md:min-h-screen p-6 z-[999] bg-zinc-950'>
      <div className='flex flex-col gap-6 justify-between items-center h-full px-4 py-6 bg-zinc-900 rounded-lg'>
        <div className='flex flex-col gap-6 items-center'>
          <div className='hidden md:block'><Logo linked /></div>
          <Navigation />
        </div>
      </div>
    </div>
  )
}

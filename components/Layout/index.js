import { Sidebar } from '@/components'

export default function Layout({children}) {
  return (
    <div className='grid grid-cols-1 max-w-[2000px] mx-auto'>
      <Sidebar />
      <main className='ml-[124px] p-6 min-h-full'>{children}</main>
    </div>
  )
}

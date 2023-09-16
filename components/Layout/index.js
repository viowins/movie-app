import { Sidebar } from '@/components'

export default function Layout({children}) {
  return (
    <div className='grid grid-cols-1 max-w-[2000px] mx-auto'>
      <Sidebar />
      <main className='md:ml-[120px] pb-10 md:pb-6 p-6 min-h-full'>{children}</main>
    </div>
  )
}

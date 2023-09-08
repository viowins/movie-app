import { Sidebar } from '@/components'

export default function Layout({children}) {
  return (
    <div className='grid grid-cols-1 max-w-[2000px] mx-auto'>
      <Sidebar />
      <main className='pl-[124px] py-6 pr-6'>{children}</main>
    </div>
  )
}

import { Sidebar, Footer } from '@/components'

export default function Layout({ children }) {
  return (
    <div className='grid grid-cols-1 max-w-[2000px] mx-auto overflow-x-hidden'>
      <Sidebar />
      <main className='flex flex-col min-h-screen md:ml-[120px] pb-10 md:pb-6 p-6 2xl:px-4'>
        <div className='flex-grow'>{children}</div>
        <Footer />
      </main>
    </div>
  )
}

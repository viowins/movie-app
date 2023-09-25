import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className='flex flex-col gap-3 mt-20 md:mt-28 mb-10 md:mb-12 text-center'>
      <div className='text-zinc-500'>
        Made by <Link className='text-white hover:underline' href='https://github.com/viowins/' target='_blank'>Emre Yaraşır</Link>
      </div>
      <div className='flex items-center justify-center gap-2'>
        Made with 
        <Link href='https://www.themoviedb.org/' target='_blank'>
          <Image src='/themoviedborglogo.svg' alt='The Movie Database' width={154} height={20} />
        </Link>
      </div>
    </footer>
  )
}

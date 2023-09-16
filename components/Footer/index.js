import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className='flex flex-col gap-3 mt-6 md:mt-8 text-center'>
      <div className='text-zinc-500'>
        Made by <Link className='text-white hover:underline' href='https://github.com/viowins/' target='_blank'>Emre Yaraşır</Link>
      </div>
      <div>
        Made with 
        <Link href='https://www.themoviedb.org/' target='_blank'>
          <Image href='/themoviedborglogo.svg' alt='The Movie Database' width={154} height={20} />
        </Link>
      </div>
    </footer>
  )
}

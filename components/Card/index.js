'use client'
import { useState } from "react"
import { Icon, Button } from '@/components'
import { motion } from "framer-motion"
import Image from "next/image"
import cn from 'classnames'

export default function Card({ title, movie = {}, ...props }) {
  const { id, media_type, poster_path, original_title, original_name, overview, adult } = movie
  const [showCardBody, setShowCardBody] = useState(false)

  const movieName = media_type == 'movie' ? movie.original_title : movie.original_name

  return (
    <motion.div whileHover={{ scale: 1.05 }} className='group relative transition-all duration-200 hover:shadow-2xl hover:z-[999]' onMouseEnter={() => setShowCardBody(true)}
      onMouseLeave={() => setShowCardBody(false)} {...props}>
      <div className="relative aspect-video">
        <img className="object-cover rounded-lg transition-all duration-200 delay-200 group-hover:rounded-b-none" src={movie.poster_path ? `${process.env.MOVIE_DB_IMG_URL}${movie.poster_path}` : 'https://placehold.co/600x400'} alt={movie.original_title} />
      </div>

      <div className={cn("absolute top-full grid transition-all duration-150 delay-200", showCardBody ? 'grid-rows-1fr' : 'grid-rows-0fr')}>
        <div className='overflow-hidden rounded-b-lg'>
          <div className='bg-zinc-900 px-4 pt-4 pb-5'>
            <div className='flex flex-row items-center justify-between flex-nowrap gap-4 mb-3'>
              <div className="flex items-center gap-3">
              <Button href={`/${movie.media_type}/${movie.id}`} className='!p-0' startIcon={<Icon name='PlayFill' />}>
                Resume S2 E3
              </Button>
              </div>
              <Button variant='contained' color='blueHover' width='square' rounded='full' startIcon={<Icon name='BookmarkOutline' />} />
            </div>

            <h3 className="text-lg font-semibold mb-2">{movieName}</h3>

            <div className="flex items-center gap-2 mb-2">
              <span className="text-sm font-bold text-zinc-400">2023</span>
              {movie.adult && <span className="bg-zinc-700 rounded text-xs font-semibold text-white py-1 px-1.5">+18</span>}
            </div>
            <p className="text-zinc-400 font-medium text-sm">{movie.overview.slice(0, 160)}</p>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

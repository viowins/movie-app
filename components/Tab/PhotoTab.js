import React from 'react'
import { MediaCard } from '@/components'

export default function PhotoTab({ photos = {} }) {
  return (
    <>
    <div>
      <h2 className='text-xl text-zinc-200 mb-6'>{photos.backdrops.length} {photos.backdrops.length > 1 ? 'Backdrops' : 'Backdrop'}</h2>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
        {photos.backdrops.map((photo, k) => (
          <div key={k}>
            <MediaCard mediaType='photo' media={photo} aspect='video' bordered />
          </div>
        ))}
      </div>
    </div>

    <div className='mt-6'>
      <h2 className='text-xl text-zinc-200 mb-6'>{photos.posters.length} {photos.posters.length > 1 ? 'Posters' : 'Poster'}</h2>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
        {photos.backdrops.map((photo, k) => (
          <div key={k}>
            <MediaCard mediaType='photo' media={photo} aspect='video' bordered />
          </div>
        ))}
      </div>
    </div>
    </>
  )
}

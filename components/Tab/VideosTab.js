import React from 'react'
import { MediaCard } from '@/components'

export default function VideosTab({videos = []}) {
  return (
    <div>
      <h2 className='text-xl text-zinc-200 mb-6'>{videos.length} {videos.length > 1 ? 'Videos' : 'Video'}</h2>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
        {videos.map((video, k) => (
          <div key={k}>
            <MediaCard mediaType='video' media={video} aspect='video' bordered />
          </div>
        ))}
      </div>
    </div>
  )
}

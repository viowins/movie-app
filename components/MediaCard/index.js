'use client'
import React, { useState } from 'react'
import { Poster, Icon, TrailerWatch } from '@/components'
import Image from 'next/image'
import cn from 'classnames'

export default function MediaCard({ mediaType, media = {}, bordered, aspect }) {
  const [showModal, setShowModal] = useState(false)

  const modalDisplayHandle = () => {
    setShowModal((showModal) => !showModal)
  }

  return (
    <div className='flex flex-col gap-4'>
      <div className={cn('relative rounded', bordered && 'border-zinc-800', aspect && `aspect-${aspect}`)}>
        {mediaType == 'photo' ? (
          <Poster path={media.file_path} />
        ) : (
          <>
            <Image src={`http://img.youtube.com/vi/${media.key}/0.jpg`} fill />
            <button className='group absolute inset-0 grid place-items-center' onClick={modalDisplayHandle}>
              <div className='grid place-items-center w-14 h-14 rounded-full text-white/60 tranisiton-all duration-200 group-hover:text-blue-600 group-hover:bg-blue-950/50'>
                <span className='ml-0.5'><Icon name='PlayFill' size={48} /></span>
              </div>
            </button>
          </>
        )}
      </div>
      {mediaType == 'video' && (
        <>
          <div>
            <h3 className='text-white'>{media.name}</h3>
            <p className='text-zinc-400 text-sm'>{media.type}</p>
          </div>
          <TrailerWatch key={media.key} showModal={showModal} setShowModal={setShowModal} modalHandle={modalDisplayHandle} />
        </>
      )}
    </div>
  )
}

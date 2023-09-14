'use client'
import React, { useState } from 'react'
import { Button, Icon, TrailerWatch } from '@/components'

export default function watchTrailer({ video = {} }) {
  const [showModal, setShowModal] = useState(false)

  const modalDisplayHandle = () => {
    setShowModal((showModal) => !showModal)
  }

  return (
    <>
      <div className='mt-4 z-50'>
        <Button onClick={modalDisplayHandle} variant='contained' color='secondary' startIcon={<Icon name='PlayFill' />}>Watch Trailer</Button>
      </div>
      <TrailerWatch showModal={showModal} setShowModal={setShowModal} modalHandle={modalDisplayHandle} key={video.key} />
    </>
  )
}

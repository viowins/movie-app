'use client'
import React from 'react'
import { Button, Icon } from '@/components'
import useModal from '@/hooks/modal'

export default function watchTrailer({ video = {} }) {
  const { Modal, openModal } = useModal(video.key)

  return (
    <>
      <div className='mt-4 z-50'>
        <Button onClick={openModal} variant='contained' color='secondary' startIcon={<Icon name='PlayFill' />}>Watch Trailer</Button>
      </div>
      <Modal />
    </>
  )
}

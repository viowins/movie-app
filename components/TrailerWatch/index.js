'use client'
import React from 'react'
import { Button, Icon } from '@/components'
import { motion } from 'framer-motion'
import cn from 'classnames'

export default function TrailerWatch({key, showModal, setShowModal, modalHandle}) {
  
const variants = {
  open: { opacity: 1 },
  closed: { opacity: 0 },
}

console.log(key)
  return (
    <motion.div
        animate={showModal ? "open" : "closed"}
        variants={variants}
        className={cn('fixed bg-black/40 top-0 left-0 right-0 bottom-0 w-screen h-screen grid place-items-center opacity-0', showModal ? 'z-[999] pointer-events-auto' : 'pointer-events-none')}
      >
        <div className='absolute top-4 right-8'><Button variant='contained' color='blueHover' width='square' rounded='full' startIcon={<Icon name='Close' />} onClick={modalHandle} /></div>
        <embed className='aspect-video w-auto h-4/5' src={`https://www.youtube.com/embed/${key}`} />
      </motion.div>
  )
}

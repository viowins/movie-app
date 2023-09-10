'use client'
import { useState } from 'react';
import { Button, Poster } from '@/components'
import { motion, AnimatePresence } from 'framer-motion';

export default function Tab({ tabs }) {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };


  return (
    <div className='relative max-w-5xl w-full mx-auto mt-6'>
      <div className="flex items-center justify-center gap-4 mb-4">
        {tabs.map((tab, index) => (
          <Button
            variant='contained'
            color='blueHover'
            rounded='full'
            key={index}
            className={index === activeTab ? 'bg-blue-950/50 text-blue-600' : 'text-zinc-500'}
            onClick={() => handleTabClick(index)}
          >
            {tab.label}
          </Button>
        ))}
      </div>
      <AnimatePresence>
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, visibility: 'hidden', }}
          animate={{ opacity: 1, visibility: 'visible' }}
          exit={{ opacity: 0, visibility: 'hidden' }}
          transition={{ duration: 0.2 }}
         >
          {tabs[activeTab].content}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

Tab.Overview = function ({ movie = {} }) {
  const { media_type, poster_path, original_title, original_name, overview } = movie
  const movieName = movie.media_type == 'movie' ? movie.original_title : movie.original_name

  return (
    <div className='grid gric-cols-1 md:grid-cols-[320px_auto] gap-8 items-center'>
      <div className='relative'>
        <Poster className='object-cover aspect-poster' path={movie.poster_path} alt={movieName} />
      </div>
      <div className='relative'>
        <h2 className='text-white text-4xl mb-4'>Storyline</h2>
        <p className='text-zinc-400 mb-6'>{movie.overview}</p>
      </div>
    </div>
  )
}
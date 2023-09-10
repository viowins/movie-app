'use client'
import { useState } from 'react';
import { Poster } from '@/components'

export default function Tab({ tabs }) {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div className='max-w-5xl w-full mx-auto'>
      <div className="flex items-center justify-center gap-4">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={index === activeTab ? 'text-white' : 'text-zinc-500'}
            onClick={() => handleTabClick(index)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="tab-content">
        {tabs[activeTab].content}
      </div>
    </div>
  )
}

Tab.Overview = function({movie = {}}) {
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
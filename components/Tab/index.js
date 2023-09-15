'use client'
import React, { useState } from 'react'
import { Button } from '@/components'

export default function Tab({ tabs = [] }) {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div className='relative mt-6'>
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
      <div>
          {tabs[activeTab].content}
          </div>
    </div>
  )
}
'use client'
import React, { useState } from 'react'
import { Button } from '@/components'
import styles from './Tab.module.css'

export default function Tab({ tabs = [] }) {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div className={styles.tab}>
      <div className={styles.tabButtons}>
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
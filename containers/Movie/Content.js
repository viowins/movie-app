'use client'
import { useState } from "react"
import { Tab } from "@/components"

export default function Content({ movie = {} }) {
  const [tabs, setTabs] = useState([
    {
      label: 'Overview',
      content: <Tab.Overview movie={movie} />,
    },
    {
      label: 'Videos',
      content: <Tab.Overview movie={movie} />,
    },
    {
      label: 'Photos',
      content: <Tab.Overview movie={movie} />,
    },
  ])


  return (
    <Tab tabs={tabs} />
  )
}

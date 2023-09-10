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
      content: <div>Bu sekme Komponentler içeriğini gösterir.</div>,
    },
    {
      label: 'Photos',
      content: <div>Bu sekme State içeriğini gösterir.</div>,
    },
  ])


  return (
    <Tab tabs={tabs} />
  )
}

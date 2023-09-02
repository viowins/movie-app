import { Logo } from "@/components"
import Navigation from "./Navigation"

export default function Sidebar() {
  return (
    <div className='p-6'>
      <div className='flex flex-col gap-6 justify-between'>
        <div>
          <Logo to />
        </div>
      </div>
    </div>
  )
}

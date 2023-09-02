import { Sidebar } from "@/components"

export default function Layout({ children }) {
  return (
    <div>
      <Sidebar />
      <main>{ children }</main>
    </div>
  )
}

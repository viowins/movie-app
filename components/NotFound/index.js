import { Button } from "@/components"

export default function NotFound({ children, title }) {
  return (
    <div className="fixed flex flex-col items-center justify-center w-screen h-screen">
      <h1 className="text-white text-3xl sm:text-4xl lg:text-5xl font-semibold mb-4">{title}</h1>
      {children && (
        <p className="text-zinc-400 mb-6">{children}</p>
      )}
      <Button href='/home' variant='contained' color='secondary'>Go Home</Button>
    </div>
  )
}

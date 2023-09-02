export default function handler(req, res) {
  res.status(200).json({ message: 'Hello from Next.js!' })
  res.status(404).json({ message: '404' })
  res.status(500).json({ message: '500' })
}
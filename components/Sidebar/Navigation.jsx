import NavLink from "./NavLink";

async function getNav() {
  const res = await fetch(`${process.env.APP_URL}/api/navigation`,{ cache: 'no-store' })
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
 
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}
 

export default async  function Navigation() {
  const nav = await getNav();


  return (
    <div className='flex flex-col gap-4 items-center'>
    { nav.map((item, k) => (
      <NavLink to={item.path} iconName={item.icon} target={item.target} key={k} />
    )) }
    </div>
  )
}

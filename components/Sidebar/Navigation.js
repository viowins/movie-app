import NavLink from "./NavLink"

export default function Navigation() {
  const navigation = [
    {
      name: 'Home',
      icon: 'HomeOutline',
      path: '/',
      target: null
    },
    {
      name: 'Movies',
      icon: 'MovieOutline',
      path: '/movies',
      target: 'movies'
    },
    {
      name: 'Series',
      icon: 'TVOutline',
      path: '/series',
      target: 'series'
    },
    {
      name: 'Favourites',
      icon: 'BookmarkOutline',
      path: '/favourites',
      target: 'favourites'
    },
    {
      name: 'Search',
      icon: 'Search',
      path: '/search',
      target: 'search'
    }
  ]

  return (
    <nav className='flex flex-nowrap md:flex-col gap-4 items-center'>
      {navigation.map((item, key) => (
        <NavLink to={item.path} iconName={item.icon} target={item.target} key={key} />
      ))}
    </nav>
  )
}

export default function handler(req, res) {
  res.status(200).json(
    [
      {
        name: 'Home',
        icon: 'HomeOutline',
        path: '/home',
        target: 'home'
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
  );
}
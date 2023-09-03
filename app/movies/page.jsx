async function getData() {
  const params = new URLSearchParams({ params: 'discover/movie' });

  const res = await fetch(`${process.env.APP_URL}/api/moviedb${params && `?${params.toString()}`}`,{ cache: 'no-store' })
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
  return res.json()
}
 
export default async function page() {
  const data = await getData();
  return (
     <div>
      {data.results.map((movie) => (
        <div key={movie.id}>
          <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
          <h3>{movie.title}</h3>
          <p>{movie.overview}</p>
        </div>
      ))}
  </div>
  )
}

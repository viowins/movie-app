import { Button, Icon } from '@/components'
import cn from 'classnames'

async function getData() {
  const res = await fetch(`${process.env.APP_URL}/api/moviedb?params=movie/565770`,{ cache: 'no-store' })
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary0
    throw new Error('Failed to fetch data')
  }
  return res.json()
}

export default async function Slide() {
  const data = await getData();
  const hours = Math.floor(data.runtime / 60);
  const minutes = data.runtime % 60;  

  return (
    <div className={cn("relative aspect-3/2 md:aspect-25/9 flex items-center rounded-lg overflow-hidden before:absolute before:left-0 before:w-2/3 before:h-full before:bg-gradient-to-r before:from-black before:from-30% before:to-transparent", data.backdrop_path ? '': 'bg-red-900/25')} style={{background: data.backdrop_path ?  `url('${process.env.MOVIE_DB_IMG_URL}${data.backdrop_path}')` : '', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}>
      <div className='flex flex-col gap-3 max-w-5xl px-8 py-4 z-50'>
        <h1 className="text-lg sm:text-xl md:text-3xl lg:text-5xl font-semibold">{data.original_title}</h1>
        <div className="text-zinc-400 text-sm py-2 flex gap-3 items-center">
          <div className='inline-flex items-center gap-1'>
            <span>{data.vote_average}</span>
            <span className='text-yellow-600'>
              <Icon name="StarFill" />
            </span>
          </div>
          <span className='w-1 h-1 rounded-full bg-zinc-500'></span>
          <span>{data.release_date.slice(0, 4)}</span>
          <span className='w-1 h-1 rounded-full bg-zinc-500'></span>
          <span>{hours}h {minutes}min</span>
        </div>
        <p className='text-zinc-300'>{data.overview}</p>
        <div className='mt-4'><Button variant='contained' color='secondary' startIcon={<Icon name="PlayFill" />} href="#">Watch Trailer</Button></div>
      </div>
    </div>
  );
}

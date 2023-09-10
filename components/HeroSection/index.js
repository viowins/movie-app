'use client'
import { useEffect, useState } from 'react'
import { Icon, Button, Popup,Video } from '@/components'
import cn from 'classnames'

export default function HeroSection({ movie = {} }) {
  const { media_type, original_name, original_title, vote_average, release_date, first_air_date, runtime, total_time, overview, backdrop_path } = movie
  const hours = Math.floor(movie.runtime / 60);
  const minutes = movie.runtime % 60;  
  const movieDate = movie.media_type == 'movie' ? movie.release_date.slice(0, 4) : movie.first_air_date.slice(0, 4)
  const movieName = movie.media_type == 'movie' ? movie.original_title : movie.original_name
  const [movieRate, setMovieRate] = useState([]);

  const [video, setVideo] = useState(false);

  useEffect(() => {
    const Arr = []
    for (let i = 1; i < 6; i++) {
      let vote = (movie.vote_average / 2).toFixed(1)
      if (vote > i) {
        Arr.push({name: 'StarFill'})
      }
      else if (vote < i && vote > i - 1) {
        Arr.push({name: 'StarHalf'})
      }
      else {
        Arr.push({name: 'StarOutline'})
      }
    }
    setMovieRate(Arr)
  }, [])
  

  return (
    <div className={cn("relative aspect-3/2 md:aspect-25/9 flex items-center rounded-lg overflow-hidden !bg-cover !bg-center !bg-no-repeat before:absolute before:left-0 before:w-2/3 before:h-full before:bg-gradient-to-r before:from-black before:from-30% before:to-transparent", !movie.backdrop_path &&  'bg-red-900/25')} style={{background: movie.backdrop_path && `url('https://image.tmdb.org/t/p/original${movie.backdrop_path}')`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}>
      <div className='flex flex-col gap-3 max-w-5xl px-8 py-4 z-50'>
        <h1 className="text-lg sm:text-xl md:text-3xl lg:text-5xl font-semibold">{movieName}</h1>
        <div className="text-zinc-400 text-sm py-2 flex gap-3 items-center">
          <div className='inline-flex items-center gap-1'>
            <span className='inline-flex items-center gap-1 text-yellow-600'>
              {movieRate.map((item, key) => (
                <Icon name={item.name} key={key} />
              ))}
            </span>
          </div>
          <span className='w-1 h-1 rounded-full bg-zinc-500'></span>
          <span>{movieDate}</span>
          {movie.runtime && (
            <>
              <span className='w-1 h-1 rounded-full bg-zinc-500'></span>
              <span>{movie.runtime}</span>
            </>
          )}
        </div>
        <p className='text-zinc-300'>{movie.overview}</p>
        <div className='mt-4'><Button onClick={()=>setVideo(true) } href="#" variant='contained' color='secondary' startIcon={<Icon name='PlayFill' />}>Watch Trailer</Button></div>
      </div>
      {(video &&
      <Popup setVideo={setVideo} >
        <Video  />
      </Popup>
      )}
    </div>
  )
}

import RateStars from './RateStars'
import WatchTrailer from './WatchTrailer'
import Link from 'next/link'
import cn from 'classnames'

export default function HeroSection({ movie = {}, isLinked = false, mediaType, id, video = {}, }) {
  return (
    <div className={cn("relative md:aspect-3/2 lg:aspect-25/9 flex flex-col justify-center rounded-lg px-8 py-8 overflow-hidden !bg-cover !bg-center !bg-no-repeat before:absolute before:left-0 before:w-2/3 before:h-full before:bg-gradient-to-r before:from-black before:from-30% before:to-transparent", !movie.backdrop_path &&  'bg-red-900/25')} style={{background: movie.backdrop_path && `url('https://image.tmdb.org/t/p/original${movie.backdrop_path}')`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}>
      {isLinked && <Link className='z-40 absolute top-0 left-0 bottom-0 right-0 w-full h-full' href={`/${mediaType}/${id}`}></Link>}
      <div className='flex flex-col gap-3 max-w-5xl z-30'>
        <h1 className="text-3xl lg:text-5xl font-semibold">{movie.original_title && movie.original_title}{movie.original_name && movie.original_name}</h1>
        <div className="text-zinc-400 text-sm py-2 flex gap-3 items-center">
          <div className='inline-flex items-center gap-1'>
            <RateStars rate={movie.vote_average} />
          </div>
          <span className='w-1 h-1 rounded-full bg-zinc-500'></span>
          <span>
            {movie.release_date && movie.release_date.slice(0, 4)}
            {movie.first_air_date && movie.first_air_date.slice(0, 4)}
          </span>
          {movie.runtime && (
            <>
              <span className='w-1 h-1 rounded-full bg-zinc-500'></span>
              <span>{Math.floor(movie.runtime / 60)}h {movie.runtime % 60}min</span>
            </>
          )}
        </div>
        <p className='text-zinc-300'>{movie.overview}</p>
      </div>
      <WatchTrailer video={video} />
    </div>
  )
}

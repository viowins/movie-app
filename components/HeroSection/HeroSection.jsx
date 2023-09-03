import { Button, Icon } from '@/components'
import cn from 'classnames'

export default function HeroSection({ children, title, rating, year, time, link, backgroundImage }) {
  return (
    <div className={cn("relative aspect-3/2 md:aspect-25/9 flex items-center rounded-lg overflow-hidden before:absolute before:left-0 before:w-2/3 before:h-full before:bg-gradient-to-r before:from-black before:from-30% before:to-transparent", backgroundImage ? '': 'bg-red-900/25')} style={{background: backgroundImage ?  `url('${process.env.MOVIE_DB_IMG_URL}${backgroundImage}')` : '', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}>
      <div className='flex flex-col gap-3 max-w-5xl px-8 py-4 z-50'>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold">{title}</h1>
        <div className="text-white text-sm py-2">
          <span className="mr-1">{rating}</span>
          <span className="mr-1">{year}</span>
          <span>{time}</span>
        </div>
        <p>{children}</p>
        <div className='mt-4'><Button variant='contained' color='secondary' startIcon={<Icon name="PlayFill" />} href={link ? link : '#'}>Watch Trailer</Button></div>
      </div>
    </div>
  );
}

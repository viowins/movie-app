
export default function GalleryCard({children}) {
  return (
    <div class="flex w-full h-[60vh]">
      {children}
    </div>
    /*<div className='overflow-x-visible flex flex-row grow flex-nowrap min-w-max gap-4'>
      {children}
    </div>*/
  )
}

GalleryCard.Slide = function({ children,...props }) {
  const {background} = props;
  return (
    <div class="flex-auto hover:flex-[5_1_0%]" style={{background:`url('${process.env.MOVIE_DB_IMG_URL}${background}')`, backgroundSize: 'cover' , backgroundPosition:'center',transition:'all .5s cubic-bezier(.2,.45,0,1)' }} > 
      {children}
    </div>
    /*<div style={{ width: `calc(calc((( 100vw - 2 * 72px - ( 5 - 1 ) * 24px ) / 5 ) / 0.66667) * 0.66667)`}}>
      {children}
    </div>*/
  )
}    
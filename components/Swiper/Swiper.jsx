import { Button, Icon } from '@/components'
import cn from 'classnames'

export default function Swiper({children}) {

  return (
    <div className='relative'>
      <Swiper.NavigationButton style='left' iconName='ChevronLeft' />
      <div className='overflow-x-visible flex flex-row grow flex-nowrap min-w-max gap-4 z-10'>
        {children}
      </div>
      <Swiper.NavigationButton style='right' iconName='ChevronRight'  />
    </div>
  )
}


Swiper.NavigationButton = function({ iconName, style, ...args}) {
  return (
    <div className={cn('absolute top-1/2 -translate-y-1/2 z-50', !style || style == 'left' && 'left-0', style == 'right' && 'right-0')} { ...args }>
      <Button>
        <Icon name={iconName} />
      </Button>
    </div>
  )
}

Swiper.Slide = function({ children, ...args }) {
  return (
    <div className='w-col-5' { ...args }>
      {children}
    </div>
  )
}
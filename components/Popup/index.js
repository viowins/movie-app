import {Button , Icon} from '@/components/'

export default function Popup({children, ...props}) {
    const {setVideo} = props;
  return <div className="fixed inset-0 flex bg-black/90 z-[1000] flex-col">
    <div className='flex w-full h-20 justify-end p-4'>
    <Button onClick={()=> setVideo(false)}  href="#" width='square' variant='contained' color='blueHover'  rounded='full' startIcon={<Icon name='Close' />} />
        </div>
    {children}
  </div>;
}

import {Button , Icon} from '@/components/'

export default function Popup({children, ...props}) {
    const {setPopup} = props;
  return <div className="fixed inset-0 flex bg-black/90 z-[1000] flex-col p-4">
    <Button className="ml-auto w-full" onClick={()=> setPopup(false)}  href="#" width='square' variant='contained' color='blueHover'  rounded='full' startIcon={<Icon name='Close' />} />
    {children}
  </div>;
}

import { BiHome, BiMovie, BiTv, BiBookmark, BiSearchAlt, BiPlay, BiPlus } from 'react-icons/bi'
import { BsChevronRight, BsChevronLeft } from 'react-icons/bs'
import { AiFillStar } from 'react-icons/ai'

export default function Icon({ size, name }) {
  return (
    <>
      {name && (
        <>
          {name === "HomeOutline" && <BiHome size={size ? size : '24'} />}
          {name === "MovieOutline" && <BiMovie size={size ? size : '24'} />}
          {name === "TVOutline" && <BiTv size={size ? size : '24'} />}
          {name === "BookmarkOutline" && <BiBookmark size={size ? size : '24'} />}
          {name === "Search" && <BiSearchAlt size={size ? size : '24'} />}
          {name === "PlayFill" && <BiPlay size={size ? size : '24'} />}
          {name === "StarFill" && <AiFillStar size={size ? size : '24'} />}
          {name === "Plus" && <BiPlus size={size ? size : '24'} />}
          {name === "ChevronRight" && <BsChevronRight size={size ? size : '24'} />}
          {name === "ChevronLeft" && <BsChevronLeft size={size ? size : '24'} />}
        </>
      )}
    </>
  )
}

import { BiHome, BiMovie, BiTv, BiSearch, BiBookmark, BiSearchAlt, BiPlay, BiPlus, BiLogoImdb, BiLogoWikipedia, BiLogoFacebook, BiLogoInstagramAlt, BiLogoTwitter, BiLink } from 'react-icons/bi'
import { BsChevronRight, BsChevronLeft, BsStar, BsStarHalf, BsStarFill } from 'react-icons/bs'
import { CgClose } from 'react-icons/cg'

export default function Icon({ size, name, ...props }) {
  return (
    <>
      {name && (
        <>
          {name === "HomeOutline" && <BiHome size={size ? size : '24'} {...props} />}
          {name === "MovieOutline" && <BiMovie size={size ? size : '24'} {...props} />}
          {name === "TVOutline" && <BiTv size={size ? size : '24'} {...props} />}
          {name === "BookmarkOutline" && <BiBookmark size={size ? size : '24'} {...props} />}
          {name === "Search" && <BiSearchAlt size={size ? size : '24'} {...props} />}
          {name === "PlayFill" && <BiPlay size={size ? size : '24'} {...props} />}
          {name === "StarFill" && <BsStarFill size={size ? size : '24'} {...props} />}
          {name === "StarOutline" && <BsStar size={size ? size : '24'} {...props} />}
          {name === "StarHalf" && <BsStarHalf size={size ? size : '24'} {...props} />}
          {name === "Plus" && <BiPlus size={size ? size : '24'} {...props}  />}
          {name === "ChevronRight" && <BsChevronRight size={size ? size : '24'} {...props} />}
          {name === "ChevronLeft" && <BsChevronLeft size={size ? size : '24'} {...props} />}
          {name === "Close" && <CgClose size={size ? size : '24'} {...props} />}
          {name === "imdb" && <BiLogoImdb size={size ? size : '24'} {...props} />}
          {name === "wikidata" && <BiLogoWikipedia size={size ? size : '24'} {...props} />}
          {name === "facebook" && <BiLogoFacebook size={size ? size : '24'} {...props} />}
          {name === "instagram" && <BiLogoInstagramAlt size={size ? size : '24'} {...props} />}
          {name === "twitter" && <BiLogoTwitter size={size ? size : '24'} {...props} />}
          {name === "link" && <BiLink size={size ? size : '24'} {...props} />}
          {name === "tvdb" && <BiLink size={size ? size : '24'} {...props} />}
          {name === "search" && <BiSearch size={size ? size : '24'} {...props} />}
        </>
      )}
    </>
  )
}
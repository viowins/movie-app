import { BiHome, BiMovie, BiTv, BiBookmark, BiSearchAlt, BiPlay } from 'react-icons/bi'

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
        </>
      )}
    </>
  )
}

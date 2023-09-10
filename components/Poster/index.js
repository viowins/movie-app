import React from 'react'

export default function Backdrop({ path, alt, ...props }) {
  return <img src={path ? `https://image.tmdb.org/t/p/original${path}` : 'https://placehold.co/600x400'} alt={alt} {...props} />
}

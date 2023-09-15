import React from 'react'
import { Poster, Button } from '@/components'

export default function OverviewTab({ movie = {}, release_date, director = {} }) {
  const arrayToStringHandle = (array) => {
    let result = ''
    array.map((item, key) => {
      if (key < 1) {
      result += item.name
      } else {
        result += ', ' + item.name
      }
    })
    return result
  }

  const movieDetails = [
    {
      label: 'Released',
      value: release_date.slice(0, 10),
    },
    {
      label: 'Director',
      value: director,
    },
    {
      label: 'Budget',
      value: movie.budget.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2,
      }),
    },
    {
      label: 'Status',
      value: movie.status,
    },
    {
      label: 'Runtime',
      value: `${Math.floor(movie.runtime / 60)}h ${movie.runtime % 60}min`,
    },
    {
      label: 'Revenue',
      value: movie.revenue.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2,
      }),
    },
    {
      label: 'Language',
      value: arrayToStringHandle(movie.spoken_languages),
    },
    {
      label: 'Cateogries',
      value: movie.genres,
    },
    {
      label: 'Productions',
      value: arrayToStringHandle(movie.production_companies),
    },
  ]

  return (
    <div className='grid grid-cols-1 lg:grid-cols-[320px_auto] max-w-5xl w-full mx-auto gap-6 items-center'>
      <Poster path={movie.poster_path} alt={movie.original_title ? movie.original_title : movie.original_name} />
      <div className='flex flex-col'>
        <h2 className='text-4xl text-white font-semibold mb-4'>Storyline</h2>
        <p className='text-lg text-zinc-400 mb-6'>{movie.overview}</p>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
          {movieDetails.map((detail, k) => (
            <div className='grid grid-cols-[100px_auto] gap-2 items-center' key={k}>
              <div className='text-zinc-300'>{detail.label}</div>
              <div className='text-zinc-400 text-sm'>
                {detail.label == 'Director' || detail.label == 'Cateogries' ? (
                  <>
                    {detail.label == 'Director' && (<Button variant='contained' color='blue' size='sm' rounded href='#'>{detail.value.name}</Button>)}
                    {detail.label == 'Cateogries' && (
                      <div className='flex items-center gap-1'>
                      {detail.value.map((item, k) => (
                        <Button variant='contained' color='blue' size='sm' rounded href='#' key={k}>{item.name}</Button>
                      ))}
                      </div>
                    )}
                  </>
                ) : (
                  <>{detail.value}</>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

import React from 'react'
import { IMG_CDN_URL } from '../utils/constants'

const MovieCard = ({poster_path}) => {
  return (
    <img src={IMG_CDN_URL + poster_path} className='w-52 px-4'/>
  )
}

export default MovieCard
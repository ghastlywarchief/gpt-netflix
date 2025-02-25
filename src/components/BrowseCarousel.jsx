import React from 'react'
import { useSelector } from 'react-redux'
import MovieCard from './MovieCard';

const BrowseCarousel = ({title, movies}) => {

  return (
        <div>
            <h1 className='text-4xl text-white py-8'>{title}</h1>
            <div className='flex overflow-x-scroll'>
                {(movies) && movies.map((item) => <MovieCard key={item.id} poster_path={item.poster_path} />)}
            </div>
        </div>       
  )
}

export default BrowseCarousel
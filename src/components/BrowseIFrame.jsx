import React from 'react'
import TrailerVideo from './TrailerVideo'
import TrailerInfo from './TrailerInfo'
import { useSelector } from 'react-redux'

const BrowseIFrame = () => {

    const movieList = useSelector(store=>store.movies?.nowPlayingMovies);
    if(!movieList)  return;

    const movieTrailer = movieList[0];

  return (
    <div>
        <TrailerInfo movie={movieTrailer}/>
        <TrailerVideo id={movieTrailer.id}/>
    </div>
  )
}

export default BrowseIFrame
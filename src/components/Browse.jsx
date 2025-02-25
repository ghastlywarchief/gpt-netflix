import React, { useEffect } from 'react'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import BrowseIFrame from './BrowseIFrame';
import BrowseCarousel from './BrowseCarousel';
import usePopularMovies from '../hooks/usePopularMovies';
import useTopRatedMovies from '../hooks/useTopRatedMovies';
import useUpcomingMovies from '../hooks/useUpcomingMovies';
import { useSelector } from 'react-redux';
import AISearch from './AISearch';

const Browse = () => {

  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();
  const aiSearchClicked = useSelector(store => store.aiSearch.aiSearchToggle);
  const nowPlayingMovies = useSelector(store => store.movies?.nowPlayingMovies);
  const popularMovies = useSelector(store => store.movies?.popularMovies);
  const topRatedMovies = useSelector(store => store.movies?.topRatedMovies);
  const upcomingMovies = useSelector(store => store.movies?.upcomingMovies);

  return (
    <>
      {(aiSearchClicked) ? 
        (<AISearch/>) : 
        (<div>
          <BrowseIFrame/>
          <div className='absolute z-30 bg-black'>
            <div className='-mt-[20%]'><BrowseCarousel title={"Now Playing"} movies={nowPlayingMovies}/></div>
            <div className=''><BrowseCarousel title={"Popular"} movies={popularMovies}/></div>
            <div className=''><BrowseCarousel title={"Top Rated"} movies={topRatedMovies}/></div>
            <div className=''><BrowseCarousel title={"Upcoming"} movies={upcomingMovies}/></div>
          </div>
            
        </div>)
      }
    </>
  )
}

export default Browse;
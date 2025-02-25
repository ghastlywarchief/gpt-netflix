import React from 'react'
import useTrailerVideo from '../hooks/useTrailerVideo';
import { useSelector } from 'react-redux';
import { IFRAME_EMBED_URL_PREFIX, IFRAME_EMBED_URL_SUFFIX } from '../utils/constants';

const TrailerVideo = ({id}) => {

    useTrailerVideo(id);
    const trailer = useSelector(store=>store.movies?.trailerVideo);

    if(!trailer) return;

  return (
    <div>
        <iframe className='w-screen aspect-video'
            src={IFRAME_EMBED_URL_PREFIX + trailer?.key + IFRAME_EMBED_URL_SUFFIX}
            title="YouTube video player" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen>
        </iframe>
    </div>
  )
}

export default TrailerVideo
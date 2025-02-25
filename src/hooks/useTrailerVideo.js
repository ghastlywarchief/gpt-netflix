import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../utils/storeutils/slices/moviesSlice";
import { useEffect } from "react";
import { API_OPTIONS, TRAILER_PREFIX, TRAILER_SUFFIX } from "../utils/constants";

const useTrailerVideo = (id) => {
    
    const dispatch = useDispatch();

    const fetchVideoList = async () => {
        const data = await fetch(TRAILER_PREFIX + id + TRAILER_SUFFIX, API_OPTIONS);
        const jsonData = await data.json();
        const trailer = jsonData.results.filter(i => i.type==="Trailer");
        dispatch(addTrailerVideo(trailer[0]));
    }    
    
    useEffect(()=>{
        fetchVideoList();
    }, [])
}

export default useTrailerVideo;
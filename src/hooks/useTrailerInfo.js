import { useEffect } from "react";
import { setTrailerInfo } from "../utils/storeutils/slices/moviesSlice";
import { useDispatch } from "react-redux";

const useTrailerInfo = (movie) => {

    const dispatch = useDispatch();

    const setTrailer = () => {
        console.log(movie);
        dispatch(setTrailerInfo(movie));
    }

    useEffect(() => {
        setTrailer();
    }, []);
}

export default useTrailerInfo;
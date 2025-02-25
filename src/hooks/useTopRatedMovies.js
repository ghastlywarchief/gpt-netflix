import { useEffect } from "react";
import { API_OPTIONS, TOP_RATED_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addTopRatedMovies } from "../utils/storeutils/slices/moviesSlice";

const useTopRatedMovies = () => {

    const dispatch = useDispatch();

    const favouriteMovies = async () => {
        const data = await fetch(TOP_RATED_URL, API_OPTIONS);
        const jsonData = await data.json();
        dispatch(addTopRatedMovies(jsonData.results));
    }

    useEffect(() => {
        favouriteMovies();
    }, [])
}

export default useTopRatedMovies;
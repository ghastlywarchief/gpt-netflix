import { useEffect } from "react";
import { API_OPTIONS, POPULAR_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addPopularMovies } from "../utils/storeutils/slices/moviesSlice";

const usePopularMovies = () => {

    const dispatch = useDispatch();

    const favouriteMovies = async () => {
        const data = await fetch(POPULAR_URL, API_OPTIONS);
        const jsonData = await data.json();
        dispatch(addPopularMovies(jsonData.results));
    }

    useEffect(() => {
        favouriteMovies();
    }, [])
}

export default usePopularMovies;
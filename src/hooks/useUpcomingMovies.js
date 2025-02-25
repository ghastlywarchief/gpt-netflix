import { useEffect } from "react";
import { API_OPTIONS, UPCOMING_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addUpcomingMovies } from "../utils/storeutils/slices/moviesSlice";

const useUpcomingMovies = () => {

    const dispatch = useDispatch();

    const favouriteMovies = async () => {
        const data = await fetch(UPCOMING_URL, API_OPTIONS);
        const jsonData = await data.json();
        dispatch(addUpcomingMovies(jsonData.results));
    }

    useEffect(() => {
        favouriteMovies();
    }, [])
}

export default useUpcomingMovies;
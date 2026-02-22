import {  useEffect } from "react";
import { Options_Keys } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addTopRatedMovies } from "../utils/trandingMovies";


const useTopRated = ()=>{
    const dispatch = useDispatch();

    const fetchTopRated = async ()=>{
        const response = await fetch("https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=110", Options_Keys);
        const json = await response.json();
        dispatch(addTopRatedMovies(json.results));
    }

    useEffect(()=>{
        fetchTopRated();
    },[])

}
export default useTopRated;
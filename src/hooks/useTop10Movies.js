import { useEffect } from "react";
import { Options_Keys } from "../utils/constant"
import { useDispatch } from "react-redux";
import { addTop10Movies } from "../utils/trandingMovies";



const useTop10Movies =()=>{
    const dispatch = useDispatch()
    const fetchTop10MoviesData = async()=>{

        const top10data = await fetch("https://api.themoviedb.org/3/movie/popular?language=en-US&page=2", Options_Keys);

        const top10moviesJson = await top10data.json()

        // console.log(top10moviesJson.results, "Top10Movies")
        dispatch(addTop10Movies(top10moviesJson.results))
    } 

    useEffect(()=>{
        fetchTop10MoviesData()
    },[])

}
export default useTop10Movies
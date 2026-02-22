import { useEffect, useState } from "react";
import { Options_Keys } from "../utils/constant"
import { useDispatch } from "react-redux";
import { addMovies } from "../utils/moviesAddslice";



const useAddMoremovies =()=>{
    const [addpagesdata, setAddpagesdata] = useState([]);
    const dispatch = useDispatch();



    const fetchmoremovies = async()=>{
        try {
            const page1 = await fetch("https://api.themoviedb.org/3/movie/popular?language=en-US&page=1", Options_Keys);
            const data1 = await page1.json();
            const page2 = await fetch("https://api.themoviedb.org/3/movie/popular?language=en-US&page=2", Options_Keys);
            const data2 = await page2.json();
            const page3 = await fetch("https://api.themoviedb.org/3/movie/popular?language=en-US&page=3", Options_Keys);
            const data3 = await page3.json();
            const page4 = await fetch("https://api.themoviedb.org/3/movie/popular?language=en-US&page=4", Options_Keys);
            const data4 = await page4.json();
            const page5 = await fetch("https://api.themoviedb.org/3/movie/popular?language=en-US&page=5", Options_Keys);
            const data5 = await page5.json();

            setAddpagesdata([...data1.results, ...data2.results, ...data3.results, ...data4.results, ...data5.results]);
            dispatch(addMovies([...data1.results, ...data2.results, ...data3.results, ...data4.results, ...data5.results]));
            
        } catch (error) {
            console.log("Eror fetching more movies:", error);
        }
    }
    useEffect(()=>{
        fetchmoremovies();
    },[])
    
    return addpagesdata
}

export default useAddMoremovies;




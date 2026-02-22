import { useEffect } from "react";
import { Options_Keys } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addCastAndMoviePlay } from "../utils/trandingMovies";

const useMoviePlay = (id) => {
    const dispatch = useDispatch()
  const fetchMoviePlay = async () => {
    try {
      const fetchData = await fetch(
        `https://api.themoviedb.org/3/movie/${id}/videos`,
        Options_Keys,
      );
      const jsonData = await fetchData.json();
      const filterData = jsonData.results.filter(
        (key, index) => key.type === "Trailer",
      );
      const Mainvideo = filterData[0].key || jsonData.results[0].key;

      const data = await fetch(
        `https://api.themoviedb.org/3/movie/${id}/credits`,
        Options_Keys,
      );

      const json = await data.json();
     const getMovieByid = await fetch(`https://api.themoviedb.org/3/movie/${id}`, Options_Keys);
     const getMovieByidJson = await getMovieByid.json();

     console.log(getMovieByidJson, "getMovieByidJsongetMovieByidJson")

      console.log(json.cast);
      dispatch(addCastAndMoviePlay({mainvideo:Mainvideo, cast:json.cast, movieDetails:getMovieByidJson}))


    } catch (error) {
      console.log("Error :", error);
    }
  };

  useEffect(() => {
    fetchMoviePlay();
  }, []);
};

export default useMoviePlay;

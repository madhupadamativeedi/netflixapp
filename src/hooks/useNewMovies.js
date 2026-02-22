import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setTrendingMovies } from "../utils/trandingMovies";
import { Options_Keys } from "../utils/constant";

const useNewMoviesData = () => {
  const dispatch = useDispatch();

  const fetchTrendingMovies = async () => {
    try {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
        Options_Keys
      );

      const json = await data.json();
      dispatch(setTrendingMovies(json.results));
    } catch (error) {
      console.error("Movie fetch error:", error);
    }
  };

  useEffect(() => {
    fetchTrendingMovies();
  }, []);
};

export default useNewMoviesData;

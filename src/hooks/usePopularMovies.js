import { useEffect } from "react";
import { Options_Keys } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addPopularMovies } from "../utils/trandingMovies";

const usePopularmovies = () => {
  const dispatch = useDispatch();
  const fetchpopularmovies = async () => {
    try {
      const moviedata = await fetch(
        "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
        Options_Keys,
      );
      const data = await moviedata.json();
      console.log(data.results, "popular movies data");
      dispatch(addPopularMovies(data.results));
    } catch (error) {
      console.error("Movie fetch error:", error);
    }
  };

  useEffect(() => {
    fetchpopularmovies();
  }, []);
};

export default usePopularmovies;

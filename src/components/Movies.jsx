import { useSelector } from "react-redux";
import newMoviesData from "../hooks/useNewMovies";
import MoviesBanner from "../pages/MoviesBanner";
import MoviesBody from "../pages/MoviesBody";
import SearchMovieCard from "./SearchMovieCard";

const Movies = () => {
  const searchMovies = useSelector((store) => store.searchmoviesData);

  newMoviesData();

  return (
    <div className="pt-0 w-full overflow-x-hidden">
      <MoviesBanner className="w-full" />
      <MoviesBody />
    </div>
  );
};

export default Movies;

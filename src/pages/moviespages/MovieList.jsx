import React from "react";
import { gener } from "../../utils/geners";
import { useDispatch, useSelector } from "react-redux";
import { cardMediumSize, cardSmalSize, imageUrl } from "../../utils/constant";
import useAddMoremovies from "../../hooks/useAddMoremovies";
import MovieCards from "../../components/MovieCards";
import CardTitle from "../../components/CardTitle";
import useSearchMovies from "../../hooks/useSearchMovies";
import { useNavigate } from "react-router-dom";
import { addIdTonavigateMoviePlay } from "../../utils/trandingMovies";

const MovieList = () => {
  useSearchMovies();
  const moviecard = useSelector((store) => store.addMoviesData);
  useAddMoremovies();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handelmoviedetail = (id) => {
    dispatch(addIdTonavigateMoviePlay(id));

    navigate("/moviePlay");
  };

  if (!moviecard) return null;

  const groupedMovies = gener.map((genre) => ({
    ...genre,
    movies: moviecard.filter((movie) => movie?.genre_ids?.includes(genre.id)),
  }));

  return (
    <div className=" w-[90vw] mx-auto">
      {groupedMovies.map((genre, index) => (
        <div key={genre.id} className=" px-6">
          {genre.movies.length > 2 && <CardTitle title={genre.name} />}
          <div className="flex overflow-x-scroll space-x-4 realtive scrollbar-hide">
            {genre.movies.length > 2 &&
              genre.movies.map((movie, i) => (
                <div key={movie.id}>
                  {index % 3 === 0 ? (
                    <MovieCards
                      path={movie.poster_path}
                      title={movie.title}
                      cardlength={cardMediumSize}
                      vote_average={movie.vote_average.toFixed(1)}
                    />
                  ) : (
                    <MovieCards
                      path={movie.backdrop_path}
                      title={movie.title}
                      cardlength={cardSmalSize}
                      vote_average={movie.vote_average.toFixed(1)}
                       handelClick ={()=>handelmoviedetail(movie.id)}
                    />
                  )}
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default MovieList;

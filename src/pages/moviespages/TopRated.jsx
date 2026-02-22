import React from "react";
import useTopRated from "../../hooks/useTopRated";
import { useDispatch, useSelector } from "react-redux";
import {  cardSmalSize, topRated } from "../../utils/constant";
import MovieCards from "../../components/MovieCards";
import CardTitle from "../../components/CardTitle";
import { useNavigate } from "react-router-dom";
import { addIdTonavigateMoviePlay } from "../../utils/trandingMovies";

const TopRated = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useTopRated();
  const topRatedMovies = useSelector((store) => store.newMovies.topratedmovies);
  const handelmoviedetail= (id)=>{
        dispatch(addIdTonavigateMoviePlay(id))
    
    navigate('/moviePlay')
    
  }
  return (
    <div className="mt-10 w-[90vw] mx-auto  px-2">
      <div className="flex justify-between items-center ">
      <CardTitle title={topRated}  />
      <div className="text-white flex gap-2 mr-20">
        <p>Movies</p>
        <p>Series</p>
      </div>
      </ div>
      <div className="flex overflow-x-scroll space-x-4 scrollbar-hide">
        {topRatedMovies?.map((movie) => (
          <MovieCards path={movie.backdrop_path} title={movie.title} cardlength= {cardSmalSize}  vote_average={movie.vote_average.toFixed(1)}
                      handelClick ={()=>handelmoviedetail(movie.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default TopRated;

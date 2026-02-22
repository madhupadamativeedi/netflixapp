import React, { useEffect, useState } from "react";
import MovieTreser from "../components/MovieTreser";
import MovieTitle from "../components/MovieTitle";
import { FaPlay } from "react-icons/fa";
import { CiCircleMore } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addCastAndMoviePlay, addIdTonavigateMoviePlay } from "../utils/trandingMovies";

const MoviesBanner = () => {
  const moviesData = useSelector((store) => store.newMovies.movies);

  const [movieIndex, setMovieIndex] = useState(0);
  const navigate = useNavigate()
  const dispatch = useDispatch()

  useEffect(() => {
    if (!moviesData || moviesData.length === 0) return;

    const interval = setInterval(() => {
      setMovieIndex((prev) => (prev + 1) % moviesData.length);
    }, 80000);

    return () => clearInterval(interval);
  }, [moviesData]);

  if (!moviesData) {
    return <div className="text-white">Loading...</div>;
  }
  const {
    original_title,
    overview,
    vote_average,
    release_date,
    genre_ids,
    id,
  } = moviesData[movieIndex];





  const handelplayNavigate =()=>{
    dispatch(addIdTonavigateMoviePlay(id))
    // dispatch(addCastAndMoviePlay({moviesData: moviesData[movieIndex]}))
    navigate(`/moviePlay`)
  }

  return (
    <div className="w-screen relative overflow-hidd scrollbar-hide">
      <div className="flex gap-4 overflow-hidden">
        <div key={id}>
          <MovieTreser id={id} />
          <div className="absolute top-0  text-white z-1 aspect-video bg-gradient-to-b from-black to-black/10 w-full">
            <MovieTitle
              original_title={original_title}
              overview={overview}
              vote_average={vote_average}
              release_date={release_date}
              genre_ids={genre_ids}
            />
          </div>
        </div>
        {/* PLay button and view More */}
        <div className="absolute top-[60%] z-150 left-10 flex gap-5">
          <div className="text-xl cursor-pointer font-normal text-black bg-white px-6 py-1 rounded-[5px] flex gap-2 justify-center items-center">
            <FaPlay/> 
          <p onClick={handelplayNavigate} className="">Play </p>
        </div>
          <div className="text-xl font-normal text-white border-2 border-amber-100 bg-transparent px-6 py-1 rounded-[5px] flex gap-2 justify-center items-center">
            <CiCircleMore/> 
          <p className="  ">More </p>
        </div>
        </div>
      </div>
    </div>
  );
};

export default MoviesBanner;

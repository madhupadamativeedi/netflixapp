import React, { useState } from "react";
import { useSelector } from "react-redux";
import useMoviePlay from "../../hooks/useMoviePlay";
import { imageUrl, profileIcons } from "../../utils/constant";
import CardTitle from "../../components/CardTitle";
import MovieTitle from "../../components/MovieTitle";
import { FaPlay } from "react-icons/fa";
import { CiCircleMore } from "react-icons/ci";

const MoviePlay = () => {
  const [showText, SetShowText] = useState(true);
  const id = useSelector((store) => store.newMovies.gotoMoviePlayId);
  const moviekeyAndCast = useSelector(
    (store) => store.newMovies.playMoviesAndCast,
  );

  const handelShowTitle = () => {
    SetShowText(!showText);
  };

  useMoviePlay(id);
  if (!moviekeyAndCast || !id) return;
  const { original_title, overview, vote_average, release_date, genre_ids } =
    moviekeyAndCast.movieDetails;
  return (
    <div className="relative bg-[#0D0D0D] overflow-x-hidden -mt-[10%]">
      <iframe
        className="w-full aspect-video"
        src={`https://www.youtube.com/embed/${moviekeyAndCast.mainvideo}?autoplay=1&mute=1&loop=1&playlist=${moviekeyAndCast.mainvideo}&controls=0&modestbranding=1`}
        title="YouTube video player"
        allow="autoplay; encrypted-media"
        allowFullScreen
      />

      {/* OVERLAY */}

      {showText && (
        <div className="absolute top-[4%] inset-0 bg-gradient-to-t from-black via-black/50 to-transparent z-10 text-white">
          <div className="">
            <MovieTitle
              original_title={original_title}
              overview={overview}
              vote_average={vote_average}
              release_date={release_date}
              genre_ids={genre_ids}
            />
          </div>
          <div className="absolute top-[25%] z-150 left-10 flex gap-5">
            <div className="text-xl cursor-pointer font-normal text-black bg-white px-6 py-1 rounded-[5px] flex gap-2 justify-center items-center">
              <FaPlay />
              <p className="" onClick={handelShowTitle}>
                Play{" "}
              </p>
            </div>
            <div className="text-xl font-normal text-white border-2 border-amber-100 bg-transparent px-6 py-1 rounded-[5px] flex gap-2 justify-center items-center">
              <CiCircleMore />
              <p className="  ">More </p>
            </div>
          </div>
        </div>
      )}
      {!showText && (
        <div className=" p-2 absolute top-[30%] rounded- z-200  px-5  text-xl cursor-pointer font-normal text-black bg-white  py-1 rounded-[5px]">
          <p className=" text-2xl text-center " onClick={handelShowTitle}>
            Cancle{" "}
          </p>
        </div>
      )}
      {/* CAST SECTION */}
      <div className="relative z-20 bg-gradient-to-b from-black via-[#191919] to-transparent shadow-[0_-50px_80px_rgba(25,25,25,1)]">
        <div className="ml-[3%] py-4">
          <CardTitle title="Actors" />
        </div>

        <div className="flex flex-wrap w-[95%] mx-auto gap-4 pb-10">
          {moviekeyAndCast?.cast?.map((cast) => (
            <div
              key={cast.credit_id || cast.cast_id}
              className="
            flex gap-4 p-3 rounded-lg group cursor-pointer
            border border-gray-600 hover:border-red-400 duration-200 w-full
            sm:w-[48%]
            lg:w-[32%]
          "
            >
                <img
                  src={
                    cast.profile_path
                      ? imageUrl + cast.profile_path
                      : profileIcons
                  }
                  alt={cast.name}
                  className="w-20 h-24 object-cover rounded shrink-0"
                />

                <div className="text-white">
                  <h1 className="text-sm sm:text-base font-semibold group-hover:text-orange-700 transition duration-200 leading-5">
                    {cast.name}
                  </h1>

                  <p className="text-xs sm:text-sm">
                    Character: {cast.character}
                  </p>

                  <p className="text-xs sm:text-sm text-gray-400">
                    Department: {cast.known_for_department}
                  </p>
                </div>
              
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MoviePlay;

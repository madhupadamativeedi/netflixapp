import React from "react";
import useTop10Movies from "../../hooks/useTop10Movies";
import { useDispatch, useSelector } from "react-redux";
import MovieCards from "../../components/MovieCards";
import { useNavigate } from "react-router-dom";
import { addIdTonavigateMoviePlay } from "../../utils/trandingMovies";

const Top10Movies = () => {
  const dispatch= useDispatch()
  const navigate = useNavigate()
  const top10moviesCOllection = useSelector(
    (store) => store.newMovies.top10Movies,
  );
   const handelmoviedetail= (id)=>{
          dispatch(addIdTonavigateMoviePlay(id))
      
      navigate('/moviePlay')
      
    }

  console.log(top10moviesCOllection, "top10moviesCOllection");

  useTop10Movies();
  if (!top10moviesCOllection) return;
  return (
    <div className="relative  w-[90vw] mx-auto">
      <div className="flex items-center">
        <h1
          className="text-[150px] p-10 font-black leading-none text-transparent -tracking-[10%] -skew-x-25 drop-shadow-[0_0_20px_rgba(255,0,0,0.4)]"
          style={{ WebkitTextStroke: "3px red" }}
        >
          TOP 10
        </h1>
        <p className="text-[30px] text-white -skew-x-8 leading-[2vw]  ml-2">
          CONTENT <br></br>
          TODAY
        </p>
      </div>
      <div className="flex  pl-20 gap-20 overflow-x-scroll space-x-6 scrollbar-hide">
        {top10moviesCOllection.slice(0, 10)?.map((topMovies, index) => (
          <div className="flex relative  group ">
            <h1
              className="text-[150px] absolute bottom-0 -left-18 group-hover:-left-22 duration-200 font-black leading-none text-transparent -tracking-[12%] -skew-x-15 drop-shadow-[0_0_20px_rgba(255,0,0,0.4)] group-hover:text-black  cursor-pointer"
              style={{ WebkitTextStroke: "3px red" }}
            >
              {index + 1}
            </h1>
            <div className="z-20">
              <MovieCards
                path={topMovies.poster_path}
               handelClick ={()=>handelmoviedetail(topMovies.id)}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Top10Movies;

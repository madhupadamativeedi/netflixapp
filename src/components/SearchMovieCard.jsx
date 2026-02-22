import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { imageUrl } from "../utils/constant";
import { ImCross } from "react-icons/im";
import { Link } from "react-router-dom";
import Hedder from "./Hedder";

const SearchMovieCard = () => {
  const [pages, setPages]= useState(10)
  const [pageination, setPagenations] =useState()
  const searchMovies = useSelector(
    (store) => store.searchmoviesData
  );

  console.log(searchMovies);
  const handelpagenation =()=>{
    if(searchMovies.length >= pages){
      setPages(10)
    }
    setPages(pages+10)

  }
  
useEffect(() => {
  const pageArray = Array.from(
    { length: Math.ceil(searchMovies.length / 10) },
    (_, i) => i + 1
  );

  console.log(pageArray)
  setPagenations(pageArray);
}, [searchMovies]);
  return (
    
    <div className="flex relative top-22 ">
    <h1 className="text-3xl">  {searchMovies.length}</h1>
    <div className="flex  flex-col w-[80%] mx-auto gap-10 p-4 bg-black/50 pt-10">
    { searchMovies.slice(0, pages)?.map((movie, index) => (
     ( movie.poster_path && <div className=" relative flex gap-20 w-5/8 bg-gray-600 mx-auto ml-20 p-5 rounded-2xl">
        <img src={imageUrl+movie.poster_path} className="w-30 rounded-2xl"/>
        <div >
          <h2 className="text-white pt-5 text-3xl">{movie.title}</h2>
          <p className="text-white/50 leading-4 mt-4">{movie.overview}</p>
          <div className="bg-white w-7 h-7 rounded-full absolute left-30 bottom-4">
          <p className={`${movie.vote_average>5 ? "text-green-800": "text-red-500"} w-full ml-2 text-[18px]`}>{Math.floor(movie.vote_average)}</p>
        </div>
        </div>

        </div>)
      ))}
      <div onClick={handelpagenation}> Next</div>
   {
  pageination?.map((page, index) => {
    return (
      <div key={index}>{index}</div>
    );
  })
}
      
    <Link to={"/browse"}> <ImCross className="text-2xl text-green-800 absolute top-5 right-[30%]"/></Link>
    
    </div>
    </div>
  );
};

export default SearchMovieCard;

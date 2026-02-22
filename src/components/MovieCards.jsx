import React from "react";
import { IoMdStar } from "react-icons/io";

import { imageUrl } from "../utils/constant";

const MovieCards = ({ path, title, cardlength, vote_average, handelClick }) => {
  // console.log(vote_average, "path in movie cards");
  return (
    <div
      className={` group relative ${cardlength === "small" ? "min-w-100" : "min-w-50"} overflow-hidden  `}
      onClick={handelClick}
    >
      <img
        src={imageUrl + path}
        alt={title}
        className="rounded-lg hover:scale-105 transition-transform duration-300 cursor-pointer "
      />
      <div className="">
        {vote_average && (
          <div
            className={` flex flex-col justify-end absolute left-0 bottom-0 w-full 
                text-white z-50 
                translate-y-full 
                group-hover:translate-y-0
                transition-transform duration-300
                bg-black/60 group-hover:h-full`}
          >
            <p
              className={`px-5 ${cardlength === "small" ? " mt-[35%] text-center font-extrabold tracking-[2px] " : "mt-[10%] font-extrabold"}`}
            >
              {title}
            </p>
            <div
              className={`flex justify-around gap-1 ${cardlength === "small" ? " mt-[0%] justify-center gap-5 " : "mt-[0%]"} `}
            >
              <p>Movie</p>
              <div className={`flex items-center `}>
                <IoMdStar className="text-yellow-400" />
                <p className="">{vote_average} /10 </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MovieCards;

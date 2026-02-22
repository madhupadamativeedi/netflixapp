import React, { useEffect, useState } from "react";
import { gener } from "../utils/geners";
import { IoMdStar } from "react-icons/io";
import { SlCalender } from "react-icons/sl";

const MovieTitle = ({
  original_title,
  overview,
  vote_average,
  release_date,
  genre_ids,
}) => {
  const [displayText, setDisplayText] = useState("");
  const [genereIDS, setGenereIDS] = useState([]);
  const genreNames =
    genre_ids?.map((id) => gener?.find((g) => g.id === id)?.name) || [];

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayText((prev) => prev + original_title[index]);
      index++;

      if (index === original_title.length) {
        clearInterval(interval);
      }
    }, 100);
    setGenereIDS(genreNames);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mt-[22%] ml-10">
      {original_title && (
        <h1 className="text-3xl font-extrabold leading-10 tracking-widest">
          {displayText}
        </h1>
      )}
      <div className="flex gap-2">
        {vote_average && (
          <div className=" h-5 p-3 bg-transparent border-2 border-amber-200 flex justify-center items-center rounded-xl font-bold cursor-pointer">
            {" "}
            <IoMdStar className="text-yellow-400 mr-1.5" />
            {vote_average?.toFixed(1)}/10
          </div>
        )}
        {release_date && (
          <div className=" h-5 p-3 bg-transparent border-2 border-amber-200 flex justify-center items-center rounded-xl font-bold cursor-pointer">
            <SlCalender className="text-white mr-1.5" />
            {release_date.split("-")[0]}
          </div>
        )}
        {genre_ids && (
          <div className="flex gap-2">
            {genereIDS.map((generNames, index) => (
              <div
                className=" h-5 p-3 bg-transparent border-2 border-amber-200 flex justify-center items-center rounded-xl font-bold cursor-pointer"
                key={index}
              >
                {generNames}
              </div>
            ))}
          </div>
        )}
      </div>
      <p className="text-sm mt-2 w-1/3 font-medium tracking-wide line-clamp-4">
        {overview}
      </p>
    </div>
  );
};

export default MovieTitle;

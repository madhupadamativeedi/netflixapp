import React, { useState } from "react";
import { useSelector } from "react-redux";
import useVideosBackGround from "../hooks/useVideosBackGround";

const MovieTreser = ({ id }) => {
    const [key, setKey] = useState(null);
  useVideosBackGround(id, setKey);

  const movieKey = useSelector(
    (store) => store.newMovies.movieVideos
  );


  if (!movieKey) return null; // wait for data

  return (
    <div>
      <iframe
        className="w-screen aspect-video"
        src={`https://www.youtube.com/embed/${movieKey ? movieKey : key}?autoplay=1&mute=1&end=150`}
        title="YouTube video player"
        allow="autoplay; encrypted-media"
        
      ></iframe>
    </div>
  );
};

export default MovieTreser;

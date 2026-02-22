import { useEffect } from "react";
import { Options_Keys } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addTrendingMovieVideo } from "../utils/trandingMovies";

const useVideosBackGround = (id, setKey) => {

  const dispatch = useDispatch();

  const videosFetch = async () => {
    try {
      const videoData = await fetch(
        `https://api.themoviedb.org/3/movie/${id}/videos`,
        Options_Keys,
      );

      const json = await videoData.json();
      setKey(json.results[0]?.key);

      const filtermoviekey = json.results.filter(
        (item) => item.type === "Trailer",
      );
      console.log(filtermoviekey, "filtermoviekeyfiltermoviekey")

      const movieKey = filtermoviekey? filtermoviekey[0].key : json.results[0]?.key;
      dispatch(addTrendingMovieVideo(movieKey));
    } catch (error) {
      console.error("Error fetching videos:", error);
    }
  };

  useEffect(() => {
    videosFetch();
  }, []);
};

export default useVideosBackGround;

import { useEffect, useState } from "react";
import { Options_Keys } from "../utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { addSearchFilter } from "../utils/searchSlice";

const useSearchMovies = () => {
  const searchTextData = useSelector((store) => store.searchTextData);
  const dispatch = useDispatch();

  const fetchSearchMovies = async () => {
    if (!searchTextData) return;

    const encodedQuery = encodeURIComponent(searchTextData);

    // fetch first page
    const firstRes = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${encodedQuery}&include_adult=false&language=en-US&page=1`,
      Options_Keys,
    );

    const firstJson = await firstRes.json();

    let allResults = [...firstJson.results];

    // fetch remaining pages
    for (let i = 2; i <= firstJson.total_pages; i++) {
      const res = await fetch(
        `https://api.themoviedb.org/3/search/movie?query=${encodedQuery}&include_adult=false&language=en-US&page=${i}`,
        Options_Keys,
      );

      const json = await res.json();
      allResults = [...allResults, ...json.results];
      dispatch(addSearchFilter(allResults));
    }
  };

  useEffect(() => {
    fetchSearchMovies();
  }, [searchTextData]);
};

export default useSearchMovies;

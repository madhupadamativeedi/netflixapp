import React from "react";
import { Link } from "react-router-dom";
import Hedder from "../components/Hedder";
import Movies from "../components/Movies";

const Browse = () => {
  return (
    <div className="flex  h-screen bg-[#14151A]  w-screen flex-col">
      <Hedder  className="" />
      <Movies />
    </div>
  );
};

export default Browse;

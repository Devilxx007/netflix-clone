import React, { useEffect, useState } from "react";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import AddIcon from "@mui/icons-material/Add";
import requests from "../requests";
import axios from "../axios";
const Banner = () => {
  const [movie, setmovie] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setmovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
    }
    fetchData();
  }, []);

  function truncate(string, n) {
    return string?.length > n ? string.substr(0, n - 3) + "..." : string;
  }

  return (
    <header
      className=" h-[450px] relative object-contain"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: "center center",
      }}
    >
      <div className=" flex flex-col justify-between ">
        <h1 className=" text-white ml-10 text-5xl mt-24 font-semibold ">
          {movie?.title || movie?.name || movie?.original_title}
        </h1>
        <div className=" flex ml-10 justify-between flex-row w-[280px] mt-4">
          <button className="font-semibold border-black border ml-1 flex justify-center items-center text-2xl bg-gray-600 rounded-md w-[130px] h-[50px] transition hover:bg-white hover:text-gray-600 hover:border-white duration-200">
            <PlayArrowIcon fontSize="large" />
            Play
          </button>
          <button className="font-semibold  border-black border ml-1 flex justify-center items-center text-2xl bg-gray-600 rounded-md w-[130px] h-[50px] transition hover:bg-white hover:text-gray-600 hover:border-white duration-200">
            <AddIcon fontSize="large" />
            My List
          </button>
        </div>
        <h1 className=" text-white mb-2 ml-10 font-semibold w-[45rem] leading-[2rem] pt-4 text-2xl max-w-[360px] h-[80px]">
          {truncate(movie?.overview, 200)}
        </h1>
      </div>
    </header>
  );
};

export default Banner;

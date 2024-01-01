import React from "react";
import { Movie } from "../../typing";
import Image from "next/image";
import getImagePath from "@/lib/getImagePath";

function MovieCard({ movie }: { movie: Movie }) {
  return (
    <div className="relative m-5 ">
      <div className="absoulte inset-0 bg-background-to-b from-gray-200/0 via-gray-900/10 to-gray-300 dark:to-[#1A1C29]/80 z-10  " />
      <p className=" absolute z-20 bottom-5 left-5">{movie.title}</p>
      <Image
        className="w-fit lg:min-w-[400px] h-56 object-center shadow-md shadow-gray-900 drop-shadow-xl rounded-sm   "
        alt={movie.title}
        width={1920}
        height={1080}
        key={movie.id}
        src={getImagePath(movie.backdrop_path || movie.poster_path)}
      />
    </div>
  );
}

export default MovieCard;

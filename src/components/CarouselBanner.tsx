"use client";
import React, { useEffect } from "react";
import { Movie } from "../../typing";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import getImagePath from "@/lib/getImagePath";
import { Fullscreen } from "lucide-react";
Autoplay.globalOptions = { delay: 8000 };
function CarouselBanner({ movies }: { movies: Movie[] }) {
  const [emblaRef] = useEmblaCarousel({ loop: true, duration: 100 }, [
    Autoplay(),
  ]);

  return (
    <div
      className="overflow-hidden  relative cursor-pointer z-18"
      ref={emblaRef}
    >
      <div className="flex">
        {movies.map((movie) => (
          <div key={movie.id} className="flex-full min-w-0  relative ">
            <Image
              alt=""
              key={movie.id}
              src={getImagePath(movie.backdrop_path, true)}
              width={1920}
              height={1080}
            />
            <div
              className="bg=transparent
            h-full  hidden lg:inline absolute 
            top-0  xl:pt-52 left-0 lg:mt-0 
            z-20  w-full bg-gradient-to-r from-gray-900/90 via transparent to transparet p-10 space-y-5 text-white"
            >
              <h2 className="text-5xl font-bold max-w-xl z-50">
                {movie.title}
              </h2>
              <p className="max-w-xl line-clamp-3">{movie.overview}</p>
            </div>
          </div>
        ))}
      </div>

      <div className=" absolute inset-0 bg-gradient-to-b from-gray-200/0 via-gray-900/25 to-gray-300 dark:to-[#1A1C29]"></div>
    </div>
  );
}

export default CarouselBanner;

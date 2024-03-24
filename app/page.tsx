import CrouselBannerWrapper from "@/components/CrouselBannerWrapper";
import MoviesCarousel from "@/components/MoviesCarousel";
import {
  getPopularMovies,
  getTopRatedMovies,
  getUpcomingMovies,
} from "@/lib/getMovies";
import React from "react";

export default async function Home() {
  const upcomingMovies = await getUpcomingMovies();
  const topRatedMovies = await getTopRatedMovies();
  const popularMovies = await getPopularMovies();
  return (
    <main className="">
      <CrouselBannerWrapper />
      <div className="flex flex-col space-y-2 xl:-mt-48 ">
        <MoviesCarousel movies={upcomingMovies} title="Upcoming" isVertical />
        <MoviesCarousel movies={topRatedMovies} title="Top Rated" />
        <MoviesCarousel movies={popularMovies} title="Popular" />
      </div>
    </main>
  );
}

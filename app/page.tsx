import MoviesCarousel from "@/components/MoviesCarousel";
import React from "react";

export default function Home() {
  return (
    <main>
      <h1>PAwandeep Singh</h1>

      {/* carouselBanner  */}
      <div className="flex flex-col space-y-2 xl:-mt-48 ">
        <MoviesCarousel movies={[]} title="Upcoming" />
        {/* <MoviesCarousel movies ={....} title = "Upcoming"/>*/}
        {/* <MoviesCarousel movies ={....} title = "Upcoming"/>*/}
      </div>
    </main>
  );
}

import { getDiscoverMovies } from "@/lib/getMovies";
import React from "react";
import CarouselBanner from "./CarouselBanner";

type Props = {
  id?: string;
  keywords?: string;
};
async function CrouselBannerWrapper({ id, keywords }: Props) {
  const movies = await getDiscoverMovies(id, keywords);
  return <CarouselBanner movies={movies} />;
}

export default CrouselBannerWrapper;

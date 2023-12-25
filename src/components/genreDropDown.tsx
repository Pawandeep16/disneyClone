import React from "react";

function GenreDropDown() {
  const url =
    "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc";
  const options: RequestInit = {
    method: "GET",
    headers: {
      accept: "application/jason",
      Authorization: `Bearer ${process.env.API_KEY}`,
    },
    next: {
      revalidate: 60 * 60 * 24,
    },
  };
  return <div>GenreDropDown</div>;
}

export default GenreDropDown;

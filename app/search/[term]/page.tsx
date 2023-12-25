import { notFound } from "next/navigation";
import React from "react";
type Props = {
  params: {
    term: string;
  };
};
function SearchPage({ params: { term } }: Props) {
  // no page found
  if (!term) notFound();
  //   remove the unecessary srtings
  const termToUse = decodeURI(term);

  //   API call For Movies

  //   API to get popular Movies

  return <div>Welcome to the SearchPage : {termToUse}</div>;
}

export default SearchPage;

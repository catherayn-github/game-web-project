import { AspectRatio, Spinner } from "@chakra-ui/react";
import React from "react";
import Game  from "../../../entities/Game";
import Trailer from "../../../entities/Trailer";
import useTrailers from "../../../hooks/useTrailers";

interface Props {
  gameId: number;
}

const GameTrailer = ({ gameId }: Props) => {
  const {
    data: trailers,
    error: errorTrailer,
    isLoading: isLoadingTrailer,
  } = useTrailers(gameId);

  if (isLoadingTrailer) return <Spinner />;

  console.log(trailers?.results);

  if (!trailers) throw new Error("trailer not found");

  const firstTrailer = trailers.results[0];

  return (
    <>
      <video src={firstTrailer.data.max} poster={firstTrailer.preview} controls/>

  
    </>
  );
};

export default GameTrailer;

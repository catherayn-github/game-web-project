import { Game } from "../services/game-service";
import { AxiosRequestConfig } from "axios";
import { Genre } from "../services/genre-service";
import useData from "./useData";
import { Platform } from "../services/platform-service";
import { GameQuery } from "../App";

function useGames(gameQuery: GameQuery
) {
  return useData<Game>(
    "/games",
    { params: { genres: gameQuery.genre?.id, platforms: gameQuery.platform?.id, ordering: gameQuery.sortOrder, search: gameQuery.searchText } },
    [gameQuery] //dependencies
  );
}

export default useGames;





















// import { useEffect, useState } from "react";
// import gameService, { Game, GamesResponse } from "../services/game-service";
// import {AxiosRequestConfig, CanceledError } from "axios";
// import { Genre } from "../services/genre-service";

// function useGames(selectedGenre: Genre | null, requestConfig? : AxiosRequestConfig) {
//   const [games, setGames] = useState<Game[]>([]);
//   const [error, setError] = useState("");
//   const [isLoading, setLoading] = useState(false);

//   useEffect(() => {
//     setLoading(true);
//     const { request, cancel } = gameService.get<GamesResponse>();
//     request
//       .then((response) => {
//         setGames(response.data.results);
//         setLoading(false);
//       })
//       .catch((error) => {
//         if (error instanceof CanceledError) return;
//         setError(error.message);
//         setLoading(false);
//       });

//     return () => cancel();
//   }, []);

//   return { games, setGames, error, setError, isLoading };
// }

// export default useGames;

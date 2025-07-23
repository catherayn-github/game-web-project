import { Game } from "../services/game-service";
import { AxiosRequestConfig } from "axios";
import { Genre } from "../services/genre-service";
import { FetchResponse } from "../services/api-clients";
import { Platform } from "../services/platform-service";
import { GameQuery } from "../App";
import { useQuery } from "@tanstack/react-query";
import { CACHE_KEY_GAMES } from "../constant";
import apiClient from "../services/api-clients";

function useGames(gameQuery: GameQuery) {
  return useQuery<FetchResponse<Game>, Error>({
    queryKey: [CACHE_KEY_GAMES, gameQuery],
    queryFn: () =>
      apiClient
        .get<FetchResponse<Game>>(
          "/games",
          {
            params: {
              genres: gameQuery.genre?.id,
              parent_platforms: gameQuery.platform?.id,
              ordering: gameQuery.sortOrder,
              search: gameQuery.searchText,
            },
          }
        )
        .then((response) => response.data),
        staleTime : 24 * 60 * 60 * 1000

  });
}

export default useGames;


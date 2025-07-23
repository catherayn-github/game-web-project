import { FetchResponse } from "../services/api-clients";
import { GameQuery } from "../App";
import { useQuery } from "@tanstack/react-query";
import { CACHE_KEY_GAMES } from "../constant";
import gameService from "../services/game-service";
import { Platform } from "./usePlatform";

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[]; //array of objects where each objects has a property called Platform of type Platform
  metacritic: number;
}

function useGames(gameQuery: GameQuery) {
  return useQuery<FetchResponse<Game>, Error>({
    queryKey: [CACHE_KEY_GAMES, gameQuery],
    queryFn: () =>
      gameService.getData({
        params: {
          genres: gameQuery.genre?.id,
          parent_platforms: gameQuery.platform?.id,
          ordering: gameQuery.sortOrder,
          search: gameQuery.searchText,
        }
      }),
      staleTime : 24*60*60*1000
  });
}

export default useGames;

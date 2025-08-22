import { useInfiniteQuery } from "@tanstack/react-query";
import ms from "ms";
import { CACHE_KEY_GAMES } from "../constant";
import { FetchResponse } from "../services/api-clients";
import gameService from "../services/game-service";
import useGameQueryStore from "../store/storeGameQuery";
import Game from "../entities/Game";

function useGames() {
  const  gameQuery  = useGameQueryStore(s => s.gameQuery);

  return useInfiniteQuery<FetchResponse<Game>, Error>({
    queryKey: [CACHE_KEY_GAMES, gameQuery],
    queryFn: ({ pageParam = 1 }) =>
      gameService.getData({
        params: {
          genres: gameQuery.genreId,
          parent_platforms: gameQuery.platformId,
          ordering: gameQuery.sortOrder,
          search: gameQuery.searchText,
          page: pageParam,
        },
      }),

    keepPreviousData: true,
    // getNextPage param calls this function to compute the next page number
    //allPages contains the data for each page retrieved
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.next ? allPages.length + 1 : undefined;
    },
    staleTime: ms("24h"),
  });
}

export default useGames;

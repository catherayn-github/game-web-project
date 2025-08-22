import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import { CACHE_KEY_GAMES } from "../constant";
import  Game  from "../entities/Game";
import gameService from "../services/game-service";


function useGame(slug:string) {

  return useQuery<Game, Error>({
    queryKey: [CACHE_KEY_GAMES, slug],
    queryFn: () => gameService.getDetail(slug),
    staleTime: ms("24h")
  });
}

export default useGame;

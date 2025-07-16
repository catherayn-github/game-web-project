import { useEffect, useState } from "react";
import gameService, { Game, GamesResponse } from "../services/game-service";
import { CanceledError } from "axios";

function useGames() {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const { request, cancel } = gameService.get<GamesResponse>();
    request
      .then((response) => setGames(response.data.results))
      .catch((error) => {
        if (error instanceof CanceledError) return;
        setError(error.message);
      });

    return () => cancel();
  }, []);

  return { games, setGames, error, setError };
}

export default useGames;

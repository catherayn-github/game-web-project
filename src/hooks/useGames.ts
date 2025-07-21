import { useEffect, useState } from "react";
import gameService, { Game, GamesResponse } from "../services/game-service";
import { CanceledError } from "axios";
import { s } from "framer-motion/dist/types.d-Bq-Qm38R";

function useGames() {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const { request, cancel } = gameService.get<GamesResponse>();
    request
      .then((response) => {
        setGames(response.data.results);
        setLoading(false);
      })
      .catch((error) => {
        if (error instanceof CanceledError) return;
        setError(error.message);
        setLoading(false);
      });

    return () => cancel();
  }, []);

  return { games, setGames, error, setError, isLoading };
}

export default useGames;

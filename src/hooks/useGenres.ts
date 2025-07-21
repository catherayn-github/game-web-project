import { useEffect, useState } from "react";
import genreService, { Genre, GenreResponse } from "../services/genre-service";
import { CanceledError } from "axios";


function useGenres() {
  const [genres, setGenres] = useState<Genre[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const { request, cancel } = genreService.get<GenreResponse>();
    request
      .then((response) => {
        setGenres(response.data.results);
        setLoading(false);
      })
      .catch((error) => {
        if (error instanceof CanceledError) return;
        setError(error.message);
        setLoading(false);
      });

    return () => cancel();
  }, []);

  return { genres, setGenres, error, setError, isLoading };
}

export default useGenres;

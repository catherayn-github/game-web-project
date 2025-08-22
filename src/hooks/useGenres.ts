import { useQuery } from "@tanstack/react-query";
import ms from 'ms';
import genres from "../data/genres";
import { CACHE_KEY_GENRES } from "../constant";
import genreService from "../services/genre-service";


function useGenres() {
  return useQuery({
    queryKey: CACHE_KEY_GENRES,
    queryFn: genreService.getData,
    staleTime: ms('24h'),
    initialData: genres,
  });
}

export default useGenres;

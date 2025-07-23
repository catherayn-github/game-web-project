import { useQuery } from "@tanstack/react-query";
import genres from "../data/genres";
import { CACHE_KEY_GENRES } from "../constant";
import { FetchResponse } from "../services/api-clients";
import { Genre } from "../services/genre-service";
import apiClient from "../services/api-clients";


function useGenres() {
 
  return useQuery({
    queryKey: CACHE_KEY_GENRES,
    // queryFn : useData<Genre>('/genres')
    queryFn : () => apiClient
    .get<FetchResponse<Genre>>('/genres')
    .then(res => res.data),
    staleTime: 24 * 60 * 60 * 1000, // 24 hours
    initialData : genres
  })
}

export default useGenres;

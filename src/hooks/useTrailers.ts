import { useQuery } from "@tanstack/react-query";
import ms from 'ms';
import Trailer from '../entities/Trailer';
import trailerService from '../services/trailer-service';
import { FetchResponse } from '../services/api-clients';

function useTrailers(gameId : number) {
  return  useQuery<FetchResponse<Trailer>>({
    queryKey : ['trailers', gameId],
    queryFn : () => trailerService(gameId).getData(),
    staleTime : ms("24h")
  })
}

export default useTrailers
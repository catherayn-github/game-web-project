import { useQuery } from "@tanstack/react-query";
import ms from 'ms'
import platforms from "../data/platforms";
import { CACHE_KEY_PLATFORMS } from "../constant";
import platformService from "../services/platform-service";


function usePlatforms() {
  return useQuery ({
     queryKey : CACHE_KEY_PLATFORMS,
     queryFn : platformService.getData, 
     initialData : platforms,
     staleTime : ms('24h')

  })
}

export default usePlatforms;

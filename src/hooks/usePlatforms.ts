import { useQuery } from "@tanstack/react-query";
import platforms from "../data/platforms";
import { CACHE_KEY_PLATFORMS } from "../constant";
import platformService from "../services/platform-service";


export interface Platform {
    id : number
    name : string
    slug : string
}

function usePlatforms() {
  return useQuery ({
     queryKey : CACHE_KEY_PLATFORMS,
     queryFn : platformService.getData, 
     initialData : platforms,
     staleTime : 24 * 60 * 60 * 1000 // 24hrs

  })
}

export default usePlatforms;

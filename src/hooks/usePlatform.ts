import { useQuery } from "@tanstack/react-query";
import platforms from "../data/platforms";
import { CACHE_KEY_PLATFORMS } from "../constant";
import apiClients from "../services/api-clients";
import { FetchResponse } from "../services/api-clients";
import { Platform } from "../services/platform-service";

function usePlatform() {
  return useQuery ({
     queryKey : CACHE_KEY_PLATFORMS,
     queryFn : () => apiClients
     .get<FetchResponse<Platform>>('/platforms/lists/parents')
     .then(response => response.data), 
     initialData : platforms,
     staleTime : 24 * 60 * 60 * 1000 // 24hrs

  })
}

export default usePlatform;

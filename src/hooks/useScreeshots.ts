import { useQuery } from "@tanstack/react-query";
import ScreenShot from "../entities/ScreenShot";
import { FetchResponse } from "../services/api-clients";
import screenShotService from "../services/screenshot-service";

function useScreenshot(gameId : number) {
 return useQuery<FetchResponse<ScreenShot>>({
    queryKey : ['screenshots', gameId],
    queryFn : () => screenShotService(gameId).getData()
 })
}

export default useScreenshot
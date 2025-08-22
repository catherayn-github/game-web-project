import ScreenShot from "../entities/ScreenShot";
import APIClient from "./api-clients";

function screenShotService (gameId : number){
    return  new APIClient<ScreenShot>(`/games/${gameId}/screenshots`);
}

export default screenShotService
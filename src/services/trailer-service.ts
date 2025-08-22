import  Game  from "../entities/Game";
import Trailer from "../entities/Trailer";
import APIClient from "./api-clients";


function trailerServcie(gameId : number){
    return new APIClient<Trailer>(`/games/${gameId}/movies`);
}

export default trailerServcie;
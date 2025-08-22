import Game  from "../entities/Game";
import APIClient from "./api-clients";

export default new APIClient<Game>('/games');
import { Game } from "../hooks/useGames";
import APIClient from "./api-clients";

export default new APIClient<Game>('/games');
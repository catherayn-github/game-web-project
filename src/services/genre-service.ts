import { Genre } from "../hooks/useGenres";
import APIClient from "./api-clients";

export default new APIClient<Genre>('/genres');
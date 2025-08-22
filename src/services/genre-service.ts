import  Genre from "../entities/Genre";
import APIClient from "./api-clients";

export default new APIClient<Genre>('/genres');
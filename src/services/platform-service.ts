import Platform from "../entities/Platform";
import APIClient from "./api-clients";

export default new APIClient<Platform>('/platforms/lists/parents');
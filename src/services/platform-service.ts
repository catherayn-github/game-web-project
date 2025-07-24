import { Platform } from "../hooks/usePlatforms";
import APIClient from "./api-clients";

export default new APIClient<Platform>('/platforms/lists/parents');
import { Platform } from "../hooks/usePlatform";
import APIClient from "./api-clients";

export default new APIClient<Platform>('/platforms/lists/parents');
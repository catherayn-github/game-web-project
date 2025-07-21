import { Platform } from "../services/platform-service";
import useData from "./useData";


function usePlatform() {
  return useData<Platform>('/platforms/lists/parents');
}

export default usePlatform;

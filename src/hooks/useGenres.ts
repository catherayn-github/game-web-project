import genreService, { Genre } from "../services/genre-service";
import useData from "./UseData";


function useGenres() {
  return useData<Genre>('/genres');
}

export default useGenres;

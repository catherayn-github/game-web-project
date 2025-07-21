import genreService, { Genre } from "../services/genre-service";
import useData from "./useData";


function useGenres() {
  return useData<Genre>('/genres');
}

export default useGenres;

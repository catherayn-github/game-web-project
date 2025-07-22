import genres from "../data/genres";

function useGenres() {
  return (
    {
      data : genres,
      isLoading : false,
      error : null
    });
}

export default useGenres;

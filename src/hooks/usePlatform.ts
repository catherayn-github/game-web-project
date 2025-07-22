import platforms from "../data/platforms";

function usePlatform() {
  return ({data : platforms, isLoading : false, error : null});
}

export default usePlatform;

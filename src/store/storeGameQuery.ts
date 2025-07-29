import { create } from "zustand";
import { mountStoreDevtool } from "simple-zustand-devtools";

interface GameQuery {
  genreId?: number;
  platformId?: number;
  sortOrder?: string;
  searchText?: string | null;
}

interface GameQueryStore {
  gameQuery: GameQuery;
  setSearchText: (searchText : string) => void;
  setSelectedPlatformId: (platformId : number) => void;
  setSelectedGenreId: (genreId : number) => void;
  setSelectedSetOrder: (sortOrder : string) => void;
}

const useGameQueryStore = create <GameQueryStore>(set => ({
    gameQuery : {}, 
    setSearchText : (searchText) => set(()=> ({ gameQuery : {searchText}})),
    setSelectedPlatformId : (platformId) => set((store) => ({gameQuery : {...store.gameQuery, platformId }})),
    setSelectedGenreId : (genreId) => set ((store) => ({gameQuery : {...store.gameQuery, genreId}})),
    setSelectedSetOrder : (sortOrder) => set((store) => ({gameQuery : {...store.gameQuery, sortOrder}}))
}))

if(process.env.NODE_ENV === 'development')
    mountStoreDevtool('GameQuery Store', useGameQueryStore)
export default useGameQueryStore;
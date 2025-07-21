import { Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import GameGrid from "./components/Main/GameGrid/GameGrid";
import ListOfGenres from "./components/Aside/ListOfGenres/ListOfGenres";
import { useState } from "react";
import { Genre } from "./services/genre-service";
import PlatformFilter from "./components/Main/PlatformFilter/PlatformFilter";
import { Platform } from "./services/platform-service";
import SortFilter from "./components/Main/SortFilter/SortFilter";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string;
}
function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);
  // const [selectedGenre, setSelectedGenre] = useState <Genre | null>(null);
  // const [selectedPlatform, setSelectedPlatform] = useState <Platform | null> (null);
  return (
    <div>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`, // this is for large devices that is 1024px and above
        }}
        templateColumns={{
          base: "1fr",
          lg: "200px 1fr",
        }}
      >
        <GridItem area="nav">
          <NavigationBar />
        </GridItem>
        <Show above="lg">
          <GridItem area="aside" paddingX={5}>
            <ListOfGenres
              onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
              selectedGenre={gameQuery.genre}
            />
          </GridItem>
        </Show>

        <GridItem area="main">
          <HStack spacing={5} paddingLeft={5} marginBottom={5} >
            <PlatformFilter
              onSelectPlatform={(platform) =>
                setGameQuery({ ...gameQuery, platform })
              }
              selectedPlatform={gameQuery.platform}
            />
            <SortFilter onSelectSortOrder={(sortOrder) => setGameQuery({...gameQuery, sortOrder})} selectedSortOrder={gameQuery.sortOrder}/>
          </HStack>

          <GameGrid gameQuery={gameQuery} />
        </GridItem>
      </Grid>
    </div>
  );
}

export default App;

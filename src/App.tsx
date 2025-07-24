import { Grid, GridItem, HStack, Show, Box } from "@chakra-ui/react";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import GameGrid from "./components/Main/GameGrid/GameGrid";
import ListOfGenres from "./components/Aside/ListOfGenres/ListOfGenres";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import PlatformFilter from "./components/Main/PlatformFilter/PlatformFilter";
import { Platform } from "./hooks/usePlatform";
import SortFilter from "./components/Main/SortFilter/SortFilter";
import GameHeader from "./components/Main/GameHeader/GameHeader";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string;
  searchText: string | null;
  pageSize : number | null
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
          <NavigationBar
            onSearch={(searchText) =>
              setGameQuery({ ...gameQuery, searchText })
            }
          />
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
          <Box paddingLeft={5}>
            <GameHeader gameQuery={gameQuery} />
            {/* if there is an issues with the margin you can solve it by changing the HStack into a Flex and then wrap each iteam in a Box and give it a marginRight */}

            <HStack spacing={5}  marginBottom={5}>
              <PlatformFilter
                onSelectPlatform={(platform) =>
                  setGameQuery({ ...gameQuery, platform })
                }
                selectedPlatform={gameQuery.platform}
              />
              <SortFilter
                onSelectSortOrder={(sortOrder) =>
                  setGameQuery({ ...gameQuery, sortOrder })
                }
                selectedSortOrder={gameQuery.sortOrder}
              />
            </HStack>
          </Box>

          <GameGrid gameQuery={gameQuery} />
        </GridItem>
      </Grid>
    </div>
  );
}

export default App;

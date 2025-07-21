import { Button, ButtonGroup, Grid, GridItem, Show } from "@chakra-ui/react";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import GameGrid from "./components/Main/GameGrid/GameGrid";
import ListOfGenres from "./components/Aside/ListOfGenres/ListOfGenres";
import { useState } from "react";
import { Genre } from "./services/genre-service";
import PlatformFilter from "./components/Main/PlatformFilter/PlatformFilter";
import { Platform } from "./services/platform-service";

function App() {
  const [selectedGenre, setSelectedGenre] = useState <Genre | null>(null);
  const [selectedPlatform, setSelectedPlatform] = useState <Platform | null> (null);
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
            <ListOfGenres onSelectGenre={(selectedGenre) => setSelectedGenre(selectedGenre)} selectedGenre={selectedGenre}/>
          </GridItem>
        </Show>

        <GridItem area="main">
          <PlatformFilter onSelectPlatform = {(selectedPlatform) => setSelectedPlatform(selectedPlatform)} selectedPlatform={selectedPlatform}/>
          <GameGrid selectedGenre={selectedGenre} selectedPlatform={selectedPlatform}/>
        </GridItem>
      </Grid>
    </div>
  );
}

export default App;

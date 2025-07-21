import { Button, ButtonGroup, Grid, GridItem, Show } from "@chakra-ui/react";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import GameGrid from "./components/Main/GameGrid/GameGrid";
import ListOfGenres from "./components/Aside/ListOfGenres/ListOfGenres";

function App() {
  return (
    <div>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`, // this is for large devices that is 1024px and above
        }}
      >
        <GridItem area="nav">
          <NavigationBar />
        </GridItem>
        <Show above="lg">
          <GridItem area="aside">
            <ListOfGenres />
          </GridItem>
        </Show>

        <GridItem area="main">
          <GameGrid />
        </GridItem>
      </Grid>
    </div>
  );
}

export default App;

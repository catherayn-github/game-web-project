import { Button, ButtonGroup, Grid, GridItem, Show } from "@chakra-ui/react";
import NavigationBar from "./components/NavigationBar/NavigationBar";

function App() {
  return (
    <div>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`, // this is for large devices that is 1024px and above
        }}
      >
        <GridItem area="nav" bg="gold">
          <NavigationBar />
        </GridItem>
        <Show above="lg">
          <GridItem area="aside" bg="tomato">
            Aside
          </GridItem>
        </Show>

        <GridItem area="main" bg="cyan">
          Main
        </GridItem>
      </Grid>
    </div>
  );
}

export default App;

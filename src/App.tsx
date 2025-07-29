import { Box, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import ListOfGenres from "./components/Aside/ListOfGenres/ListOfGenres";
import GameGrid from "./components/Main/GameGrid/GameGrid";
import GameHeader from "./components/Main/GameHeader/GameHeader";
import PlatformFilter from "./components/Main/PlatformFilter/PlatformFilter";
import SortFilter from "./components/Main/SortFilter/SortFilter";
import NavigationBar from "./components/NavigationBar/NavigationBar";

function App() {
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
            <ListOfGenres />
          </GridItem>
        </Show>

        <GridItem area="main">
          <Box paddingLeft={5}>
            <GameHeader />
            {/* if there is an issues with the margin you can solve it by changing the HStack into a Flex and then wrap each iteam in a Box and give it a marginRight */}

            <HStack spacing={5} marginBottom={5}>
              <PlatformFilter />
              <SortFilter />
            </HStack>
          </Box>

          <GameGrid/>
        </GridItem>
      </Grid>
    </div>
  );
}

export default App;

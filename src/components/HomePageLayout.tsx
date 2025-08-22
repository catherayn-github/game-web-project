import { Grid, GridItem, Show, Box, HStack } from "@chakra-ui/react";
import React from "react";
import ListOfGenres from "./Aside/ListOfGenres/ListOfGenres";
import GameGrid from "./Main/GameGrid/GameGrid";
import GameHeader from "./Main/GameHeader/GameHeader";
import PlatformFilter from "./Main/PlatformFilter/PlatformFilter";
import SortFilter from "./Main/SortFilter/SortFilter";
import NavigationBar from "./NavigationBar/NavigationBar";

const HomePageLayout = () => {
  return (
    <div>
      <Grid
        templateAreas={{
          base: `"main"`,
          lg: `"aside main"`, // this is for large devices that is 1024px and above
        }}
        templateColumns={{
          base: "1fr",
          lg: "200px 1fr",
        }}
      >
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

          <GameGrid />
        </GridItem>
      </Grid>
    </div>
  );
};

export default HomePageLayout;

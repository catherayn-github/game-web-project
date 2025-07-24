import { Button, SimpleGrid, Text, Box } from "@chakra-ui/react";
import useGames from "../../../hooks/useGames";
import GameCard from "../GameCard/GameCard";
import GameCardSkeleton from "../GameCard/GameCardSkeleton";
import GameCardContainer from "../GameCard/GameCardContainer";
import { GameQuery } from "../../../App";
import React from "react";

interface Props {
  gameQuery: GameQuery;
}

function GameGrid({ gameQuery }: Props) {
 
  const { data, error, isLoading, isFetchingNextPage, fetchNextPage, hasNextPage } = useGames(gameQuery);
  const skeletonCards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  {console.log(isFetchingNextPage)}

  if (error) return <Text>{error.message}</Text>;

  return (
    <Box padding="20px">
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        spacing={6}
      >
        {isLoading &&
          skeletonCards.map((skeleton) => (
            <GameCardContainer key={skeleton}>
              <GameCardSkeleton />
            </GameCardContainer>
          ))}

        {data?.pages.map((page, index) => (
          <React.Fragment key={index}>
            {page.results.map((game) => (
              <GameCardContainer key={game.id}>
                <GameCard game={game} />
              </GameCardContainer>
            ))}
          </React.Fragment>
        ))}
        {/* {data?.map((game) => (
          <GameCardContainer key={game.id}>
            <GameCard game={game} />
          </GameCardContainer>
          
        ))} */}

        
      </SimpleGrid>
      {hasNextPage && <Button marginY={5} disabled = {isFetchingNextPage} onClick={()=> fetchNextPage()}>  Load More </Button>}
    </Box>
  );
}

export default GameGrid;

import { SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { GameQuery } from "../../../App";
import useGames from "../../../hooks/useGames";
import GameCard from "../GameCard/GameCard";
import GameCardContainer from "../GameCard/GameCardContainer";
import GameCardSkeleton from "../GameCard/GameCardSkeleton";

interface Props {
  gameQuery: GameQuery;
}

function GameGrid({ gameQuery }: Props) {
  const {
    data,
    error,
    isLoading,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useGames(gameQuery);
  const skeletonCards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  {
    console.log(isFetchingNextPage);
  }

  if (error) return <Text>{error.message}</Text>;
  // reduce syntax - function (accumlator, object) per iteration count the number of result, 0 for the initial value
  const fetchedGamesCount =
    data?.pages.reduce((total, page) => total + page.results.length, 0) || 0;

  return (
    <InfiniteScroll
      // datalength represents the number of data that is fetched
      dataLength={fetchedGamesCount}
      next={() => fetchNextPage()}
      hasMore={!!hasNextPage}
      loader={<Spinner marginY={5} />}
    >
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        spacing={6}
        padding="20px"
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
      {/* {hasNextPage && (
          <Button
            marginY={5}
            disabled={isFetchingNextPage}
            onClick={() => fetchNextPage()}
          >
            {" "}
            Load More{" "}
          </Button>
        )} */}
    </InfiniteScroll>
  );
}

export default GameGrid;

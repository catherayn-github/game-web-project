
import {SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../../../hooks/useGames";
import GameCard from "../GameCard/GameCard";
import GameCardSkeleton from "../GameCard/GameCardSkeleton";
import GameCardContainer from "../GameCard/GameCardContainer";
import { Genre } from "../../../hooks/useGenres";
import { Platform } from "../../../hooks/usePlatform";
import { GameQuery } from "../../../App";
interface Props {
  gameQuery: GameQuery;
}
function GameGrid({ gameQuery}: Props) {
  const { data, error, isLoading } = useGames(gameQuery);
  const skeletonCards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  if (error) return <Text>{error.message}</Text>;

  {console.log(data)}

  return (
    <div>
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        padding="20px"
        spacing={6}
      >
        {isLoading &&
          skeletonCards.map((skeleton) => (
            <GameCardContainer key={skeleton}>
              <GameCardSkeleton />
            </GameCardContainer>
          ))}
        {data?.results.map((game) => (
          <GameCardContainer key={game.id}>
            <GameCard game={game} />
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </div>
  );
}

export default GameGrid;

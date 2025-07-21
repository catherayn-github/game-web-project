
import {SimpleGrid } from "@chakra-ui/react";
import useGames from "../../../hooks/useGames";
import GameCard from "../GameCard/GameCard";
import GameCardSkeleton from "../GameCard/GameCardSkeleton";
import GameCardContainer from "../GameCard/GameCardContainer";
import { Genre } from "../../../services/genre-service";
import { Platform } from "../../../services/platform-service";
import { GameQuery } from "../../../App";
interface Props {
  gameQuery: GameQuery;
}
function GameGrid({ gameQuery}: Props) {
  const { data, isLoading } = useGames(gameQuery);
  const skeletonCards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <div>
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        padding="20px"
        spacing={3}
      >
        {isLoading &&
          skeletonCards.map((skeleton) => (
            <GameCardContainer key={skeleton}>
              <GameCardSkeleton />
            </GameCardContainer>
          ))}
        {data.map((game) => (
          <GameCardContainer key={game.id}>
            <GameCard game={game} />
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </div>
  );
}

export default GameGrid;

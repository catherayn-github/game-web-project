
import {SimpleGrid } from "@chakra-ui/react";
import useGames from "../../../hooks/useGames";
import GameCard from "../GameCard/GameCard";
import GameCardSkeleton from "../GameCard/GameCardSkeleton";
import GameCardContainer from "../GameCard/GameCardContainer";

function GameGrid() {
  const { games, isLoading } = useGames();
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
            <GameCardContainer>
              <GameCardSkeleton key={skeleton} />
            </GameCardContainer>
          ))}
        {games.map((game) => (
          <GameCardContainer>
            <GameCard key={game.id} game={game} />
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </div>
  );
}

export default GameGrid;

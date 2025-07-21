import React, { useEffect, useState } from "react";
import apiClient from "../../services/api-clients";
import { Card, Text, Image, SimpleGrid } from "@chakra-ui/react";
import useGames from "../../hooks/useGames";
import GameCard from "../GameCard/GameCard";
import GameCardSkeleton from "../GameCard/GameCardSkeleton";



function GameGrid() {
  const { games, isLoading } = useGames();
  const skeletonCards = [1,2,3,4,5,6,7,8,9,10];

  return (
    <div>
      
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl:5}} padding= "20px" spacing={10}>
        {isLoading && skeletonCards.map((skeleton) => <GameCardSkeleton key={skeleton} />)}
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </SimpleGrid>
    </div>
  );
}

export default GameGrid;

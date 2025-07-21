import React, { useEffect, useState } from "react";
import apiClient from "../../services/api-clients";
import { Card, Text, Image, SimpleGrid } from "@chakra-ui/react";
import useGames from "../../hooks/useGames";
import GameCard from "../GameCard/GameCard";



function GameGrid() {
  const { games, setGames, error, setError } = useGames();

  return (
    <div>
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl:5}} padding= "20px" spacing={10}>
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </SimpleGrid>
    </div>
  );
}

export default GameGrid;

import React from "react";
import useGame from "../../../hooks/useGame";
import {
  Box,
  Grid,
  GridItem,
  Heading,
  SimpleGrid,
  Spinner,
  Text,
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import ExpandableDescription from "./ExpandableDescription";
import GameAttribute from "./GameAttribute";
import MetaCriticValue from "../GameCard/MetaCriticValue/MetaCriticValue";
import useTrailers from "../../../hooks/useTrailers";
import GameTrailer from "./GameTrailer";
import GameScreenshots from "./GameScreenshots";

const GameDetailPage = () => {
  const { slug } = useParams();

  const {
    data: game,
    error: errorGame,
    isLoading: isLoadingGame,
  } = useGame(slug!);

  const text = game?.description_raw;

  if (isLoadingGame) return <Spinner />;

  console.log("error:", errorGame);
  console.log("game:", game?.publishers);

  if (!game) throw new Error("game not found");

  return (
    <div>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5} p={7} >
        <Box>
          <Heading>{game.name}</Heading>
          <ExpandableDescription>{text ?? ""}</ExpandableDescription>
          <GameAttribute game={game} />
        </Box>
        <Box>
          <GameTrailer gameId={game.id} />
          <GameScreenshots gameId={game.id} />
        </Box>
      </SimpleGrid>
    </div>
  );
};

export default GameDetailPage;

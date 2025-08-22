import { Image, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import useScreenshot from "../../../hooks/useScreeshots";
import APIClient from "../../../services/api-clients";

interface Props {
  gameId: number;
}
const GameScreenshots = ({ gameId }: Props) => {
  const { data: screenshots, error, isLoading } = useScreenshot(gameId);

  if (!screenshots) return null;
  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
      {screenshots.results.map((screenshot) => (
        <Image key={screenshot.id} src={screenshot.image} marginRight={3} />
      ))}
    </SimpleGrid>
  );
};

export default GameScreenshots;

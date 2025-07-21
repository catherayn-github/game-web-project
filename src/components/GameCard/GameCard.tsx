import { Card, CardBody, Heading, HStack, Image, Text } from "@chakra-ui/react";
import { Game } from "../../services/game-service";
import PlatformIconDisplay from "../PlatformIconDisplay/PlatformIconDisplay";
import MetaCriticValue from "../MetaCriticValue/MetaCriticValue";

interface Props {
  game: Game;
}

function GameCard({ game }: Props) {
  return (
    <Card borderRadius={10} overflow={"hidden"}>
      <Image src={game.background_image} alt={game.name} />
      <CardBody>
        <Heading fontSize={"2xl"}>{game.name}</Heading>
        <HStack justifyContent="space-between" marginBottom={3}>
          <PlatformIconDisplay
            platforms={game.parent_platforms.map(
              (platform) => platform.platform
            )}
          />
          <MetaCriticValue metaCriticValue={game.metacritic} />
        </HStack>
      </CardBody>
      <Text></Text>
    </Card>
  );
}

export default GameCard;

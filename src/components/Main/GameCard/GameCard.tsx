import { Card, CardBody, Heading, HStack, Image, Text } from "@chakra-ui/react";
import { Game } from "../../../hooks/useGames";
import PlatformIconDisplay from "./PlatformIconDisplay/PlatformIconDisplay";
import MetaCriticValue from "./MetaCriticValue/MetaCriticValue";
import getCroppedImageUrl from "../../../services/image.url";

interface Props {
  game: Game;
}

function GameCard({ game }: Props) {
  return (
    <Card>
      <Image src={getCroppedImageUrl(game.background_image)} alt={game.name} />
      <CardBody>
        <HStack justifyContent="space-between" marginBottom={3}>
          <PlatformIconDisplay
            platforms={game.parent_platforms.map(
              (platform) => platform.platform
            )}
          />
          <MetaCriticValue metaCriticValue={game.metacritic} />
        </HStack>
            <Heading fontSize={"2xl"}>{game.name}</Heading>
      </CardBody>
      <Text></Text>
    </Card>
  );
}

export default GameCard;

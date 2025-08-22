import { Card, CardBody, Heading, HStack, Image, Text } from "@chakra-ui/react";
import Game from "../../../entities/Game";
import PlatformIconDisplay from "./PlatformIconDisplay/PlatformIconDisplay";
import MetaCriticValue from "./MetaCriticValue/MetaCriticValue";
import getCroppedImageUrl from "../../../services/image.url";
import { Link } from "react-router-dom";

interface Props {
  game: Game;
}

function GameCard({ game }: Props) {
  return (
    <Card>
      <Link to="/game-deatil-page"></Link>
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
        <Heading fontSize={"2xl"}>
          <Link to={`/game-detail/${game.slug}`}>{game.name} </Link>
        </Heading>
      </CardBody>
      <Text></Text>
    </Card>
  );
}

export default GameCard;

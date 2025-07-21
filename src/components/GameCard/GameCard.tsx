import { Card, CardBody, Heading, Image, Text } from "@chakra-ui/react";
import { Game } from "../../services/game-service";
import PlatformIconDisplay from "../PlatformIconDisplay/PlatformIconDisplay";

interface Props {
  game: Game;
}

function GameCard({ game }: Props) {
  return (
    <Card borderRadius={10} overflow={"hidden"}>
      <Image src={game.background_image} alt={game.name} />
      <CardBody>
        <Heading fontSize={"2xl"}>{game.name}</Heading>
        <PlatformIconDisplay platforms={game.parent_platforms.map(platform => platform.platform)} />
      </CardBody>
      <Text></Text>
    </Card>
  );
}

export default GameCard;

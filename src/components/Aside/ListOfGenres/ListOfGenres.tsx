import { HStack, List, ListItem, Text, Image } from "@chakra-ui/react";
import useData from "../../../hooks/UseData";
import { Genre } from "../../../services/genre-service";
import useGenres from "../../../hooks/useGenres";
import getCroppedImageUrl from "../../../services/image.url";

function ListOfGenres() {
  const { data } = useGenres();
  return (
    <List>
      {data.map((genre) => (
        <ListItem key={genre.id} paddingY="5px">
          <HStack>
            <Image boxSize = "32px" borderRadius={8} src={getCroppedImageUrl(genre.image_background)} />
            <Text fontSize="lg">{genre.name}</Text>
          </HStack></ListItem>
      ))}
    </List>
  );
}

export default ListOfGenres;

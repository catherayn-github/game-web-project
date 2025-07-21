import { HStack, List, ListItem, Text, Image, Spinner, Button } from "@chakra-ui/react";
import useData from "../../../hooks/UseData";
import { Genre } from "../../../services/genre-service";
import useGenres from "../../../hooks/useGenres";
import getCroppedImageUrl from "../../../services/image.url";

interface Props {
  onSelectGenre : (genre : Genre) => void
  selectedGenre : Genre | null
}
function ListOfGenres({onSelectGenre, selectedGenre} : Props) {
  const { data, isLoading } = useGenres();

  if (isLoading) return <Spinner />;

  return (
    <List>
      {data.map((genre) => (
        <ListItem key={genre.id} paddingY="5px">
          <HStack>
            <Image boxSize = "32px" borderRadius={8} src={getCroppedImageUrl(genre.image_background)} />
            <Button fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal"} variant="link" fontSize="lg" onClick={() => {onSelectGenre(genre)}}>{genre.name}</Button>
          </HStack></ListItem>
      ))}
    </List>
  );
}

export default ListOfGenres;

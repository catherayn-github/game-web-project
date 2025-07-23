import {
  HStack,
  List,
  ListItem,
  Image,
  Spinner,
  Button,
  Heading,
} from "@chakra-ui/react";
import { Genre } from "../../../services/genre-service";
import useGenres from "../../../hooks/useGenres";
import getCroppedImageUrl from "../../../services/image.url";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}
function ListOfGenres({ onSelectGenre, selectedGenre }: Props) {
  const { data, isLoading } = useGenres();

  if (isLoading) return <Spinner />;

  return (
    <>
    <Heading marginBottom={3} fontSize="2xl">Genres</Heading>
      <List>
        {data?.results.map((genre) => (
          <ListItem key={genre.id} paddingY="5px">
            <HStack>
              {/* add objectFit="cover" to make the image cover the container, preserve its aspect ratio*/}
              <Image
                objectFit="cover"
                boxSize="32px"
                borderRadius={8}
                src={getCroppedImageUrl(genre.image_background)}
              />
              {/* whiteSpace="normal" allows the text to wrap */}
              <Button
                whiteSpace="normal"
                textAlign="left"
                fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal"}
                variant="link"
                fontSize="lg"
                onClick={() => {
                  onSelectGenre(genre);
                }}
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
}

export default ListOfGenres;

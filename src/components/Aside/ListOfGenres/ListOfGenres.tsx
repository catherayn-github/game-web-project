import {
  HStack,
  List,
  ListItem,
  Image,
  Spinner,
  Button,
  Heading,
} from "@chakra-ui/react";
import useGenres from "../../../hooks/useGenres";
import  Genre  from "../../../entities/Genre";
import getCroppedImageUrl from "../../../services/image.url";
import useGameQueryStore from "../../../store/storeGameQuery";

// interface Props {
//   onSelectGenre: (genre: Genre) => void;
//   selectedGenreId?: number;
// }
function ListOfGenres() {
  const { data, isLoading } = useGenres();
  const selectedGenreId = useGameQueryStore(selector => selector.gameQuery.genreId);
  const setSelectedGenreId = useGameQueryStore(s => s.setSelectedGenreId)

  if (isLoading) return <Spinner />;

  return (
    <>
      <Heading marginBottom={3} fontSize="2xl">
        Genres
      </Heading>
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
                fontWeight={genre.id === selectedGenreId ? "bold" : "normal"}
                variant="link"
                fontSize="lg"
                onClick={() => {
                  setSelectedGenreId(genre.id);
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

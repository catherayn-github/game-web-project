import { Text } from "@chakra-ui/react";
import useGenres from "../../../hooks/useGenres";

function ListOfGenres() {
  const {genres, error, isLoading} = useGenres();
  return (
    <div>
        {genres.map(genre => <Text key={genre.id}>{genre.name}</Text>)}
    </div>
  )
}

export default ListOfGenres
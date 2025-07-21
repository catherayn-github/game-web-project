import { Text } from "@chakra-ui/react";
import useData from "../../../hooks/UseData";
import { Genre } from "../../../services/genre-service";
import useGenres from "../../../hooks/useGenres";


function ListOfGenres() {
  const {data} = useGenres();
  return (
    <div>
        {data.map(genre => <Text key={genre.id}>{genre.name}</Text>)}
    </div>
  )
}

export default ListOfGenres
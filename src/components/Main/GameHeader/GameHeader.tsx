import { Heading } from '@chakra-ui/react'
import { GameQuery } from '../../../App'
import useGenres from '../../../hooks/useGenres';
import usePlatform from '../../../hooks/usePlatform';

interface Props{
    gameQuery : GameQuery
}
function GameHeader({gameQuery}: Props) {

  const {data : genres} = useGenres();
  const selectedGenre = genres?.results.find(genre => genre.id === gameQuery.genreId)?.name

  const { data :platforms } = usePlatform();
  const selectedPlatform = platforms.results.find(platform => platform.id === gameQuery.platformId)?.name


  const heading = `${selectedPlatform || ""} ${selectedGenre || ""} Games`;

  return (
    <Heading as="h1" marginY={5} fontSize="5xl"> {heading} </Heading>
  )
}

export default GameHeader
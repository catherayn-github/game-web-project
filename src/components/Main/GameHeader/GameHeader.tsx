import { Heading } from '@chakra-ui/react'
import { GameQuery } from '../../../App'
import useGenres from '../../../hooks/useGenres';
import usePlatform from '../../../hooks/usePlatform';
import useGenre from '../../../hooks/useGenre';

interface Props{
    gameQuery : GameQuery
}
function GameHeader({gameQuery}: Props) {

  const selectedGenre = useGenre(gameQuery.genreId);
  const selectedPlatform = usePlatform(gameQuery.platformId);


  const heading = `${selectedPlatform || ""} ${selectedGenre || ""} Games`;

  return (
    <Heading as="h1" marginY={5} fontSize="5xl"> {heading} </Heading>
  )
}

export default GameHeader
import { Heading } from '@chakra-ui/react';
import useGameQueryStore from '../../../store/storeGameQuery';
import useGenre from '../../../hooks/useGenre';
import usePlatform from '../../../hooks/usePlatform';

function GameHeader() {
  const selectedGenreId = useGameQueryStore(s => s.gameQuery.genreId);
  const selectedGenre = useGenre(selectedGenreId);

  const selectedPlatformId = useGameQueryStore(s => s.gameQuery.platformId);
  const selectedPlatform = usePlatform(selectedPlatformId);



  const heading = `${selectedPlatform || ""} ${selectedGenre || ""} Games`;

  return (
    <Heading as="h1" marginY={5} fontSize="5xl"> {heading} </Heading>
  )
}

export default GameHeader
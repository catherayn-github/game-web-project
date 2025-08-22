import { Box, Heading, SimpleGrid, Text } from '@chakra-ui/react'
import React, { ReactNode } from 'react'
import  Game  from '../../../entities/Game'
import MetaCriticValue from '../GameCard/MetaCriticValue/MetaCriticValue'
import GameAttributeDefinition from './GameAttributeDefinition'

interface Props {
    game : Game
}
const GameAttribute = ({game} : Props) => {
  return (
    <SimpleGrid  as='dl' columns={2} gap="40px" marginY={8}>
        <GameAttributeDefinition attributeLabel="Platforms">
          {game.parent_platforms.map(({ platform }) => (
            <Text key={platform.id}> {platform.name}</Text>
          ))}
        </GameAttributeDefinition>

        <GameAttributeDefinition attributeLabel="Metascore">
          <MetaCriticValue metaCriticValue={game.metacritic} />
        </GameAttributeDefinition>

        <GameAttributeDefinition attributeLabel="Genres">
          {game.genres.map((genre) => (
            <Text key={genre.id}> {genre.name}</Text>
          ))}
        </GameAttributeDefinition>

        <GameAttributeDefinition attributeLabel="Publishers">
          {game.publishers.map((publisher) => (
            <Text key={publisher.id}> {publisher.name}</Text>
          ))}
        </GameAttributeDefinition>
      </SimpleGrid>
  )
}

export default GameAttribute
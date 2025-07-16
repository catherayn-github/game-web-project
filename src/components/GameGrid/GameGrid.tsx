import React, { useEffect, useState } from 'react'
import apiClient from '../../services/api-clients';
import { Text } from '@chakra-ui/react';
import useGames from '../../hooks/useGames';


// interface Game {
//     id : number
//     name : string
// }


function GameGrid( ) {

    const {games, setGames, error, setError} = useGames();

  return (
    <div>
        {/* {error && <Text> {error}</Text>} */}
        <ul> 
            {games.map( game =>
             <li key = {game.id}>{game.name}</li>)
            }
        </ul>

    </div>
  )
}

export default GameGrid
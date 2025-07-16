import React, { useEffect, useState } from 'react'
import apiClient from '../../services/api-clients';
import { Text } from '@chakra-ui/react';

interface Platform {
    name : string
}
interface Game {
    id : number
    name : string
    // background_image : string
    // platforms : Platform []
}
interface GamesResponse{
    count : number
    results : Game[]
}

function GameGrid( ) {
  const [games, setGames] = useState <Game[]>([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);


  useEffect(() => {
      apiClient.get<GamesResponse>("/games")
      .then(response => setGames(response.data.results))
      .catch(error => setError(error.message));
  })

  return (
    <div>
        {error && <Text> {error}</Text>}
        <ul> 
            {games.map( game =>
             <li key = {game.id}>{game.name}</li>)
            }
        </ul>

    </div>
  )
}

export default GameGrid
import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import React from 'react'
import { BsSearch } from 'react-icons/bs'

function SearchBar() {
  return (
    <InputGroup>
      <InputLeftElement children = {<BsSearch/>}/>
      <Input placeholder='Search games...' borderRadius={20} variant="filled"/>
    </InputGroup>
  
  )
}

export default SearchBar
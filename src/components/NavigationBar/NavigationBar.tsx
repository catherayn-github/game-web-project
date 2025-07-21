import { HStack, Image } from '@chakra-ui/react'
import React from 'react'
import logo from '../../assets/Logo/logo.webp'
import ColorModeToggleButton from './ColorModeToggleButton.tsx'
import SearchBar from './SearchBar'

function NavigationBar() {
  return (
    <div>
        <HStack padding="10px">
            <Image src={logo} alt="logo" boxSize={"60px"}/>
            <SearchBar/>
            <ColorModeToggleButton/>
        </HStack>
    </div>
  )
}

export default NavigationBar
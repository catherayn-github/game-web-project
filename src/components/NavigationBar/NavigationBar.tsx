import { HStack, Image } from '@chakra-ui/react'
import React from 'react'
import logo from '../../assets/Logo/logo.webp'
import ColorModeToggleButton from './ColorModeToggleButton.tsx'
import SearchBar from './SearchBar'

interface Props {
  onSearch: (searchText: string) => void

}

function NavigationBar({onSearch}: Props) {
  return (
    <div>
        <HStack padding="10px">
            <Image src={logo} alt="logo" boxSize={"60px"}/>
            <SearchBar onSearch={onSearch}/>
            <ColorModeToggleButton/>
        </HStack>
    </div>
  )
}

export default NavigationBar
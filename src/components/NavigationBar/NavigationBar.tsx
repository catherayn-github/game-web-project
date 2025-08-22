import { HStack, Image } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/Logo/logo.webp'
import ColorModeToggleButton from './ColorModeToggleButton.tsx'
import SearchBar from './SearchBar'

// interface Props {
//   onSearch: (searchText: string) => void

// }

function NavigationBar() {
  return (
    <div>
        <HStack padding="10px">
            <Link to='/'><Image src={logo} alt="logo" boxSize={"60px"} objectFit='cover'/></Link>
            <SearchBar/>
            <ColorModeToggleButton/>
        </HStack>
    </div>
  )
}

export default NavigationBar
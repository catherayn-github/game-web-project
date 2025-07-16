import { HStack, Image } from '@chakra-ui/react'
import React from 'react'
import logo from '../../assets/Logo/logo.webp'
import ColorModeToggleButton from './ColorModeToggleButton.tsx'

function NavigationBar() {
  return (
    <div>
        <HStack justifyContent="space-between" padding="10px">
            <Image src={logo} alt="logo" boxSize={"60px"}/>

            <ColorModeToggleButton/>
        </HStack>
    </div>
  )
}

export default NavigationBar
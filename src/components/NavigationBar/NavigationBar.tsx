import { HStack, Image } from '@chakra-ui/react'
import React from 'react'
import logo from '../../assets/Logo/logo.webp'

function NavigationBar() {
  return (
    <div>
        <HStack>
            <Image src={logo} alt="logo" boxSize={"60px"}/>
        </HStack>
    </div>
  )
}

export default NavigationBar
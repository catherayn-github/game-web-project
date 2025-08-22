import { Box, Heading, Text } from '@chakra-ui/react'
import React, { ReactNode } from 'react'

interface Props {
    attributeLabel : string
    children : ReactNode
}
const GameAttribute = ({attributeLabel, children} : Props) => {
  return (
    <Box>
        <Heading as = 'dt' fontSize='md'  color={'#71717a'}> {attributeLabel }</Heading>
        {children}
        
    </Box>
  )
}

export default GameAttribute
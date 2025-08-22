import React from 'react'
import NavigationBar from './NavigationBar/NavigationBar'
import { Outlet } from 'react-router-dom'
import { Box } from '@chakra-ui/react'

const MainLayout = () => {
  return (
    <>
    <NavigationBar/>
    <Box >
        <Outlet/>
    </Box>
    </>
    
  )
}

export default MainLayout
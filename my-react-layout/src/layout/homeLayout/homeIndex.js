import { Box } from '@mui/material'
import React from 'react'
import Header from './header'
import Footer from './footer'
const homeIndex = ({children}) => {
  return (
    <Box>
        <Header/>
        <Box>{children}</Box>
        <Footer/>
    </Box>
  )
}

export default homeIndex
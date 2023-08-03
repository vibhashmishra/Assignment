// import React from 'react'
// import MarketUpdate from "../Home/MarketUpdate";
// import { makeStyles } from '@material-ui/core';
// import { Box } from 'react-feather';
 
// const useStyles = makeStyles ((theme)=>({
//   marketUpdateSection:{
//      padding:"100px"
//   }
// }))

// const MarketSection = () => {
//   const classes = useStyles();
//   return (
//     <Box className="marketUpdateSection">
//     <MarketUpdate/>
//   </Box>
//   )
// }

// export default MarketSection;


 import React from 'react'
 import {Box, makeStyles } from '@material-ui/core';
import MarketUpdate from '../../Home/MarketUpdate';
 

const MarketSection = () => {
  return (
    <Box>
      <Box>
       <MarketUpdate/>
      </Box>
    </Box>
  )
}

export default MarketSection;
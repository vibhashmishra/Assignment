import { Box, Container, Grid, Typography,makeStyles } from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles((theme) => ({
  downloadAppMainbox:{
    padding: "100px 0px 50px",
  },
  appStoreBox:{
   paddingTop:"210px",

   " & h6":{
     margin:"20px 0",
   }
  }
}));


export default function DownloadMobileApp ()  {
  const classes = useStyles();

  return (
 <Box className={classes.downloadAppMainbox}>
  <Container>
  <Grid container>
    <Grid items md={6}>
      <Box>
        <img src="images/mobile.png"/>
      </Box>
    </Grid>
    <Grid items md={6}>
        <Box className={classes.appStoreBox}>
            <Typography variant="h1">Download <Typography variant="h1">mobile App</Typography></Typography>
            <Box><Typography variant="h6">Lorem ipsum dolor sit amet consectetur. Vehicula elementum ultrices dictum sit ornare diam. Dictum mattis iaculis in amet orci. Senectus sed scelerisque.</Typography></Box>
         <Box><img src="images/appStore.png"/>
         <img src="/images/googlePlay.png"/>
         </Box>
        </Box>
    </Grid>
    </Grid>
  </Container>
 </Box>
  )
}

 
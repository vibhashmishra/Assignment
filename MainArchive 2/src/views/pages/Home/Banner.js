import React from "react";
import {
  Grid,
  Box,
  Container,
  Typography,
  makeStyles,
  Button,
} from "@material-ui/core";
const useStyles = makeStyles(() => ({
  bannerBox: { 
    padding: "150px 0px 50px",
   
  },
  gridflex: {
    marginTop:"50px",
    "& button":{
      marginTop:"20px"
    },
 
    "& h1":{
      fontSize:"40px",
      margin:"10px 0px",
    },
    "& p":{
    marginTop:"20px"
    }
  },
 
  supportCardBox:{
    
    marginTop:"20px",
    "& .supportCard":{
      width:"140px",
      background: "linear-gradient(white, white) padding-box, linear-gradient(to right, red, white) border-box",
      border: "1px solid transparent",
      borderRadius: "15px 0px",
      textAlign: "center",
      padding: "30px 0",
      "& h4":{
      color:"red",
      }
    }
  }
  
  
}));

export default function Banner() {
  const classes = useStyles();

  return (
    <Box className={classes.bannerBox}>
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={12} md={5}  >
            <Box className={classes.gridflex}>
            <Typography variant="h1">
         Buy, Sell or Exchange your  Cryptocurrency with most secure  
         </Typography>
         <Typography variant="body2">Lorem ipsum dolor sit amet consectetur. Vehicula elementum ultrices dictum sit ornare diam. Dictum mattis iaculis in amet orci. Senectus sed scelerisque.</Typography>
         <Button variant="contained" color="secondary" >Get Start</Button>
         <Box className={`${classes.supportCardBox} displaySpacebetween`}>
            <Box className="supportCard">
              <Typography variant="h4">25K</Typography>
              <Typography variant="body2">Happy Customer</Typography>
            </Box>
            <Box className="supportCard">
            <Typography variant="h4">25K</Typography>
              <Typography variant="body2">Happy Customer</Typography>
            </Box>
            <Box className="supportCard">
            <Typography variant="h4">25K</Typography>
              <Typography variant="body2">Happy Customer</Typography>
            </Box>
          </Box>
            </Box>
        
          </Grid>
        
       
          <Grid   item xs={12} sm={12} md={7}  >
         <img src="images/handImg.png" alt="handImg" width={620}/>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}



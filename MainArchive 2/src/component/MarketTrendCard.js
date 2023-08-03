import { Box, Button, Container, Typography } from "@material-ui/core";
import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  marketTrendMainBox: {
    padding: "20px",
  },
  bitcoinBox: {
    "& h6": {
      margin: " 0 10px",
    },
  },
  upperBox: {
    display: "flex",

    "& .bitcoinBtn": {
      borderRadius: "4px",
      background: "rgba(198, 198, 198, 0.40)",
    },
  },

  downBox: {
    marginTop: "15px",

    "& .rate":{
       color:"#4ED46C"
    },
    "& .rateRedColor":{
      color:"#EC1F24"
   },
  },
  bitcoinSideBox: {
    "& .greenBtn": {
      backgroundColor: "#4ED46C",
      width: "40px",
      height: "40px",
      borderRadius: "50%",
    },
    "& .redBtn": {
      backgroundColor: "#EC1F24",
      width: "40px",
      height: "40px",
      borderRadius: "50%",
    },
  },
}));

export default function MarketTrendCard({ data, i }) {
 
  const classes = useStyles();

  return (
    <Box className={classes.marketTrendMainBox}>
      <Box className="displaySpacebetween">
        <Box className={`${classes.bitcoinBox} displaySpacebetween`}>
          <Box>
            <img src={data.cryptoImg} />
          </Box>
          <Typography variant="h6">{data.sName}</Typography>
          <Button className="bitcoinBtn">{data.fName}</Button>
        </Box>
        <Box className={classes.bitcoinSideBox}>
          <Box className={data?.key === "red"?"redBtn displayCenter":"greenBtn displayCenter"}>
                <img src={data.upArrow} />
              </Box>
        </Box>
      </Box>
      <Box className={`${classes.downBox} displaySpacebetween`}>
        <Box>
          <Typography>{data.rateValue}</Typography>

          <Typography className={data?.ratePrice === "priceColor"? "rate":"rateRedColor"}>{data.rate}</Typography>
        </Box>
        <Box>
          <img src={data.graph} />
        </Box>
      </Box>
    </Box>
  );
}

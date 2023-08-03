import React from "react";
import {
  Grid,
  Box,
  Container,
  Typography,
  makeStyles,
  Button,
} from "@material-ui/core";

import { Link } from "react-router-dom";
import MarketTrendCard from "src/component/MarketTrendCard";

const useStyles = makeStyles(() => ({
  marketTrendBox: {
    padding: "100px 0px 50px",
  },
}));

export default function MarketTrend() {
  const classes = useStyles();
  const marketData = [
    {
      cryptoImg: "/images/bitcoin.png",
      sName: "BTC",
      fName: "BITCOIN",
      upArrow: "/images/upArrow.png",
      rateValue: "$56,623.54",
      rate: "+1.41%",
      ratePrice:"priceColor",
      graph: "/images/greenGraph.png",
      
    },
    {
      cryptoImg: "/images/ethereum.png",
      sName: "ETH",
      fName: "ETHEREUM",
      upArrow: "/images/upArrow.png",
      rateValue: "$4,267.90",
      rate: "+2.22%",
      ratePrice:"priceColor",
      graph: "/images/greenGraph.png",
  
    },
    {
      cryptoImg: "/images/binance.png",
      sName: "BNB",
      fName: "BINANCE",
      upArrow: "/images/downArrow.png",
      rateValue: "$587.74",
      rate: "-0.82%",
      ratePrice:"priceRedColor",
      graph: "/images/redGraph.png",
      key:"red"
    },
    {
      cryptoImg: "/images/usdt.png",
      sName: "USDT",
      fName: "TETHER",
      rateValue: "$0.9998",
      rate: "+0,03%",
      ratePrice:"priceColor",
      graph: "/images/blueGraph.png",
      upArrow: "/images/upArrow.png",
      
    },
  ];
  return (
    <Box className={classes.marketTrendBox}>
      <Container>
        <Typography variant="h2">Market Trend</Typography>
        <Grid container spacing={3}>
          {marketData &&
            marketData?.map((data, i) => {
              return (
                <>
                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <MarketTrendCard data={data} i={i} />
                  </Grid>
                </>
              );
            })}
         
        </Grid>
      </Container>
    </Box>
  );
}

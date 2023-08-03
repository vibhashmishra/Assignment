import { Box, Grid} from "@material-ui/core";
import React from "react";
import PaymentSection from "./dashboardComponent/PaymentSection";
import MarketSection from "./dashboardComponent/MarketSection";
import Analystic from "./dashboardComponent/Analystic";


const Dashboard = () => {

  return (
    <Box>
      <Grid container>
        <Grid item xs={8}>
          <Box><Analystic/></Box>
         <Box><MarketSection/></Box>
        </Grid>
        <Grid item xs={4}>
          <Box><PaymentSection/></Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;

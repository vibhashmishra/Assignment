import React from "react";
import { Box } from "@material-ui/core";
import Page from "src/component/Page";
import Banner from "./Banner";
import MarketTrend from "./MarketTrend";
import CompanyPolicy from "./CompanyPolicy";
import MarketUpdate from "./MarketUpdate";
import DownloadMobileApp from "./DownloadMobileApp";
// import About from "./About";
function Home(props) {
  return (
    <Page title="PAY2P">
      <Box>
        <Banner/>
        <MarketTrend/>
        <MarketUpdate/>
        <CompanyPolicy/>
        <DownloadMobileApp/>
        {/* <About/> */}
      </Box>
    </Page>
  );
}

export default Home;

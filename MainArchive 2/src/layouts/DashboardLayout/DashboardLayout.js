import React, { useState, useContext, useEffect } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core";
import NavBar from "./NavBar";
import TopBar from "./TopBar";
// import SettingsContext from "
import { useLocation } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    height: "100%",
    overflow: "hidden",
    width: "100%",
  },
  root: {
    backgroundColor: "#eef4f8",
    // overflow: "hidden",
    position: "relative",
    // height: "100vh",
  },
  root1: {
    position: "relative",
    backgroundColor: "#eef4f8",
    // height: "100vh",
  },
  wrapper1: {
    backgroundColor: "#eef4f8",
    display: "flex",
    flex: "1 1 auto",
    overflow: "hidden",
    position: "relative",
    paddingTop: 70,
    minHeight: "calc(100vh - 75px)",
    [theme.breakpoints.up("lg")]: {
      paddingLeft: 256,
    },
    "@media (max-width:767px)": {
      paddingTop: "70px !important",
    },
  },
  wrapper: {
    display: "flex",
    flex: "1 1 auto",
    overflow: "hidden",
    position: "relative",
    backgroundColor: "#eef4f8",
    paddingTop: 70,
    minHeight: "calc(100vh - 70px)",
    [theme.breakpoints.up("lg")]: {
      paddingLeft: 256,
    },
    "@media (max-width:767px)": {
      paddingTop: "70px !important",
    },
  },
  contentContainer: {
    display: "flex",
    flex: "1 1 auto",
    overflow: "hidden",
  },
  content: {
    height: "100vh",
    width: "81vw",
    overflow: "hidden",
    position: "relative",
    alignItems: "center",
    justifyContent: "center",
    top: "89px",
    left: "270px",
    [theme.breakpoints.down("md")]: {
      padding: "30px 28px 30px",
    }   ,
  },
}));

const DashboardLayout = ({ children }) => {
  const classes = useStyles();
  const location = useLocation();
  const [isMobileNavOpen, setMobileNavOpen] = useState(false);
  // const themeSeeting = useContext(SettingsContext);

  const [selectedTab, setSelectedTab] = useState("Arbitrage");

  useEffect(() => {
    if (location) {
      if (
        location.pathname === "/sniper-dashboard" ||
        location.pathname === "/bot-setting" ||
        location.pathname === "/sniper-transactions"
      ) {
        setSelectedTab("Sniper");
      }
    }
  }, [location]);

  return (
    <div
      // className={
      //   themeSeeting.settings.theme === "DARK"
      //     ? `${classes.root1}`
      //     : `${classes.root}`
      // }
    >
      <TopBar
        onMobileNavOpen={() => setMobileNavOpen(true)}
        selectedTab={selectedTab}
        onTabChange={setSelectedTab}
      />
      <NavBar
        tabView={selectedTab}
        onMobileClose={() => setMobileNavOpen(false)}
        openMobile={isMobileNavOpen}
        setSelectedTab={(item) => setSelectedTab(item)}
      />
      <div
        // className={
        //   themeSeeting.settings.theme === "DARK"
        //     ? `${classes.wrapper1}`
        //     : `${classes.wrapper}`
        // }
      >
        <div className={classes.contentContainer}>
          <div className={classes.content} id="main-scroll">
          {children}
          </div>
        </div>
      </div>
    </div>
  );
};

DashboardLayout.propTypes = {
  children: PropTypes.node,
};

export default DashboardLayout;

import React, { useEffect, useState } from "react";
import { useLocation, matchPath, useHistory } from "react-router-dom";
import PerfectScrollbar from "react-perfect-scrollbar";
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';

import {MdAccountTree} from "react-icons/md";
import {GrTransaction} from "react-icons/gr";

import {
  FaMoneyBillWave,
  FaMoneyCheck,
  FaSquarespace,
  FaUsers,
  FaWallet,
} from "react-icons/fa";
import {
  AiFillHome,
  AiFillDashboard,
  AiOutlineLogout,
  AiFillWallet,
} from "react-icons/ai";
import PropTypes from "prop-types";
import {
  Box,
  Drawer,
  Hidden,
  List,
  Button,
  ListSubheader,
  makeStyles,
  Typography,
  Dialog,
  DialogActions,
  DialogContent,
  Slide,
  styled,
} from "@material-ui/core";

import NavItem from "./NavItem";
import { RiBankFill, RiDashboardFill } from "react-icons/ri";

import { HiUsers } from "react-icons/hi";

function renderNavItems({ items, pathname, depth = 0, state, setSelectedTab }) {
  return (
    <List disablePadding>
      {items.reduce(
        (acc, item) =>
          reduceChildRoutes({
            acc,
            item,
            pathname,
            depth,
            state,
            setSelectedTab,
          }),
        []
      )}
    </List>
  );
}

function reduceChildRoutes({
  acc,
  pathname,
  item,
  depth,
  state,
  setSelectedTab,
}) {
  const key = item.title + depth;

  if (item.items) {
    const open = matchPath(pathname, {
      path: item.href,
      exact: false,
    });

    acc.push(
      <NavItem
        depth={depth}
        icon={item.icon}
        info={item.info}
        key={key}
        open={Boolean(open)}
        title={item.title}
      >
        {renderNavItems({
          depth: depth + 1,
          pathname,
          items: item.items,
          state,
          setSelectedTab,
        })}
      </NavItem>
    );
  } else {
    acc.push(
      <NavItem
        depth={depth}
        href={item.href}
        icon={item.icon}
        info={item.info}
        tabview={item.tabview}
        key={key}
        title={item.title}
        setSelectedTab={(item) => setSelectedTab(item)}
      />
    );
  }
  return acc;
}
const useStyles = makeStyles((theme) => ({
  mobileDrawer: {
    width: 256,
    background: theme.palette.background.header,
  },
  desktopDrawer: {
    top: "76px",
    width: "250px",
    height: "calc(100% - 115px)",
    margin: "5px 10px 10px 15px",
    background: "#262626",
    boxShadow: "0px 0px 53px rgba(0, 0, 0, 0.25)",
    borderRadius: "10px",
    marginTop: "21px",
    marginLeft: "13px",
  },
  avatar: {
    cursor: "pointer",
    width: 64,
    height: 64,
  },
  socialIcon: {
    cursor: "pointer",
    marginRight: 5,
  },
  button: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "left",
    height: "45px",
    paddingLeft: "17px",
    borderRadius: "12px",
    marginTop: "-30px",
    "&:hover": {
      color: "#F5C843",
    },
    "& svg": {
      color: "#F5C843",
      fontSize: "20px",
    },
  },
  btnBox: {
    position: "relative",
    left: "30%",
    bottom: "-250px",
  },
  logoutButton: {
    display: "flex",
    justifyContent: "start",
    alignItems: "center",
    position: "absolute",
    bottom: "19px",
    left: "17px",
    background: "transparent",
    fontWeight: "400",
    fontSize: "13px",
  },
  sideMenuBox: {
    "& .MuiCollapse-wrapperInner": {
      marginLeft: "45px",
    },
  },
}));
const sections = [
  {
    items: [
      {
        title: "Dashboard",
        icon: RiDashboardFill,
        href: "/dashboard",
      },
      {
        title: "Pay2p",
        icon: HiUsers,
        href: "/pay2p",
      },
      {
        title: "Wallet",
        icon: AccountBalanceWalletIcon,
        href: "/wallet",
      },
      {
        title: "My Account",
        icon: MdAccountTree,
        href: "/myaccount",
      },
      {
        title: "Transaction History",
        
        icon: GrTransaction,
        href: "/transactionHistory",
      },
      // {
      //   title: "Wallet Management",
      //   icon: AiFillWallet,
      //   href: "/wallet-management",
      // },
      // {
      //   title: "Bank Management",
      //   icon: RiBankFill,
      //   href: "/bank-list",
      // },
      // {
      //   title: "Fee Management",
      //   icon: FaMoneyCheck,
      //   href: "/fee-management",
      // },
      // {
      //   title: "Fund Management",
      //   icon: FaMoneyBillWave,
      //   href: "/fund-management",
      // },
    ],
  },
];
const sections1 = [
  {
    items: [
      {
        title: "Dashboard",
        icon: AiFillHome,
        href: "/sniper-dashboard",
        tabview: "Sniper",
      },
      {
        title: "Bot settings",
        icon: AiFillDashboard,
        href: "/bot-setting",
        tabview: "Sniper",
      },
      {
        title: "Transaction History",
        icon: FaSquarespace,
        href: "/sniper-transactions",
        tabview: "Sniper",
      },
    ],
  },
];
const NavBar = ({ onMobileClose, openMobile, tabView, setSelectedTab }) => {
  const classes = useStyles();
  const location = useLocation();

  const history = useHistory();
  const [isLogout, setIsLogout] = useState(false);
  const renderedSections = tabView === "Arbitrage" ? sections : sections1;

  useEffect(() => {
    if (openMobile && onMobileClose) {
      onMobileClose();
    }
  }, [location.pathname]);
  const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });
  const content = (
    <Box height="100%" display="flex" flexDirection="column">
      <PerfectScrollbar options={{ suppressScrollX: true }}>
        <Box pt={2} pb={2}>
          <Box className="sideMenuBox">
            {renderedSections?.map((section, i) => (
              <List
                key={`menu${i}`}
                subheader={
                  <ListSubheader disableGutters disableSticky>
                    {section.subheader}
                  </ListSubheader>
                }
              >
                {renderNavItems({
                  img: section.img,
                  items: section.items,
                  pathname: location.pathname,
                  state: section.tabView,
                  setSelectedTab,
                })}
              </List>
            ))}
          </Box>
        </Box>

        <Button
          onClick={() => setIsLogout(true)}
          className={classes.logoutButton}
        >
          <AiOutlineLogout
            style={{
              marginRight: "16px",
              fontSize: "17px",
              color: "#EC1F24",
            }}
          />
          &nbsp; <span style={{ color: "#fff" }}>Logout</span>
        </Button>

        {isLogout && (
          <Dialog
            maxWidth="sm"
            fullWidth
            className={classes.dailogOpen}
            open={isLogout}
            TransitionComponent={Transition}
            keepMounted
            onClose={() => setIsLogout(false)}
          >
            <DialogContent>
              <Box className={classes.dialougTitle} align="center">
                <Typography variant="h6" color="primary">
                  Are you sure want to logout?
                </Typography>
              </Box>
            </DialogContent>
            <DialogActions
              style={{
                alignContent: "center",
                justifyContent: "center",
              }}
            >
              <Box mt={2}>
                <Button
                  className="modelbtn"
                  color="primary"
                  variant="contained"
                  style={{ padding: "8px 21px" }}
                  onClick={() => setIsLogout(false)}
                >
                  No
                </Button>
                &nbsp; &nbsp;
                <Button
                  className="modelbtnyes"
                  style={{
                    padding: "8px 21px",
                  }}
                  color="primary"
                  variant="contained"
                  onClick={() => history.push("/")}
                >
                  Yes
                </Button>
              </Box>
            </DialogActions>
          </Dialog>
        )}
      </PerfectScrollbar>
    </Box>
  );

  return (
    <>
      <Hidden lgUp>
        <Drawer
          anchor="left"
          classes={{ paper: classes.mobileDrawer }}
          onClose={onMobileClose}
          open={openMobile}
          variant="temporary"
        >
          <Box p={2}>{content}</Box>
        </Drawer>
      </Hidden>
      <Hidden mdDown>
        <Drawer
          anchor="left"
          classes={{ paper: classes.desktopDrawer }}
          open
          variant="persistent"
        >
          {content}
        </Drawer>
      </Hidden>
    </>
  );
};

NavBar.propTypes = {
  onMobileClose: PropTypes.func,
  openMobile: PropTypes.bool,
};

export default NavBar;

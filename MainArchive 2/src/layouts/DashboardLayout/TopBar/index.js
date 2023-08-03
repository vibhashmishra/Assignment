import React, { useContext, useState } from "react";
import clsx from "clsx";
import PropTypes from "prop-types";
import {
  makeStyles,
  IconButton,
  Typography,
  SvgIcon,
  Toolbar,
  AppBar,
  Hidden,
  Avatar,
  Grid,
  Box,
  Button,
} from "@material-ui/core";
import { Menu as MenuIcon } from "react-feather";
import { Link, useHistory } from "react-router-dom";
import { AuthContext } from "src/context/Auth";
import Logo from "src/component/Logo";
import { BiBell } from "react-icons/bi";
// import SettingsContext from "src/context/SettingsContext";
import { FiSun } from "react-icons/fi";
import { FaRegMoon } from "react-icons/fa";

const useStyles = makeStyles((theme) => ({
  toolbar: {
    padding: "7px 30px 7px 30px",

    background: "#fff",
    [theme.breakpoints.down("sm")]: {
      padding: "0px 20px 0px 20px",
    },
  },
  logo: {
    marginRight: theme.spacing(2),
  },
  link: {
    fontWeight: theme.typography.fontWeightMedium,
    "& + &": {
      marginLeft: theme.spacing(2),
    },
  },
  divider: {
    width: 1,
    height: 32,
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
  },
  mainheader: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",

    "& svg": {
      color: theme.palette.text.primary,
      "@media(max-width:767px)": {
        fontSize: "18px",
      },
    },
    "& .leftBox": {
      width: "100%",
      maxWidth: "306px",
      [theme.breakpoints.down("md")]: {
        maxWidth: "200px",
      },
      [theme.breakpoints.down("xs")]: {
        maxWidth: "150px",
      },
      "& img": {
        width: "100%",
        maxWidth: "110px",
        [theme.breakpoints.down("sm")]: {
          maxWidth: "80px",
          paddingLeft: "0 !important",
          paddingTop: "8px",
          paddingBottom: "8px",
        },
        "@media(max-width:483px)": {
          maxWidth: "58px",
        },
      },
    },
  },
  tabButton: {
    padding: "10px 20px",
    background: "transparent",
    color: "#F39200",
    "@media(max-width:483px)": {
      padding: "5px 9px",
    },
  },
  activeTabButton: {
    background: "#F39200",
    color: "#FFF",
    // borderTopLeftRadius:"20px",
    // borderBottomLeftRadius:"20px",
  },
  mainboxtab: {
    // borderRadius: '30px',
    border: "1px solid #F39200",
    display: "flex",
    alignItems: "center",
    background: "transparent",
    color: "#F39200",
    marginRight: "10px",
    cursor: "pointer",
    // borderTopLeftRadius:"20px",
    // borderTopRightRadius:"20px",
    // borderBottomLeftRadius:"20px",
    // borderBottomRightRadius:"20px",
    "@media(max-width:483px)": {
      fontSize: "11px",
    },
  },
  iconmain: {
    "& .MuiIconButton-root": {
      "@media(max-width:767px)": {
        padding: "5px !important",
      },
    },
  },
  avatarmain: {
    marginLeft: "16px",

    "@media(max-width:767px)": {
      marginLeft: "6px",
    },
  },
}));

const TopBar = ({
  selectedTab,
  onTabChange,
  className,
  onMobileNavOpen,
  ...rest
}) => {
  const classes = useStyles();
  const history = useHistory();
  const [tabView, setTabView] = useState("");

  // const themeSeeting = useContext(SettingsContext);
  // const changeTheme = (type) => {
  //   themeSeeting.saveSettings({
  //     theme: type,
  //   });
  // };

  return (
    <AppBar
      elevation={0}
      className={clsx(classes.root, className)}
      color="inherit"
      style={{ boxShadow: "0px 4px 4px rgb(0 0 0 / 10%)" }}
      {...rest}
    >
      <Toolbar className={classes.toolbar}>
        <Hidden lgUp>
          <IconButton
            color="#00e0b0"
            onClick={onMobileNavOpen}
            style={{ padding: "0px" }}
          >
            <SvgIcon>
              <MenuIcon style={{ color: "#EC1F24", fontSize: "25px" }} />
            </SvgIcon>
          </IconButton>
        </Hidden>
        &nbsp; &nbsp;
        <Box className={classes.mainheader}>
          <Grid container alignItems="center">
            <Grid item lg={3} md={3} sm={4} xs={6}>
              <Box className="leftBox">
                <Link to="/">
                  <Logo width="125" />
                </Link>
              </Box>
            </Grid>
            <Hidden xsDown>
              <Grid lg={4} md={6} sm={5}></Grid>
            </Hidden>
            <Grid lg={5} md={3} sm={3} xs={6}>
              <Box className="displayEnd">
                <Box
                  className={classes.avatarmain}
                  onClick={() => history.push("/profile")}
                  style={{ cursor: "pointer" }}
                >
                  <Avatar src="images/flagLogo.png" />
                </Box>
                <Box
                  className={classes.avatarmain}
                  onClick={() => history.push("/profile")}
                  style={{ cursor: "pointer" }}
                >
                  <Avatar src="images/notibell.png" />
                </Box>
                <Box
                  className={classes.avatarmain}
                  onClick={() => history.push("/profile")}
                  style={{ cursor: "pointer" }}
                >
                  <Avatar src="images/profileimage.png" />
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

TopBar.propTypes = {
  className: PropTypes.string,
};
TopBar.defaultProps = {
  onMobileNavOpen: () => {},
};

export default TopBar;

export function TopBarData() {
  const classes = useStyles();
  const history = useHistory();
  const auth = useContext(AuthContext);

  return (
    <>
      <Box display="flex" alignItems="center" justifyContent="flex-end">
        <Hidden xsDown>
          <Box>
            <Typography variant="h5">NFT Marketplace</Typography>
            <Typography variant="body1" style={{ color: "#ffffff9c" }}>
              example@gmail.com
            </Typography>
          </Box>
        </Hidden>
        &nbsp; &nbsp;
        <Avatar
        
          src={
            auth?.userData?.profilePic
              ? `${auth?.userData?.profilePic}`
              : "https://picsum.photos/533/357"
          }
          className={classes.avatar}
          // onClick={() => history.push("/admin-profile")}
        />
      </Box>
    </>
  );
}

import React from "react";
import {
  Grid,
  Box,
  Container,
  Typography,
  makeStyles,
  Button,
  ListItem,
  ListItemText,
  List,
  Link,
} from "@material-ui/core";
import TextField from '@material-ui/core/TextField';
import { Directions } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  footerSection: {
    position: "relative",
    padding: "50px 0px",
    backgroundPosition:" bottom left",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    [theme.breakpoints.up("sm")]: {
      paddingTop: theme.spacing(4),
    },
    [theme.breakpoints.up("md")]: {
      paddingTop: theme.spacing(4),
    },
    // "&"
    "& h5": {
      fontWeight: "bold",
      fontSize: "20px",
      letterSpacing: "2px",
      textTransform: "math-auto",
      marginTop:"30px"
      
    },
    '& ul': {
      paddingLeft: "0",
    },
    "& p": {
      marginBottom: "0px",
      marginTop: "10px",
      fontWeight: "500",
      fontSize: "12px",
      lineHeight: "18px",
      color: "#000000",
    },
  },
  footerBg: {
    position: "absolute",
    bottom: "0",
    width: "100%",
    left: "0",
  },
  ListItem: {
    paddingLeft: "0px",
  },
  borderBottmo: {
    overflow: "hidden",
    background: "#000",
    paddingTop: theme.spacing(6),
    paddingBottom: theme.spacing(6),
    [theme.breakpoints.down("md")]: {
      paddingTop: theme.spacing(3),
      paddingBottom: theme.spacing(3),
    },
  },
  signupBtn: {
    color: "#fff",
    display: "flex",
    fontSize: "16px",
    fontWeight: "bold",
    height: "45px",
    minWidth: "100px",
    borderRadius: "50px",
    position: "absolute",
    top: "5px",
    right: "5px",
    boxShadow:
      "0px 8px 24px rgba(38, 50, 56, 0.1), 0px 16px 32px rgba(38, 50, 56, 0.08)",
    lineHeight: "36px",
    alignItems: "center",
    textAlign: "center",
    letterSpacing: " 1px",
    background: "#040405",
    "&:hover": {
      background: "#040405",
      color: "#fff",
    },
  },
  largeIcon: {
    width: 18,
    height: 18,
    marginRight: "8px",
  },
  icons: {
    justify: "flex-end",
    [theme.breakpoints.down("sm")]: {
      justify: "center",
    },
  },
  inputBox: {
    position: "relative",
  },
  footerBgImg: {
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "100%",
    zIndex: "1",
  },
  textFild:{
    position:"relative",
    
    "& button":{
      position: "absolute",
      top: 0,
      right: 0,
      height: "100%",
      backgroundColor: "#000",
      minWidth: "90px",
      fontSize: "18px",
      fontWeight: "700",
      color: "#fff",
      "&:hover":{
        backgroundColor: "#000",
      },
    },
  },
  socialMediaIcon: {
    border:"1px solid #78819F",
    padding:"15px", 
    borderRadius:"5px",
    margin:"5px"
  },
  socialCenter:{
    marginTop:"20px"
  },
  listBox:{
    display:"flex",
    flexDirection:"column",
    justifyContent:"center",
    alignItems:"baseline"


    // display: flex;
    // flex-direction: column;
    // justify-content: center;
    // align-items: baseline;
  },
}));

export default function Liquidity() {
  const classes = useStyles();
  return (
    <>
      <Box className={classes.footerSection}
   
      >

        <Box style={{  position: "relative", zIndex: "2", }}>
          <Container maxWidth="lg">
            <Grid container spacing={1}>
              <Grid item xs={6} md={3}>
                <img alt="" src="images/pay2pLogo.png" width={120} />
                <Typography variant="h4">Community</Typography>
                <Box className={classes.socialCenter}>
                  <img src="images/facebook.png" alt="facebook" className={classes.socialMediaIcon} />
                  <img src="images/tweeter.png" alt="tweeter" className={classes.socialMediaIcon}/>
                  <img src="images/telegram.png" alt="telegram" className={classes.socialMediaIcon}/>
                  <img src="images/youtube.png" alt="youtube" className={classes.socialMediaIcon}/>
                  <img src="images/insta.png" alt="insta" className={classes.socialMediaIcon}/>
                </Box>
              </Grid>
              <Grid item xs={6} md={3} align="center">
              <Box className={classes.listBox}>
                <Typography variant="h4">Services</Typography>
              <List>
                  <ListItem>
                  PAYP2P
                  </ListItem>
                  <ListItem>
                   Wallet
                  </ListItem>
                  <ListItem>
                  Withdrawal
                  </ListItem>
                  <ListItem>
                    Deposite
                  </ListItem>
                </List>
              </Box>
              </Grid>
              <Grid item xs={6} md={3} align="center">
              <Box className={classes.listBox}>
                <Typography variant="h4">Support</Typography>
              <List>
                  <ListItem>
                    FAQ's
                  </ListItem>
                  <ListItem>
                    Privacy Policy
                  </ListItem>
                  <ListItem>
                   Terms & Conditions
                  </ListItem>
                  <ListItem>
                    Contact Us
                  </ListItem>
                  <ListItem>
                   Create a Ticket
                  </ListItem>
                </List>
              </Box>
                
              </Grid>
              <Grid item xs={6} md={3} align="center">
                <Box className={classes.listBox}>
                <Typography variant="h4">Contact Us</Typography>
                <List>
                  <ListItem>
                    <Link href="mailto:support@gmail.com">support@gmail.com</Link>
                  </ListItem>
                  <ListItem>
                    <Link href="mailto:info@gmail.com">info@gmail.com</Link>
                  </ListItem>
                  <ListItem>
                  <Link href="mailto:support@gmail.com">support@gmail.com</Link>
                  </ListItem>
                  <ListItem>
                  <Link href="mailto:info@gmail.com">info@gmail.com</Link>
                  </ListItem>
                </List>
                </Box>
              </Grid>
            </Grid>
          </Container>

        </Box>
      </Box>
    </>
  );
}

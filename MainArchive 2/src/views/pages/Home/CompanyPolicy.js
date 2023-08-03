import {
  Box,
  Container,
  Grid,
  Typography,
  makeStyles,
} from "@material-ui/core";
import React from "react";

const useStyles = makeStyles(() => ({
  companyPolicyBox: {
    padding: "100px 0px 50px",

    " & .mainHeading": {
      paddingBottom: "100px",
      textAlign: "center",
    },
    // " & .contentBox":{
    //   display:"flex",
    //   justifyContent:"center"
    // }
  },

  policyContentBox: {
    boxShadow: "0px -2px 0px #AE0000",
    borderRadius: "10px",
    // border: "1px solid ",
    width: "370px",
    height: "400px",
    marginTop: "20px",
    // display:"flex",
    // justifyContent:"space-evnely",

    " & .contentField": {
      textAlign: "center",
      alignItems: "center",
      padding: "35px",

      " & h3": {
        margin: "20px 0",
      },
    },
  },
}));

export default function CompanyPolicy() {
  const classes = useStyles();

  const card = [
    {
      logo: "/images/safety.png",
      head: "Guaranteed safety",
      content:
        "Lorem ipsum dolor sit amet consectetur. Vehicula elementum ultrices dictum sit ornare diam. Dictum mattis iacul in ametorci. Senectus sed scelerisque.",
    },
    {
      logo: "/images/pay.png",
      head: "Serving Global Payment",
      content:
        "Lorem ipsum dolor sit amet consectetur. Vehicula elementum ultrices dictum sit ornare diam. Dictum mattis iacul in ametorci. Senectus sed scelerisque.",
    },
    {
      logo: "/images/verified-account.png",
      head: "Verified Platform",
      content:
        "Lorem ipsum dolor sit amet consectetur. Vehicula elementum ultrices dictum sit ornare diam. Dictum mattis iacul in ametorci. Senectus sed scelerisque.",
    },
  ];
  return (
    <Box className={classes.companyPolicyBox}>
      <Container>
        <Box className="mainHeading displayCenter">
          <Typography variant="h2">
            We are a plaform with the most
            <Typography variant="h2">completed features</Typography>
          </Typography>
        </Box>
        <Grid container spacing={3}>
          {card &&
            card?.map((data, i) => {
              return (
                <Grid item xs={12} sm={12} md={4}>
                  <Box className={classes.policyContentBox}>
                    <Box className="contentField displayCenterColumn">
                      <img src={data.logo} />
                      <Typography variant="h3">{data.head}</Typography>
                      <Typography variant="h6">{data.content}</Typography>
                    </Box>
                  </Box>
                </Grid>
              );
            })}
        </Grid>
      </Container>
    </Box>
  );
}

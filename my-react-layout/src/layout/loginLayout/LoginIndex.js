import { Box, Container, Grid, Hidden } from "@mui/material";
import React from "react";

const LoginIndex = ({ children }) => {
  return (
    <Grid container>
     
        <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          height="100vh" 
          width="100%"
        >
          <Container maxWidth="md">
            <Box>{children}</Box>
          </Container>
        </Box>
        </Grid>
    

      <Hidden mdDown>
        <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
          <Box
            style={{
              position: "fixed",
              top: 0,
              right: 0,
              width: "50%",
              height: "100vh",
              overflow: "hidden",
            }}
          >
            <img
              src="/images/loginSideImg.png"
              alt="LoginSideImage"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "top",
              }}
            />
          </Box>
        </Grid>
      </Hidden>
    </Grid>
  );
};

export default LoginIndex;

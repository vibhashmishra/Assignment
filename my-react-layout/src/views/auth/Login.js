import { Box, Button, TextField, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const mainContainer = {
  "& h2": {
    textAlign: "center",
  },
  "& .loginMainBox": {
    display: "flex",
    // justifycontent:"center",
    // alignItems:"center",
    flexDirection: "column",
  },
};

const Login = () => {
  const navigate = useNavigate();
  // const handleSignup = ()=>{
  //   history.push("/signup")
  // }

  return (
    <Box sx={mainContainer}>
      <Box className="loginMainBox">
        <Typography variant="h2">Login</Typography>
        <Box mt={2}>
          <Typography variant="h6">Email or Mobile no.</Typography>
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Enter your mobile no./email address"
            name="emailOrMobile"
          />
        </Box>
        <Box mt={2}>
          <Typography variant="h6">Password</Typography>
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Enter your Password"
            name="emailOrMobile"
          />
        </Box>
      </Box>
      <Button variant="contained" color="primary" sx={{ marginTop: "24px" }} onClick={()=>{
        navigate("/signup")
      }}>
        Login
      </Button>
    </Box>
  );
};

export default Login;

import { Box, Button, TextField, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const mainContainer = {
  "& h2": {
    textAlign: "center",
  },
  "& .SignMainBox": {
    display: "flex",
    flexDirection: "column",
  },
};

const Signup = () => {
  const navigate = useNavigate(); // Corrected: Call useNavigate to get the navigate function
  return (
    <Box sx={mainContainer}>
      <Box className="SignMainBox">
        <Typography variant="h2">Sign Up</Typography>
        <Box mt={2}>
          <Typography variant="h6">Name</Typography>
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Enter your mobile no./email address"
          />
        </Box>
        <Box mt={2}>
          <Typography variant="h6">Last Name</Typography>
          <TextField fullWidth variant="outlined" placeholder="Last Name" />
        </Box>
        <Box mt={2}>
          <Typography variant="h6">Email</Typography>
          <TextField fullWidth variant="outlined" placeholder="Enter Email" />
        </Box>
        <Box mt={2}>
          <Typography variant="h6">Mobile no.</Typography>
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Enter Mobile No."
          />
        </Box>
      </Box>
      <Button
        variant="contained"
        color="primary"
        sx={{ marginTop: "24px" }}
        onClick={() => {
          navigate("/otp-verify");
        }}
      >
        Sign Up
      </Button>
    </Box>
  );
};

export default Signup;

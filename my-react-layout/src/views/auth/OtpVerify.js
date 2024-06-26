import styled from "@emotion/styled";
import { Box, Button, Paper, Typography, FormControl } from "@mui/material";
import React, { useState } from "react";
import OtpInput from "react-otp-input";


const MainComponent = styled("Box")(({ theme }) => ({
  "& .otpmainBox": {
    height: "100%",
    position: "relative",
    zIndex: "999",
    overflowY: "auto",
    "& p": {
      fontWeight: "300",
    },
    "& .loginBox": {
      height: "initail",
      margin: "15px auto",
      maxWidth: " 95%",
      width: "487px",
      maxHeight: "100%",
      "& .otpBox": {
        marginTop: "24px",
        "& p": {
          textAlign: "right",
          width: "100%",
          maxWidth: "340px",
          marginTop: "8px",
        },
        "& span":{
          fontFamily: "Gilroy-Bold",
          textDecoration:"underline"
        }
      },
    },
    "& .logoImage": {
      width: "100%",
      backgroundSize: "cover !important",
      backgroundRepeat: "no-repeat !important",
      objectFit: "cover !important",
      "& h3": {
        marginTop: "8px",
        fontWeight: "400",
        color: "#000000DE",
      },
      "& h2": {
        marginTop: "24px",
        marginBottom: "24px",
        fontWeight: "400",
        color: "#000000DE",
      },
    },
    "& input": {
      border: "1px solid rgba(0, 0, 0, 0.10)",
      borderRadius: "50px",
      fontSize: "20px",
      height: "55px !important",
      width: "55px !important",
      marginRight: "20px",
      background: "rgba(0, 0, 0, 0.05)",
    },
  },
}));
export default function OtpVerify() {

  const [otp, setOtp] = useState("");
 
  return (
    <MainComponent>
      <Box className="otpmainBox displayCenter">
        <Box className="loginBox">
       
            <Box>
              <Typography variant="h2" color="primary">
                Verify OTP
              </Typography>
              <Typography
                variant="body2"
              >
                OTP has been sent to +91 984783249 Please enter the OTP.
              </Typography>
            </Box>
            <Box className="otpBox">
              <Box className="displayCenter">
                <FormControl>
                <OtpInput
                  value={otp}
                  onChange={setOtp}
                  numInputs={4}
                  autoFocus={false}
                  inputType="number"
                  renderInput={(props) => <input {...props} />}
                  secure
      
                />
                </FormControl>
              </Box>
              <Typography variant="body2">02:59</Typography>
              <Typography  style={{marginTop:"24px"}} variant="body2">If you don't receive any OTP? <span>Renend OTP</span></Typography>
            </Box>
            <Box mt={3} mb={2} className="displayCenter">
              <Button
               
                variant="contained"
                color="primary"
                
              >
                Verify OTP
              </Button>
            </Box>
          
        </Box>
      </Box>
    </MainComponent>
  );
}


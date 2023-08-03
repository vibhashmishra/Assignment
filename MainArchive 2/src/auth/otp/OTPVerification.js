import React, { useState, useRef, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Box, Typography } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { toast } from "react-hot-toast";
import apiConfig from 'src/ApiConfig/apiConfig';
import axios from 'axios';
import { Formik } from 'formik';
import * as Yup from "yup";

const useStyles = makeStyles((theme) => ({
  otpMainBox: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    height: '100vh',
  },
  otpField: {
    width: 40,
    margin: '25px 4px',
  },
}));

const OTPVerification = () => {
  const classes = useStyles();
  const history = useHistory();
  const [otp, setOTP] = useState(Array(4).fill());
  const [timer, setTimer] = useState(0);
  const otpFields = useRef([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    let interval;
    if (timer > 0) {
      interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [timer]);


  const formInitialSchema = { 
    email: "",
    otp:0    
  };

  const formValidationSchema = Yup.object().shape({  
    // email: Yup.string()
    //   .required("Full Name is required")
    //   .max(30, "Full Name must not exceed 30 characters"), 
      otp: Yup.string()
      .required("Full Name is required")
      .max(4, "Full Name must not exceed 30 characters"), 
  });

  const location = useLocation();
  console.log("fdsjgfds", location)
  const email = location.state?.email || "";
 
  const handleOTPChange = (index, event) => {
    const newOTP = [...otp];
    newOTP[index] = event.target.value;

    if (event.target.value === '') {
      if (index > 0 && otpFields.current[index - 1]) {
        otpFields.current[index - 1].focus();
      }
    } else {
      if (index < otp.length - 1 && otpFields.current[index + 1]) {
        otpFields.current[index + 1].focus();
      }
    }

    setOTP(newOTP);
  };

  const handleResendOTP = () => {
    setTimer(60);
  };

  const handleVerifyOTP = async (values) => {
    const otpCode = otp.join('');
    console.log('OTP entered:', otpCode);
    
    try {
      setIsLoading(true);
      const res = await axios({
        method: "PATCH",
        url: apiConfig.verifyOTP,
        data: {
          email: email,
          otp: parseInt(otpCode)
        },
      });
  
      if (res.data.responseCode === 200) {
        toast.success(res.data.responseMessage);
  
        history.push({
          pathname: "/LoginPage",
          state: {
            email: values.email,
            otp: values.otp,
          },
        });
      }
      if (res.data.responseCode === 404) {
        toast.error(res.data.responseMessage);
      }
      setIsLoading(false);
    } catch (err) {
      toast.error(err?.response?.data?.responseMessage); // Corrected error handling
      console.error(err.response);
      setIsLoading(false);
    }
  };
  

  return (
    <>
      <Box className={classes.otpMainBox}>
       <Formik 
         initialValues={formInitialSchema}
         validationSchema={formValidationSchema}
        //  onSubmit={handleFormSubmit}
       >
        
       <Box className={classes.otpSection}>
          <Box>
            <Typography variant="h2">Security Verification</Typography>
            <Typography variant="body2">Please enter your 4 digits verification code</Typography>
          </Box>
          <Box>
            {otp.map((digit, index) => (
              <TextField
                key={index}
                className={classes.otpField}
                variant="outlined"
                inputProps={{
                  maxLength: 1,
                }}
                value={otp[index]}
                onChange={(event) => handleOTPChange(index, event)}
                inputRef={(el) => (otpFields.current[index] = el)}
              />
            ))}
          </Box>
          <Box>
            {timer === 0 ? (
              <Button variant="text" style={{color:"red"}} onClick={handleResendOTP}>
                Resend OTP
              </Button>
            ) : (
              <Typography variant="body2" style={{color:"red"}}>Resend in {timer} seconds</Typography>
            )}
          </Box>
          <Box>
            <Button variant="contained" color="primary" onClick={handleVerifyOTP}>
              Confirm
            </Button>
          </Box>
        </Box>
       </Formik>
      </Box>
    </>
  );
};

export default OTPVerification;



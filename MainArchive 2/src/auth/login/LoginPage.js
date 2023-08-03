import { Box, Button, Grid, TextField, Typography } from "@material-ui/core";
import React, { useState } from "react";
import { makeStyles } from "@material-ui/core";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import {Link} from "react-router-dom"
import { toast } from "react-hot-toast";
import {useHistory} from "react-router-dom"
import apiConfig from "src/ApiConfig/apiConfig";
import axios from "axios";
import * as yep from "yup";


const useStyles = makeStyles((theme) => ({
  loginBox: {
    height: "100vh",
    width: "100vw",
  },

  loginSection: {

    // padding: "100px",
    // background: "linear-gradient(to right, #ff8a00, #e52e71)"

  },
  textField: {
    width: 300,
    color: "red"
  },
  textFieldGrid: {
    marginBottom: theme.spacing(2),
    maxWidth: "min-content"
  },
  loginHead: {
    marginBottom: theme.spacing(4),
  },
  loginBtn: {
    display: "flex",
    justifyContent: "end"
  },
  signUpBtn: {
    // display: "flex",
    marginTop: "20px",

    "& > *": {
      display: "flex",
    },
  }
}))


const LoginPage = () => {
  const classes = useStyles();
  const history = useHistory();
  const [isProcessing, setIsProcessing] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const formInitialSchema = {
    email: "",
    password: "",
    deviceToken:"",
    deviceWeb:"",
  };

  const formValidationSchema = yep.object().shape({
    email: yep
      .string()
      .email("Please enter a valid email.")
      .max(256, "Email should not exceed 256 characters.")
      .required("Email is required."),

    password: yep
      .string()
      .trim()
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        "Please enter a valid password."
      )
      .required("Password is required.")
      .max(16, "Password should not exceed 16 characters.")
      .min(8, "Password must be a minimum of 8 characters."),
  });


  const handleFormSubmit = async (values) => {
    try {
      console.log(values);
      setIsLoading(true);
      const res = await axios({
        method: "POST",
        url: apiConfig.login,
        data: {
          email: values.email,
          password: values.password,
          deviceToken: "",
          deviceType: "WEB",
        },
      });
     
      if (res.data.responseCode === 200) {
        console.log("asdf",res.data.result.token)
        toast.success(res.data.responseMessage);
        window.localStorage.setItem("token", res.data.result.token)
        history.push({
          pathname: "/dashboard",
          state: {
            email: values.email,
          },
        });
      }
      if (res.data.responseCode === 404) {
        toast.error(res.data.responseMessage);
      }
      setIsLoading(false);
    } catch (err) {
      toast.error(err?.responseCode?.data?.responseMessage);
      console.error(err.res);
      setIsLoading(false);
    }
  };
  
  return (
    <Box className={`${classes.loginBox} displayCenter`}>
      <Box className={classes.loginSection}>
        <Box className={classes.loginHead}>
          <Typography variant="h2">Welcome back</Typography>
          <Typography variant="body1">Sign in to continue</Typography>
        </Box>
        <Formik
          initialValues={formInitialSchema}
          validationSchema={formValidationSchema}
          onSubmit={handleFormSubmit}
        >
          {({ isSubmitting }) => (
            <Form>
              <Grid item xs={12} className={classes.textFieldGrid}>
                <Field name="email">
                  {({ field, meta }) => (
                    <TextField
                      {...field}
                      label="Email"
                      variant="outlined"
                      className={classes.textField}
                      error={meta.touched && meta.error ? true : false}
                      helperText={meta.touched && meta.error ? meta.error : ""}
                    />
                  )}
                </Field>
              </Grid>
              <Grid item xs={12} className={classes.textFieldGrid}>
                <Field name="password">
                  {({ field, meta }) => (
                    <TextField
                      {...field}
                      label="Password"
                      variant="outlined"
                      className={classes.textField}
                      type="password"
                      error={meta.touched && meta.error ? true : false}
                      helperText={meta.touched && meta.error ? meta.error : ""}
                    />
                  )}
                </Field>
                <Link to="/forgotPassword">
                  <Typography variant="body2" style={{ color: "red" }}>
                    Forgot Password?
                  </Typography>
                </Link>
              </Grid>
              <Box className={classes.loginBtn}>
                 <Button
                   type="submit"
                   variant="contained"
                   color="error"
                   disabled={isSubmitting}
                 >
                   Login
                 </Button>
               </Box>
               <Box className={classes.signUpBtn}>
                 <Typography style={{ color: "blue" }} variant="body2">
                   Don't have an Account? &nbsp; <Typography variant="body2" style={{ color: "red" }} >Sign Up</Typography>
                 </Typography>
               </Box>
            </Form>
          )}
        </Formik>
      </Box>
    </Box>
  );
};

export default LoginPage;




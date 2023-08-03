import { Box, Button, Grid, TextField, Typography } from "@material-ui/core";
import React, { useState } from "react";
import { makeStyles } from "@material-ui/core";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import apiConfig from "src/ApiConfig/apiConfig";
import {Link,useHistory} from "react-router-dom"
import { toast } from "react-hot-toast";
import axios from "axios";



const useStyles = makeStyles((theme) => ({
    forgotBox: {
    height: "100vh",
    width: "100vw",
  },

  loginSection: {
    // padding: "100px",
    // background: "linear-gradient(to right, #ff8a00, #e52e71)"

  },
  textField: {
    width: 350,
    color: "red"
  },
  textFieldGrid: {
    marginBottom: theme.spacing(2),
    maxWidth: "min-content"
  },
  forgotHead: {
    marginBottom: theme.spacing(4),
  },
  submitBtn: {
    display: "flex",
    justifyContent: "end"
  },

}))

const ForgotPassword = () => {
    const classes = useStyles();
    const history = useHistory();
    const [isLoading, setIsLoading] = useState(false);

    const formInitialSchema = { 
      email: ""     
    };

    const formValidationSchema = Yup.object().shape({
      email: Yup.string().email("Invalid email address").required("Required"),
    });

    const handleFormSubmit = async (values) => {
      try {
        console.log(values);
        setIsLoading(true);
        const res = await axios({
          method: "POST",
          url: apiConfig.forgotPassword,
          data: {
            email: values.email,
          },
        });
  
        if (res.data.responseCode === 200) {
          toast.success(res.data.responseMessage);
  
          history.push({
            pathname: "/SecurityVerify",
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
      <Box className={`${classes.forgotBox} displayCenter`}>
        <Box>
          <Box className={classes.forgotHead}>
            <Typography variant="h2">Forgot Password</Typography>
            <Typography variant="body1">Enter your email for the verification process, we will send 4 digits code to your email. </Typography>
          </Box>
          <Formik
            initialValues={formInitialSchema}
            formValidationSchema={formValidationSchema}
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
                
                <Box className={classes.submitBtn}>
                  <Button
                    type="submit"
                    variant="contained"
                    color="error"
                    disabled={isSubmitting}
                  >
                    Submit
                  </Button>
                </Box>
              </Form>
            )}
          </Formik>
        </Box>
      </Box>
    );
  };
  
  export default ForgotPassword;




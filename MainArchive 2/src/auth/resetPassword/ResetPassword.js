import React, { useState } from "react";
import { Box, Button, Grid, TextField, Typography } from "@material-ui/core";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { toast } from "react-hot-toast";
import { useHistory } from "react-router-dom";
import apiConfig from "src/ApiConfig/apiConfig";
import { makeStyles } from "@material-ui/core";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  mainBox: {
    height: "100vh",
    width: "100vw",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  resetBox: {
    display: "flex",
    flexDirection: "column",
  },
}));

const ResetPassword = () => {
  const [showPassword, setShowPassword] = useState(false);
  const history = useHistory();
  const token = window.localStorage.getItem("token");
  console.log("asdfg", token);
  const classes = useStyles();

  const validationSchema = Yup.object().shape({
    newPassword: Yup.string()
      .required("New Password is required.")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        "Please enter a valid password."
      ),
    confirmPassword: Yup.string()
      .required("Confirm Password is required.")
      .oneOf([Yup.ref("newPassword"), null], "Passwords must match"),
  });

  const formInitialSchema = {
    password: "",
    confirmPassword: "",
  };

  const handleFormSubmit = async (values) => {
    try {
      console.log(values);
      //   setIsLoading(true);
      const res = await axios({
        method: "POST",
        url: apiConfig.resetPassword,
        headers: {
          token: token,
        },
        data: {
          password: values.newPassword,
          confirmPassword: values.confirmPassword,
        },
      });

      if (res.data.responseCode === 200) {
        toast.success(res.data.responseMessage);

        history.push({
          pathname: "/LoginPage",
        });
      }
      if (res.data.responseCode === 404) {
        toast.error(res.data.responseMessage);
      }
    } catch (err) {
      toast.error(err?.responseCode?.data?.responseMessage);
      console.error(err.res);
    }
  };

  return (
    <Box className={classes.mainBox}>
      <Box className={classes.resetBox}>
        <Box>
          <Typography variant="h2">Reset your Password</Typography>
          <Typography variant="body2">
            Enter Password and confirm password to set your new password
          </Typography>
        </Box>
        <Grid container>
         
            <Formik
              initialValues={{
                newPassword: "",
                confirmPassword: "",
              }}
              validationSchema={validationSchema}
              onSubmit={(values) => handleFormSubmit(values)}
            >
              {({ errors, touched, handleChange, handleBlur, values }) => (
                <Form>
                 <Grid item xs={12}>
                <Box mt={1} mb={1}>
                <TextField
                    fullWidth
                    variant="outlined"
                    placeholder="Enter your new password"
                    type={showPassword ? "text" : "password"}
                    name="newPassword"
                    value={values.newPassword}
                    error={Boolean(touched.newPassword && errors.newPassword)}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    style={{ width: "280px" }}
                  />
                </Box>
                 </Grid>

                <Grid item xs={12}>
                <TextField
                    fullWidth
                    variant="outlined"
                    placeholder="Confirm new password"
                    type={showPassword ? "text" : "password"}
                    name="confirmPassword"
                    value={values.confirmPassword}
                    error={Boolean(
                      touched.confirmPassword && errors.confirmPassword
                    )}
                    onBlur={handleBlur}
                    onChange={handleChange}
                  />
                </Grid>
                 <Box  mt={1} mb={1}>
                 <Button variant="contained" color="error" type="submit">
                    Reset Password
                  </Button>
                 </Box>
                </Form>
              )}
            </Formik>
       
        </Grid>
      </Box>
    </Box>
  );
};

export default ResetPassword;

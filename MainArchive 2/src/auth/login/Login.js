import {
    Box,
    Button,
    makeStyles,
    TextField,
    Typography,
    Checkbox,
    IconButton,
    InputAdornment,
    Paper,
    FormHelperText,
  } from "@material-ui/core";
  import React, { useState } from "react";
  import { useHistory } from "react-router-dom";
  import { HiEye, HiEyeOff } from "react-icons/hi";
  import { Form, Formik } from "formik";
  import * as yep from "yup";
  import { toast } from "react-hot-toast";
  import ButtonCircularProgress from "src/component/ButtonCircularProgress";
  import ErrorAlert from "src/component/ErrorAlert";
  import { dataPostHandler } from "src/apiconfig/service";
  
  const useStyles = makeStyles((theme) => ({
    loginmainBox: {
      height: "100%",
      position: "relative",
      zIndex: "999",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      overflowY: "auto",
    },
    loginBox: {
      height: "initail",
  
      margin: "15px auto",
      maxWidth: " 95%",
      width: "487px",
      maxHeight: "100%",
      "& .mainBox": {
        padding: "50px 40px",
        [theme.breakpoints.down("xs")]: {
          padding: "20px 10px 50px",
        },
        "& h2": {
          textAlign: "center",
          paddingBottom: "25px",
          [theme.breakpoints.down("xs")]: {
            paddingBottom: "10px",
          },
        },
      },
      "& .displaySpacebetween": {
        padding: "15px 0px",
      },
    },
    iconsclass1: {
      color: "#585757",
      fontSize: "20px",
    },
  }));
  
  export default function Login() {
    const classes = useStyles();
    const history = useHistory();
    const [isProcessing, setIsProcessing] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const formInitialSchema = {
      email: "",
      password: "",
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
        setIsProcessing(true);
        const response = await dataPostHandler("login", {
          email: values.email,
          password: values.password,
          ipAddress: "",
          location: "",
          userAgent: "",
          deviceToken: "",
          deviceType: "WEB",
        });
        console.log("response", response);
        if (response.data.status === 200) {
          window.localStorage.setItem(
            "token",
            `Bearer ${response.data.data.token}`
          );
          // auth.getProfileDataHandler(`Bearer ${response.data.data.token}`);
          toast.success(response.data.message);
          history.push("/dashboard");
        } else {
          toast.error(response.data.message);
        }
        setIsProcessing(false);
      } catch (error) {
        console.log(error);
        setIsProcessing(false);
      }
    };
  
    return (
      <Box className={classes.loginmainBox}>
        <Box className={classes.loginBox}>
          <Paper className="mainBox" elevation={2}>
            <Typography variant="h2" color="secondary">
              Log in
            </Typography>
            <Formik
              initialValues={formInitialSchema}
              initialStatus={{
                success: false,
                successMsg: "",
              }}
              validationSchema={formValidationSchema}
              onSubmit={(values) => handleFormSubmit(values)}
            >
              {({
                errors,
                handleBlur,
                handleChange,
                handleSubmit,
                touched,
                values,
                setFieldValue,
              }) => (
                <Form>
                  <Box>
                    <Box mt={2} mb={1}>
                      <Typography variant="body2" color="secondary">
                        Email
                      </Typography>
                    </Box>
                    <TextField
                      fullWidth
                      disabled={isProcessing}
                      variant="outlined"
                      placeholder="Please enter email address"
                      name="email"
                      value={values.email}
                      error={Boolean(touched.email && errors.email)}
                      onBlur={handleBlur}
                      onChange={handleChange}
                    />
                    <FormHelperText error className={classes.helperText}>
                      {touched.email && errors.email}
                    </FormHelperText>
                  </Box>
                  <Box>
                    <Box mt={2} mb={1}>
                      <Typography variant="body2">Password</Typography>
                    </Box>
                    <TextField
                      fullWidth
                      variant="outlined"
                      placeholder="Please enter password"
                      type={showPassword ? "text" : "password"}
                      name="password"
                      disabled={isProcessing}
                      value={values.password}
                      error={Boolean(touched.password && errors.password)}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton
                              onClick={() => setShowPassword(!showPassword)}
                              edge="end"
                            >
                              <Box>
                                {showPassword ? (
                                  <HiEye className={classes.iconsclass1} />
                                ) : (
                                  <HiEyeOff className={classes.iconsclass1} />
                                )}
                              </Box>
                            </IconButton>
                          </InputAdornment>
                        ),
                      }}
                    />
                    <FormHelperText error className={classes.helperText}>
                      {touched.password && errors.password}
                    </FormHelperText>
                  </Box>
                  <Box className="displaySpacebetween">
                    <Box className="displayStart">
                      <Checkbox onChange={handleChange} />
                      <Typography variant="body2" color="secondary">
                        Remember me
                      </Typography>
                    </Box>
                    <Typography
                      variant="body2"
                      style={{ color: "#F39200", cursor: "pointer" }}
                      onClick={() => history.push("/forget")}
                    >
                      Forgot Password?
                    </Typography>
                  </Box>
                  <Box mt={1}>
                    <Button
                      variant="contained"
                      color="primary"
                      type="submit"
                      fullWidth
                      disabled={isProcessing}
                    >
                      Login {isProcessing && <ButtonCircularProgress />}
                    </Button>
                  </Box>
                </Form>
              )}
            </Formik>
          </Paper>
        </Box>
      </Box>
    );
  }
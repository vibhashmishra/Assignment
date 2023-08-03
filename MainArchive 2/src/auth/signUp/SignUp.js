import React, { useContext, useState } from "react";
import {
  Box,
  Button,
  Container,
  FormHelperText,
  Grid,
  TextField,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import apiConfig from "src/ApiConfig/apiConfig";
import { toast } from "react-hot-toast";
import { AuthContext } from "src/context/Auth";

const useStyles = makeStyles((theme) => ({
  // signUpsection: {
  //   height: "100vh",
  //   width: "100vw",
  // },
  textField: {
    // width: "100%",
  },
  errorText: {
    color: "red",
    fontSize: "0.73rem",
  },
  phoneInput: {
    width: "100%",
  },
}));

const SignUp = () => {
  const classes = useStyles();
  const history = useHistory();
  const [isLoading, setIsLoading] = useState(false);
  const auth = useContext(AuthContext);

  const formInitialSchema = {
    firstName: "",
    lastName: "",
    countryCode: "",
    mobileNumber: "",
    email: "",
    password: "",
    country: "",
    companyName: "",
    tinNumber: "",
    gstNumber: "",
    state: "",
    address: "",
    city: "",
    zipCode: "",
    dateOfBirth: "",
    deviceToken: "",
    deviceType: "",
  };
  const formValidationSchema = Yup.object().shape({
    firstName: Yup.string()
      .required("Full Name is required")
      .min(3, "Please enter atleast 3 characters.")
      .max(256, "You can enter only 256 characters.")
      .matches(
        /^[A-Z][a-zA-Z]*$/,
        "Name must start with a capital letter and contain only letters"
      )
      .matches(
        /^(?!.*([A-Za-z])\1\1)/,
        "Name cannot have the same letter repeated more than 2 times"
      )
      .matches(/^[^0-9]*$/, "Name cannot contain numbers"),
    lastName: Yup.string()
      .required("Full Name is required")
      .min(3, "Please enter atleast 3 characters.")
      .max(256, "You can enter only 256 characters.")
      .matches(
        /^[A-Z][a-zA-Z]*$/,
        "Name must start with a capital letter and contain only letters"
      )
      .matches(
        /^(?!.*([A-Za-z])\1\1)/,
        "Name cannot have the same letter repeated more than 2 times"
      )
      .matches(/^[^0-9]*$/, "Name cannot contain numbers"),
    countryCode: Yup.string()
      .required("Country code is required")
      .matches(/^\+?[1-9]\d{0,3}$/, "Invalid country code"),
    mobileNumber: Yup.string()
      .required("Mobile number is required")
      .matches(/^\d{10}$/, "Mobile number must be 10 digits")
      .matches(/^[0-9]+$/, 'Only contain numbers'),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .required("Password is required")
      .min(8, "Password must be at least 8 characters long")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[a-zA-Z\d@$!%*?&]+$/,
        "Password must include at least one uppercase letter, one lowercase letter, one number, and one special character"
      ),
    dateOfBirth: Yup.date()
      .required("Date of Birth is required")
      .max(new Date(), "Invalid date of birth")
      .test(
        "age",
        "You must be at least 18 years old",
        (value) => value && calculateAge(value) >= 18
      ),
    country: Yup.string().required("Country is required")
    .matches(/^[A-Z][a-zA-Z]*$/,"Name must start with a capital letter and contain only letters"),
    companyName: Yup.string().required("Company Name is required")
    .matches(/^[A-Z][a-zA-Z]*$/,"Name must start with a capital letter and contain only letters"),
    tinNumber: Yup.string().required("TIN Number is required"),
    gstNumber: Yup.string().required("GST Number is required"),
    state: Yup.string().required("State is required"),
    address: Yup.string().required("Address is required"),
    city: Yup.string().required("City name is required"),
    zipCode: Yup.string().required("Zip Code is required")
    .matches(/^[0-9]+$/, 'Only contain numbers'),
  });
  const handleFormSubmit = async (values) => {
    try {
      console.log(values);
      setIsLoading(true);
      const res = await axios({
        method: "POST",
        url: apiConfig.signUp,
        data: {
          firstName: values.firstName,
          lastName: values.lastName,
          countryCode: values.countryCode,
          mobileNumber: values.mobileNumber,
          email: values.email,
          password: values.password,
          country: values.country,
          companyName: values.companyName,
          tinNumber: values.tinNumber,
          gstNumber: values.gstNumber,
          state: values.state,
          address: values.address,
          city: values.city,
          zipCode: values.zipCode,
          dateOfBirth: values.dateOfBirth,
        },
      });

      if (res.data.responseCode === 200) {
        toast.success(res.data.responseMessage);

        history.push({
          pathname: "/otpVerification",
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
  const calculateAge = (dob) => {
    const today = new Date();
    const birthDate = new Date(dob);
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    if (
      monthDiff < 0 ||
      (monthDiff === 0 && today.getDate() < birthDate.getDate())
    ) {
      age--;
    }
    return age;
  };

  return (
    <Box className={`${classes.signUpsection} displayCenter`}>
      <Container maxWidth="sm">
        <Typography variant="h4" align="center" gutterBottom>
          Sign Up
        </Typography>
        <Formik
          initialValues={formInitialSchema}
          validationSchema={formValidationSchema}
          onSubmit={handleFormSubmit}
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
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <TextField
                    type="text"
                    variant="outlined"
                    fullWidth
                    value={values.firstName}
                    placeholder="Please enter your first name..."
                    name="firstName"
                    error={Boolean(touched.firstName && errors.firstName)}
                    onBlur={handleBlur}
                    onChange={handleChange}
                  />
                  <FormHelperText error>
                    {touched.firstName && errors.firstName}
                  </FormHelperText>
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    type="text"
                    variant="outlined"
                    fullWidth
                    value={values.lastName}
                    placeholder="Please enter your last name ..."
                    name="lastName"
                    error={Boolean(touched.lastName && errors.lastName)}
                    onBlur={handleBlur}
                    onChange={handleChange}
                  />
                  <FormHelperText error>
                    {touched.lastName && errors.lastName}
                  </FormHelperText>
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    type="date"
                    variant="outlined"
                    fullWidth
                    value={values.dateOfBirth}
                    label="Date of Birth"
                    name="dateOfBirth"
                    error={Boolean(touched.dateOfBirth && errors.dateOfBirth)}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                  <FormHelperText error>
                    {touched.dateOfBirth && errors.dateOfBirth}
                  </FormHelperText>
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    type="text"
                    variant="outlined"
                    fullWidth
                    value={values.countryCode}
                    placeholder="Please enter your country code"
                    name="countryCode"
                    error={Boolean(touched.countryCode && errors.countryCode)}
                    onBlur={handleBlur}
                    onChange={handleChange}
                  />
                  <FormHelperText error>
                    {touched.countryCode && errors.countryCode}
                  </FormHelperText>
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    type="text"
                    variant="outlined"
                    fullWidth
                    value={values.mobileNumber}
                    placeholder="Please enter your mobile number"
                    name="mobileNumber"
                    error={Boolean(touched.mobileNumber && errors.mobileNumber)}
                    onBlur={handleBlur}
                    onChange={handleChange}
                  />
                  <FormHelperText error>
                    {touched.mobileNumber && errors.mobileNumber}
                  </FormHelperText>
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    type="email"
                    variant="outlined"
                    fullWidth
                    value={values.email}
                    placeholder="Please enter your email..."
                    name="email"
                    error={Boolean(touched.email && errors.email)}
                    onBlur={handleBlur}
                    onChange={handleChange}
                  />
                  <FormHelperText error>
                    {touched.email && errors.email}
                  </FormHelperText>
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    type="password"
                    variant="outlined"
                    fullWidth
                    value={values.password}
                    placeholder="Please enter your password..."
                    name="password"
                    error={Boolean(touched.password && errors.password)}
                    onBlur={handleBlur}
                    onChange={handleChange}
                  />
                  <FormHelperText error>
                    {touched.password && errors.password}
                  </FormHelperText>
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    type="text"
                    variant="outlined"
                    fullWidth
                    value={values.country}
                    placeholder="Please enter your country..."
                    name="country"
                    error={Boolean(touched.country && errors.country)}
                    onBlur={handleBlur}
                    onChange={handleChange}
                  />
                  <FormHelperText error>
                    {touched.country && errors.country}
                  </FormHelperText>
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    type="text"
                    variant="outlined"
                    fullWidth
                    value={values.companyName}
                    placeholder="Please enter your company name..."
                    name="companyName"
                    error={Boolean(touched.companyName && errors.companyName)}
                    onBlur={handleBlur}
                    onChange={handleChange}
                  />
                  <FormHelperText error>
                    {touched.companyName && errors.companyName}
                  </FormHelperText>
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    type="text"
                    variant="outlined"
                    fullWidth
                    value={values.tinNumber}
                    placeholder="Please enter your TIN Number..."
                    name="tinNumber"
                    error={Boolean(touched.tinNumber && errors.tinNumber)}
                    onBlur={handleBlur}
                    onChange={handleChange}
                  />
                  <FormHelperText error>
                    {touched.tinNumber && errors.tinNumber}
                  </FormHelperText>
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    type="text"
                    variant="outlined"
                    fullWidth
                    value={values.gstNumber}
                    placeholder="Please enter your GST Number..."
                    name="gstNumber"
                    error={Boolean(touched.gstNumber && errors.gstNumber)}
                    onBlur={handleBlur}
                    onChange={handleChange}
                  />
                  <FormHelperText error>
                    {touched.gstNumber && errors.gstNumber}
                  </FormHelperText>
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    type="text"
                    variant="outlined"
                    fullWidth
                    value={values.state}
                    placeholder="Please enter your State..."
                    name="state"
                    error={Boolean(touched.state && errors.state)}
                    onBlur={handleBlur}
                    onChange={handleChange}
                  />
                  <FormHelperText error>
                    {touched.state && errors.state}
                  </FormHelperText>
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    type="text"
                    variant="outlined"
                    fullWidth
                    value={values.address}
                    placeholder="Please enter your Address..."
                    name="address"
                    error={Boolean(touched.address && errors.address)}
                    onBlur={handleBlur}
                    onChange={handleChange}
                  />
                  <FormHelperText error>
                    {touched.address && errors.address}
                  </FormHelperText>
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    type="text"
                    variant="outlined"
                    fullWidth
                    value={values.city}
                    placeholder="Please enter your City..."
                    name="city"
                    error={Boolean(touched.city && errors.city)}
                    onBlur={handleBlur}
                    onChange={handleChange}
                  />
                  <FormHelperText error>
                    {touched.city && errors.city}
                  </FormHelperText>
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    type="text"
                    variant="outlined"
                    fullWidth
                    value={values.zipCode}
                    placeholder="Please enter your Zip Code..."
                    name="zipCode"
                    error={Boolean(touched.zipCode && errors.zipCode)}
                    onBlur={handleBlur}
                    onChange={handleChange}
                  />
                  <FormHelperText error>
                    {touched.zipCode && errors.zipCode}
                  </FormHelperText>
                </Grid>

                <Grid item xs={12}>
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    fullWidth
                  >
                    Create Account
                  </Button>
                </Grid>
              </Grid>
            </Form>
          )}
        </Formik>
      </Container>
    </Box>
  );
};

export default SignUp;

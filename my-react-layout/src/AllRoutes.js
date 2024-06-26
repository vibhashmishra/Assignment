import React from "react";
import { lazy } from "react";
import HomeIndex from "./layout/homeLayout/homeIndex";
import { useNavigate } from "react-router-dom";
import LoginIndex from "./layout/loginLayout/LoginIndex";
import Dashboard from "./layout/dashboardLayout";

const Redirect404 = () => {
  const navigate = useNavigate();
  navigate("/404");
  return null;
};

export const AllRoutes = [
  {
    exact: true,
    layout: HomeIndex,
    path: "/",
    component: lazy(() => import("./views/home/index")),
  },
  {
    exact: true,
    layout: LoginIndex,
    path: "/login",
    component: lazy(() => import("./views/auth/Login")),
  },
  {
    exact: true,
    layout: LoginIndex,
    path: "/signup",
    component: lazy(() => import("./views/auth/Signup")),
  },
  {
    exact: true,
    layout: LoginIndex,
    path: "/otp-verify",
    component: lazy(() => import("./views/auth/OtpVerify")),
  },
  {
    exact: true,
    layout: LoginIndex,
    path: "/reset-password",
    component: lazy(() => import("./views/auth/ResetPassword")),
  },
  {
    exact: true,
    layout: LoginIndex,
    path: "/forgot-password",
    component: lazy(() => import("./views/auth/ForgotPassword")),
  },
  {
    exact: true,
    layout: Dashboard,
    path: "/dashboard",
    component: lazy(() => import("./views/auth/Signup")),
  },
  {
    exact: true,
    path: "/404",
    component: lazy(() => import("./views/error/PageNotFound")),
  },
  {
    component: Redirect404,
  },
];

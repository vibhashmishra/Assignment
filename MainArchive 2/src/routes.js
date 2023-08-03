import React, { lazy } from "react";
import { Redirect } from "react-router-dom";
import HomeLayout from "src/layouts/HomeLayout";
import DasboardLayout from "src/layouts/DashboardLayout/DashboardLayout";



export const routes = [
  {
    exact: true,
    path: "/",
    layout: HomeLayout,
    component: lazy(() => import("src/views/pages/Home")),
  },
  {
    exact: true,
    path: "/features",
    layout: HomeLayout,
    component: lazy(() => import("src/views/pages/Home/Features")),
  },
  {
    exact: true,
    path: "/product",
    layout: HomeLayout,
    component: lazy(() => import("src/views/pages/Home/Product")),
  },
  {
    exact: true,
    path: "/contact",
    layout: HomeLayout,
    component: lazy(() => import("src/views/pages/Home/Contact")),
  },
  {
    exact: true,
    path: "/dashboard",
    layout: DasboardLayout,
    component: lazy(() => import("src/views/pages/Dashboard/Dashboard")),
  },
  {
    exact: true,
    path: "/pay2p",
    layout: DasboardLayout,
    component: lazy(() => import("src/views/pages/Pay2p/Pay2p")),
  },
  {
    exact: true,
    path: "/wallet",
    layout: DasboardLayout,
    component: lazy(() => import("src/views/pages/Wallet/Wallet")),
  },
  {
    exact: true,
    path: "/myaccount",
    layout: DasboardLayout,
    component: lazy(() => import("src/views/pages/MyAccount/MyAccount")),
  },
  {
    exact: true,
    path: "/transactionHistory",
    layout: DasboardLayout,
    component: lazy(() => import("src/views/pages/TrasactionHistory/TrasactionHistory")),
  },

  {
    exact: true,
    path: "/LoginPage",
    component: lazy(() => import("src/auth/login/LoginPage")),
  },
  {
    exact: true,
    path: "/forgotPassword",
    component: lazy(() => import("src/auth/forgot/ForgotPassword")),
  },
  {
    exact: true,
    path: "/resetPassword",
    component: lazy(() => import("src/auth/resetPassword/ResetPassword")),
  },



  {
    exact: true,
    path: "/signup",
    component: lazy(() => import("src/auth/signUp/SignUp")),
  },

  {
    exact: true,
    path: "/SecurityVerify",
    component: lazy(() => import("src/auth/otp/SecurityVerify")),
  },
  {
    exact: true,
    path: "/otpVerification",
    component: lazy(() => import("src/auth/otp/OTPVerification")),
  },
  {
    exact: true,
    path: "/404",
    component: lazy(() => import("src/views/errors/NotFound")),
  },
  {
    component: () => <Redirect to="/404" />,
  },
];

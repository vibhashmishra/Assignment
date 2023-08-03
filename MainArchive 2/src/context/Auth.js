import React, { createContext, useState } from "react";
import axios from "axios";
import { BiSolidDownArrowAlt, BiSolidUpArrowAlt } from "react-icons/bi";
import { BsBank2 } from "react-icons/bs";

export const AuthContext = createContext();

const setSession = (accessToken) => {
  if (accessToken) {
    localStorage.setItem("creatturAccessToken", accessToken);
    axios.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
  } else {
    localStorage.removeItem("creatturAccessToken");
    delete axios.defaults.headers.common.Authorization;
  }
};

function checkLogin() {
  const accessToken = window.localStorage.getItem("creatturAccessToken");
  return accessToken ? true : false;
}

export default function AuthProvider(props) {
  const [isLogin, setIsLogin] = useState(checkLogin());
  const [marketUpdateData, setMarketUpdateData] = useState([
    {
      no: 1,
      cryptoImg: "/images/bitcoin.png",
      sName: "BTC",
      lName: "Bitcoin",
      rateValue: "$56,623.54",
      rate: "1.41%",
      graph: "/images/graph1.png",
    },
    {
      no: 2,
      cryptoImg: "/images/ethereum.png",
      sName: "ETH",
      lName: "Ethereum",
      rateValue: "$4,267.90",
      rate: "2.22%",
      graph: "/images/graph1.png",
    },
    {
      no: 3,
      cryptoImg: "/images/binance.png",
      sName: "BNB",
      lName: "Binance",
      rateValue: "$587.74",
      rate: "0.82%",
      graph: "/images/graph1.png",
    },
    {
      no: 4,
      cryptoImg: "/images/usdt.png",
      sName: "USDT",
      lName: "Usdt",
      rateValue: "$56,623.54",
      rate: "1.41%",
      graph: "/images/graph1.png",
    },
    {
      no: 5,
      cryptoImg: "/images/salana.png",
      sName: "SOL",
      lName: "Salana",
      rateValue: "$56,623.54",
      rate: "1.41%",
      graph: "/images/graph2.png",
    },
    {
      no: 6,
      cryptoImg: "/images/xrp.png",
      sName: "XRP",
      lName: "XRP",
      rateValue: "$56,623.54",
      rate: "1.41%",
      graph: "/images/graph2.png",
    },
    {
      no: 7,
      cryptoImg: "/images/usd.png",
      sName: "USDC COIN",
      lName: "USDC",
      rateValue: "$56,623.54",
      rate: "1.41%",
      graph: "/images/graph2.png",
    },
  ]);

  const [paymentData, setPaymentData] = useState([
    {
      logo: <BiSolidUpArrowAlt style={{ color: "#fff" }} />,
      paymentMethod: "Deposit",
      paymentStatus: "Money send",
      totalPayment: -2000,
      paymentDate: "April 23",
    },
    {
      logo: <BiSolidDownArrowAlt style={{ color: "#fff" }} />,
      paymentMethod: "Withdraw",
      paymentStatus: "Money Received",
      totalPayment: +5243,
      paymentDate: "April 23",
    },
    {
      logo: <BsBank2 style={{ color: "#fff" }} />,
      paymentMethod: "Transfer",
      paymentStatus: "Payment",
      totalPayment: -25,
      paymentDate: "April 23",
    },
    {
      logo: (
        <img
          src="/images/admin.png"
          style={{ width: "63px", height: "63px" }}
        />
      ),
      paymentMethod: "Deposit",
      paymentStatus: "Money send",
      totalPayment: -2000,
      paymentDate: "April 23",
    },
    {
      logo: <BiSolidUpArrowAlt style={{ color: "#fff" }} />,
      paymentMethod: "Deposit",
      paymentStatus: "Money send",
      totalPayment: -2000,
      paymentDate: "April 23",
    },
    {
      logo: <BiSolidDownArrowAlt style={{ color: "#fff" }} />,
      paymentMethod: "Deposit",
      paymentStatus: "Money send",
      totalPayment: +5223,
      paymentDate: "April 23",
    },
    {
      logo: <BsBank2 style={{ color: "#fff" }} />,
      paymentMethod: "Deposit",
      paymentStatus: "Money send",
      totalPayment: -25,
      paymentDate: "April 23",
    },
  ])

  let data = {
    userLoggedIn: isLogin,
    marketUpdateData,
    paymentData,
    userLogIn: (type, data) => {
      setSession(data);
      setIsLogin(type);
    },
  };

  return (
    <AuthContext.Provider value={data}>{props.children}</AuthContext.Provider>
  );
}

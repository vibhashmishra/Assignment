import { Box, Typography } from "@material-ui/core";
import React, { useContext } from "react";
import { BiSolidUpArrowAlt } from "react-icons/bi";
import { BiSolidDownArrowAlt } from "react-icons/bi";
import { BsBank2 } from "react-icons/bs";

import { makeStyles } from "@material-ui/core";
import { AuthContext } from "src/context/Auth";


const useStyles = makeStyles((theme) => ({
  paymentHistorySec: {
    margin: "20px 0",
    // maxHeight: "450px",
    overflowY: "scroll",
  },

  depositLogo: {
    border: "1px solid",
    background: "#262626",
    height: "40px",
    width: "40px",
    borderRadius: "50%",
    padding: "6px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  paymentCheck: {
    width: "22vw",
    display: "flex",
    justifyContent: "space-between",
  },
}));

const PaymentSection = () => {
  const classes = useStyles();
  const auth=useContext(AuthContext)
  const {paymentData}=auth

  return (
    <Box>
      <Box p={7}>
        <Box mb={5}>
          <Typography variant="h2">$ 267,820.00</Typography>
          <Typography variant="body2">Your available balance</Typography>
        </Box>
        <Box className="displaySpacebetween">
          <Box className="displayCenterColumn">
            <img src="/images/deposit.png" />
            <Typography>Deposit</Typography>
          </Box>

          <Box className="displayCenterColumn">
            <img src="/images/withdraw.png" />
            <Typography>Withdraw</Typography>
          </Box>
          <Box className="displayCenterColumn">
            <img src="/images/transfer.png" />
            <Typography>Transfer</Typography>
          </Box>
        </Box>
      </Box>

      <Box className="displaySpacebetween">
        <Box>
          <Typography variant="h3">See Activity</Typography>
        </Box>
        <Box>
          <Typography variant="body1">Views all</Typography>
        </Box>
      </Box>
      
      {paymentData &&
        paymentData?.map((data, i) => {
          return (
              <Box
                className={`${classes.paymentHistorySec} displaySpacebetween`}
              >
                <Box className={classes.depositLogo}>{data.logo}</Box>
                <Box className={classes.paymentCheck}>
                  <Box>
                    <Typography>{data.paymentMethod}</Typography>
                    <Box>
                      <Typography>{data.paymentStatus}</Typography>
                    </Box>
                  </Box>
                  <Box>
                    <Typography>{data.totalPayment}</Typography>
                    <Box>
                      <Typography>{data.paymentDate}</Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>
            
          );
        })}
      </Box>

  );
};

export default PaymentSection;

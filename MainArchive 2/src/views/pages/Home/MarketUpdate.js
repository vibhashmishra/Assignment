import React, { useContext } from "react";
import {
  Box,
  Container,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  makeStyles,
} from "@material-ui/core";
import { AuthContext } from "src/context/Auth";

const useStyles = makeStyles(() => ({
  tableBox: {
    // padding: "100px 0px 50px",
  },
  bitcoinBox: {
    display: "flex",
    justifyContent: "start",
    alignItems: "center",
    gap: "10px",
  },
  tableContainer: {
    maxHeight: "400px",
    overflowY: "scroll",
  },
}));

const MarketUpdate = ({ type }) => {
  const classes = useStyles();
const auth=useContext(AuthContext)
const {marketUpdateData}=auth;

  return (
    <Box className={classes.tableBox}>
      <Container>
        <Box>
          <Typography variant="h2">Market Update</Typography>
          <TableContainer className={classes.tableContainer}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>NO</TableCell>
                  <TableCell>NAME</TableCell>
                  <TableCell>LAST NAME</TableCell>
                  <TableCell>CHANGE</TableCell>
                  <TableCell>MARKET STATS</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {marketUpdateData.map((data, i) => (
                  <TableRow key={i} style={{ maxHeight: "100px" }}>
                    <TableCell>{data.no}</TableCell>
                    <TableCell>
                      <Box className={classes.bitcoinBox}>
                        <img src={data.cryptoImg} alt="Crypto" />
                        {data.sName}
                        {data.lName}
                      </Box>
                    </TableCell>
                    <TableCell>{data.rateValue}</TableCell>
                    <TableCell>{data.rate}</TableCell>
                    <TableCell>
                      <img src={data.graph} alt="Graph" />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Container>
    </Box>
  );
};

export default MarketUpdate;


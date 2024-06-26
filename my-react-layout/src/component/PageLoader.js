import { Box } from "@mui/material";
import React from "react";


export default function PageLoading() {

  return (
    <div>
      <Box width={300} align="center">
        {/* <LinearProgress height={10} /> */}
        <img src="/images/logo.svg" alt="loader" />
      </Box>
    </div>
  );
}

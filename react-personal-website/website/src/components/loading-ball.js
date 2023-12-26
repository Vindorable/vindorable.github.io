import React from "react";
import { Box } from "@mui/material";

import "./loading-ball.css";


// ---------------------------------------------------------

const LoadingBall = () => {
  return (
    <>
      <Box m={1} sx={{ width: "20px", height: "20px" }}>
        <div className="loading"></div>
      </Box>
    </>
  );
}


// ---------------------------------------------------------

export default LoadingBall;
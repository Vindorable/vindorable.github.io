import React from "react";
import { Stack, Typography } from "@mui/material";

import LoadingBall from "./loading-ball";


// ---------------------------------------------------------

const LoadingScreen = () => {
  return (
    <>
      <Stack
        direction={"row"}
        spacing={1}
        alignItems={"center"}
        justifyContent={"center"}
        sx={{
          width: "100vw",
          maxWidth: "100%",
          height: "100vh",
          maxHeight: "100%",
        }}
      >
        <LoadingBall />
        <Typography variant="subtitle2">Loading...</Typography>
      </Stack>
    </>
  );
}


// ---------------------------------------------------------

export default LoadingScreen;
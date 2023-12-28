import React from "react";
import { Divider } from "@mui/material";


// ---------------------------------------------------------

const Spacer = ({ amount }) => {
  return (
    <>
      <Divider sx={{ visibility: "hidden", borderBottomWidth: amount }} />
    </>
  );
}


// ---------------------------------------------------------

export default Spacer;
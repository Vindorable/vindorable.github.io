import React from "react";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";


// ---------------------------------------------------------

const IsMobile = () => {
  const theme = useTheme();
  return useMediaQuery(theme.breakpoints.down("md"));;
}


// ---------------------------------------------------------

export { IsMobile };
import React from "react";
import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";


// ---------------------------------------------------------

const Footer = () => {
  const theme = useTheme();

  return (
    <>
      <Box
        sx={{
          backgroundColor: theme.palette.background.default,
          boxShadow: `0px 0px 2px ${theme.palette.dividerCustom.strong}`,
          height: 40,
          minHeight: 40,
          width: "100vw",
          maxWidth: "100%", // This is very Important else there will be the 100vw scrollbar issue.
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        zIndex={"100"}
      >
        <Typography variant="caption">
          Scientifically Conjured by Me © {new Date().getFullYear()}
        </Typography>
      </Box>
    </>
  );
}


// ---------------------------------------------------------

export default Footer;
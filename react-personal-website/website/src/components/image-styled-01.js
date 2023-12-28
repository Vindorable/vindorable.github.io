import React from "react";
import { Box, Stack } from "@mui/material";


// ---------------------------------------------------------

const StyledImage01 = ({ imageLink, imageAlt, emptyHiddenSpace }) => {
  return (
    <>
      <Stack py={2} px={1}>
        <Box
          component="img"
          sx={{
            width: "100%",
            height: "auto",

            WebkitFilter: `brightness(50%) grayscale(100%)`,
            filter: `brightness(50%) grayscale(100%)`,

            transition: `.3s ease-in-out`,
            transition: `transform 0.4s`,
            transform: `translateY(0px)`,

            "&:hover": {
              WebkitFilter: `brightness(100%) grayscale(0%)`,
              filter: `brightness(100%) grayscale(0%)`,

              transform: `translateY(16px)`,
            },

            visibility: emptyHiddenSpace ? "hidden" : "",
          }}
          alt={imageAlt}
          src={imageLink}
          style={{ borderRadius: "8px" }}
        />
      </Stack>
    </>
  );
}


// ---------------------------------------------------------

export default StyledImage01;
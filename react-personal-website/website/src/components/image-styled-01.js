import React from "react";
import { Box, Stack } from "@mui/material";

import { useNavigate } from "react-router-dom";


// ---------------------------------------------------------

const StyledImage01 = ({ imageLink, imageAlt, emptyHiddenSpace, url, isURLExternal }) => {
  const navigate = useNavigate();

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
          onClick={() =>
            isURLExternal ?
              window.open(url, "_blank")
              :
              navigate(url)
          }
        />
      </Stack>
    </>
  );
}


// ---------------------------------------------------------

export default StyledImage01;
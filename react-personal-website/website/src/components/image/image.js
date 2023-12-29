import React from "react";
import { Box, Stack, } from "@mui/material";
import { useTheme } from "@mui/material/styles";

import { useNavigate } from "react-router-dom";


// ---------------------------------------------------------

const Image = ({ src, alt, url, lightbox }) => {
  const theme = useTheme();
  const navigate = useNavigate();

  // https://stackoverflow.com/a/28054735
  function checkDomain(url) {
    if (url.indexOf('//') === 0) { url = window.location.protocol + url; }
    return url.toLowerCase().replace(/([a-z])?:\/\//, '$1').split('/')[0];
  };
  function isExternalURL(url) {
    return ((url.indexOf(':') > -1 || url.indexOf('//') > -1) && checkDomain(window.location.href) !== checkDomain(url));
  };

  function handleClick() {
    if (url) return isExternalURL(url) ? window.open(url, "_blank") : navigate(url);
    if (lightbox) return undefined;
  };

  return (
    <>
      <Stack>
        <Box
          component="img"
          sx={{
            width: "100%",
            height: "auto",
            cursor: (url || lightbox) ? "pointer" : "default",
          }}
          alt={alt}
          src={src}
          style={{ borderRadius: "8px" }}
          onClick={handleClick}
        />
      </Stack>
    </>
  );
}


// ---------------------------------------------------------

export default Image;
import React, { useRef } from "react";
import { Box, Stack, } from "@mui/material";
import { useTheme } from "@mui/material/styles";

import { useNavigate } from "react-router-dom";

import Lightbox from "./lightbox";


// ---------------------------------------------------------

const Image = ({ src, alt, url, lightbox, height, maxWidth }) => {
  const theme = useTheme();
  const navigate = useNavigate();

  const lightboxRef = useRef(null);
  // Lightbox takes in an image set as prop.
  const imageList = [
    {
      img: src,
      title: alt,
    },
  ]

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
    if (lightbox) return lightboxRef.current.openLightbox(imageList[0]);
  };

  return (
    <>
      <Stack alignItems={"center"} justifyContent={"center"} sx={{ width: "100%" }}>
        <Stack>
          <Box
            component="img"
            sx={{
              width: "100%",
              maxWidth: maxWidth,
              height: height ? height : "auto",
              cursor: (url || lightbox) ? "pointer" : "default",
              transition: theme.transitions.create("all", {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen
              }),
              "&:hover": (url || lightbox) ? { transform: "scale3d(1.05, 1.05, 1)" } : undefined,
              "&:active": (url || lightbox) ? { transform: "scale3d(0.95, 0.95, 1)" } : undefined,
              objectFit: "contain"
            }}
            alt={alt}
            src={src}
            style={{ objectFit: "contain", borderRadius: "8px" }}
            onClick={handleClick}
          />
        </Stack>
      </Stack>

      <Lightbox ref={lightboxRef} imageSet={imageList} />
    </>
  );
}


// ---------------------------------------------------------

export default Image;
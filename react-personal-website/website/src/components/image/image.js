import React, { useRef } from "react";
import { Box, Stack, } from "@mui/material";
import { useTheme } from "@mui/material/styles";

import { useNavigate } from "react-router-dom";

import Lightbox from "./lightbox";


// ---------------------------------------------------------

const Image = ({ src, alt, url, lightbox, height }) => {
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
      <Stack>
        <Box
          component="img"
          sx={{
            width: "100%",
            height: height ? height : "auto",
            cursor: (url || lightbox) ? "pointer" : "default",
            objectFit: "contain"
          }}
          alt={alt}
          src={src}
          style={{ objectFit: "contain", borderRadius: "8px" }}
          onClick={handleClick}
        />
      </Stack>

      <Lightbox ref={lightboxRef} imageSet={imageList} />
    </>
  );
}


// ---------------------------------------------------------

export default Image;
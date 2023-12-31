import React, { useRef } from "react";
import { ImageList, ImageListItem, Stack } from "@mui/material";
import { styled, useTheme } from "@mui/material/styles";

import Lightbox from "./image/lightbox";


// ---------------------------------------------------------

// https://stackoverflow.com/a/70613180
const ImageListGallery = styled('ul')(({ theme, cols }) => ({
  display: 'grid',
  padding: 0,
  margin: 0,
  width: "auto",
  height: "auto",
  rowHeight: "auto",
  gap: 12,
  [theme.breakpoints.up('xs')]: {
    gridTemplateColumns: cols < 3 ? `repeat(${cols}, 1fr)` : 'repeat(3, 1fr)'
    //gridTemplateColumns: 'repeat(3, 1fr)'
  },
  [theme.breakpoints.up('sm')]: {
    gridTemplateColumns: cols < 4 ? `repeat(${cols}, 1fr)` : 'repeat(4, 1fr)'
    //gridTemplateColumns: 'repeat(4, 1fr)'
  },
  [theme.breakpoints.up('md')]: {
    gridTemplateColumns: cols < 5 ? `repeat(${cols}, 1fr)` : 'repeat(5, 1fr)'
    //gridTemplateColumns: 'repeat(5, 1fr)'
  },
  [theme.breakpoints.up('lg')]: {
    gridTemplateColumns: cols < 5 ? `repeat(${cols}, 1fr)` : 'repeat(5, 1fr)'
    //gridTemplateColumns: 'repeat(5, 1fr)'
  },
}));


// ---------------------------------------------------------

const ImageGallery = ({ imageSet, width, height, columns, aspectRatio, objectFit }) => {
  const theme = useTheme();

  const _width = width;
  const _height = height;

  const lightboxRef = useRef(null);

  return (
    <>
      <Stack alignItems={"center"} justifyContent={"center"} sx={{ width: "100%" }}>
        <ImageListGallery cols={columns}>
          {imageSet.map((item) => (
            <ImageListItem
              key={item.img}
              sx={{
                aspectRatio: aspectRatio ? aspectRatio : 1 / 1,
                transition: theme.transitions.create("all", {
                  easing: theme.transitions.easing.sharp,
                  duration: theme.transitions.duration.leavingScreen
                }),
                "&:hover": { transform: "scale3d(1.05, 1.05, 1)" },
                "&:active": { transform: "scale3d(0.95, 0.95, 1)" },
                cursor: "pointer",
              }}
            >
              <img
                srcSet={`${item.img}`}
                src={`${item.img}`}
                alt={item.title}
                style={{
                  width: _width,
                  height: _height,
                  maxWidth: "100%",
                  maxHeight: "100%",
                  borderRadius: "8px",
                  objectFit: objectFit ? objectFit : "cover"
                }}
                loading="lazy"
                onClick={(e) => lightboxRef.current.openLightbox(item)}
              />
            </ImageListItem>
          ))}
        </ImageListGallery>
      </Stack>

      <Lightbox ref={lightboxRef} imageSet={imageSet} />
    </>
  );
}


// ---------------------------------------------------------

export default ImageGallery;
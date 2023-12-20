import React from "react";
import { ImageList, ImageListItem } from "@mui/material";
import { styled } from '@mui/material/styles';


// ---------------------------------------------------------

// https://stackoverflow.com/a/70613180
const ImageListGallery = styled('ul')(({ theme }) => ({
  display: 'grid',
  padding: 0,
  margin: 0,
  width: "auto",
  height: "auto",
  rowHeight: "auto",
  gap: 8,
  [theme.breakpoints.up('xs')]: {
    gridTemplateColumns: 'repeat(3, 1fr)'
  },
  [theme.breakpoints.up('sm')]: {
    gridTemplateColumns: 'repeat(4, 1fr)'
  },
  [theme.breakpoints.up('md')]: {
    gridTemplateColumns: 'repeat(5, 1fr)'
  },
  [theme.breakpoints.up('lg')]: {
    gridTemplateColumns: 'repeat(5, 1fr)'
  },
}));


// ---------------------------------------------------------

const ImageGallery = ({ imageSet, width, height }) => {
  const _width = width;
  const _height = height;

  return (
    <>
      <ImageListGallery>
        {imageSet.map((item) => (
          <ImageListItem
            key={item.img}
            sx={{ aspectRatio: 1 / 1 }}
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
              }}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageListGallery>
    </>
  );
}


// ---------------------------------------------------------

export default ImageGallery;
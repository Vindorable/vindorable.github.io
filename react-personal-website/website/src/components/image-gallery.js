import React from "react";
import { ImageList, ImageListItem } from "@mui/material";


// ---------------------------------------------------------

const ImageGallery = ({ imageSet, columns, width, height, padding }) => {
  const _columns = columns;
  const _width = width;
  const _height = height;
  const _padding = padding;

  return (
    <>
      <ImageList
        sx={{
          width: "auto",
          height: "auto",
        }}
        cols={_columns}
        rowHeight={"auto"}
        gap={_padding}
      >
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
      </ImageList>
    </>
  );
}


// ---------------------------------------------------------

export default ImageGallery;
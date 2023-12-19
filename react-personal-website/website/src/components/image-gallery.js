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
          width: (_width * _columns) + ((_columns - 1) * _padding),
          height: (_height * Math.ceil(imageSet.length / _columns)) + ((Math.ceil(imageSet.length / _columns) - 1) * _padding),
        }}
        cols={_columns}
        rowHeight={_height}
        gap={_padding}
      >
        {imageSet.map((item) => (
          <ImageListItem key={item.img}>
            <img
              srcSet={`${item.img}`}
              src={`${item.img}`}
              alt={item.title}
              style={{
                width: _width,
                height: _height,
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
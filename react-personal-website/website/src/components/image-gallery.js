import React from "react";
import { Backdrop, Box, Button, Fade, ImageList, ImageListItem, Modal, Stack } from "@mui/material";
import { styled, useTheme } from "@mui/material/styles";


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

const ImageGallery = ({ imageSet, width, height, columns }) => {
  const theme = useTheme();

  const _width = width;
  const _height = height;

  // Modal.
  const [imageItem, setImageItem] = React.useState("false");
  const [image, setImage] = React.useState("false");
  const [open, setOpen] = React.useState(false);
  const handleOpen = (value) => {
    setImageItem(value);
    setImage(value.img);
    setOpen(true);
  }
  const handleClose = () => setOpen(false);

  const modalNext = () => {
    let currentIndex = imageSet.indexOf(imageItem);
    if (currentIndex >= imageSet.length - 1) {
      setOpen(false);
    } else {
      let nextImageItem = imageSet[currentIndex + 1];
      setImageItem(nextImageItem);
      setImage(nextImageItem.img);
    }
  };

  const modalBack = () => {
    let currentIndex = imageSet.indexOf(imageItem);
    if (currentIndex <= 0) {
      setOpen(false);
    } else {
      let nextImageItem = imageSet[currentIndex - 1];
      setImageItem(nextImageItem);
      setImage(nextImageItem.img);
    }
  };

  return (
    <>
      <ImageListGallery cols={columns}>
        {imageSet.map((item) => (
          <ImageListItem
            key={item.img}
            sx={{
              aspectRatio: 1 / 1,
              transition: theme.transitions.create("all", {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen
              }),
              "&:hover": { transform: "scale3d(1.05, 1.05, 1)" },
              "&:active": { transform: "scale3d(0.95, 0.95, 1)" }
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
              }}
              loading="lazy"
              onClick={(e) => handleOpen(item)}
            />
          </ImageListItem>
        ))}
      </ImageListGallery>

      <Modal
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box
            sx={{
              width: "100vw",
              height: "100vh",
              backgroundColor: "#000",
            }}
          >
            <Box
              component="img"
              sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: image.width,
                height: "auto",
                maxWidth: "100%",
                maxHeight: "90%",
                bgcolor: "background.paper",
                border: "1px solid #fff",
                boxShadow: 24,
                outline: "none",
                objectFit: "contain"
              }}
              alt=""
              src={image}
              style={{ objectFit: "contain", borderRadius: "8px" }}
            />

            <Stack direction={"row"} alignItems={"center"} justifyContent={"space-between"}>
              <Button onClick={() => modalBack()}>
                Back
              </Button>
              <Button onClick={() => modalNext()}>
                Next
              </Button>
            </Stack>
          </Box>
        </Fade>
      </Modal>
    </>
  );
}


// ---------------------------------------------------------

export default ImageGallery;
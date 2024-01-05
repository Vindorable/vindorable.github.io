import React, { forwardRef, useImperativeHandle } from "react";
import { Backdrop, Box, Fade, IconButton, Modal, Stack } from "@mui/material";
import { CaretCircleLeft, CaretCircleRight, XCircle } from "phosphor-react";


// ---------------------------------------------------------

const Lightbox = forwardRef(({ imageSet }, ref) => {
  useImperativeHandle(ref, () => ({
    openLightbox(focusedImageItem) {
      handleOpen(focusedImageItem);
    },
  }));

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
              height: "100dvh",
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

            <Stack sx={{ width: "100vw", height: "100dvh" }}>
              <Stack
                sx={{ width: "100%", height: "100%" }}
                p={1}
                justifyContent={"center"}
              >
                <Stack
                  direction={"row"}
                  alignItems={"center"}
                  justifyContent={"space-between"}
                >
                  <IconButton onClick={() => modalBack()}>
                    <CaretCircleLeft size={32} />
                  </IconButton>
                  <IconButton onClick={() => modalNext()}>
                    <CaretCircleRight size={32} />
                  </IconButton>
                </Stack>
              </Stack>

              <Stack
                direction={"row"}
                sx={{ width: "100%" }}
                position={"absolute"}
                p={1}
                alignItems={"center"}
                justifyContent={"end"}
              >
                <IconButton onClick={() => setOpen(false)}>
                  <XCircle size={32} />
                </IconButton>
              </Stack>
            </Stack>
          </Box>
        </Fade>
      </Modal>
    </>
  );
});


// ---------------------------------------------------------

export default Lightbox;
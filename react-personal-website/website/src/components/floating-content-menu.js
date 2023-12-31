import React, { forwardRef, useImperativeHandle } from "react";
import { Divider, IconButton, Menu, MenuItem, Stack, Typography } from "@mui/material";
import { ListBullets } from "phosphor-react";


// ---------------------------------------------------------

const FloatingContentMenu = forwardRef(({ children }, ref) => {
  useImperativeHandle(ref, () => ({
    goto(elementID) {
      scrollTo(elementID);
    },
  }));

  // Page content - using Mui Menu component.
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  // Using Mui Menu to scroll to content.
  const scrollTo = (elementID) => {
    document.getElementById(elementID).scrollIntoView({ block: 'start', behavior: 'smooth' });
    handleClose();
  };

  return (
    <>
      <Stack
        sx={{
          position: "absolute",
          top: "0px",
          left: "0px",
        }}
      >
        <Stack
          sx={{
            position: "fixed",
            transform: "translateX(-50%)",
          }}
        >
          <IconButton
            id="basic-button"
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
          >
            <ListBullets />
          </IconButton>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              'aria-labelledby': 'basic-button',
              dense: true,
              sx: {
                paddingTop: "0px",
                width: "200px",
              }
            }}
          >
            <MenuItem disabled>
              <Stack
                direction={"row"}
                alignItems={"center"}
                justifyContent={"start"}
                spacing={0.75}
              >
                <ListBullets />
                <Typography variant="body2">Contents:</Typography>
              </Stack>
            </MenuItem>

            <Divider sx={{ marginTop: "0px !important" }} />

            <Stack px={2}>

              {children}

            </Stack>
          </Menu>
        </Stack>
      </Stack>
    </>
  );
});


// ---------------------------------------------------------

export default FloatingContentMenu;
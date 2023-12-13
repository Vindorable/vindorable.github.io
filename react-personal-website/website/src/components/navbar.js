import React from "react";
import { Box, IconButton, Stack, Tab, Tabs } from "@mui/material";
import { InstagramLogo, LinkedinLogo } from "phosphor-react";

import { NavTab, NavTabs } from "./nav-tab";


// ---------------------------------------------------------

const Navbar = () => {
  // Tabs.
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Box
        p={2} // 2 * 8 (mui internal value) = 16px
        sx={{
          backgroundColor: "#F8FAFF",
          boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)",
          //height: 100,
          width: "100vw",
        }}
      >
        <Stack
          sx={{ height: "100%" }}
          direction={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          {/* Navigation Tabs */}
          {/* --------------- */}
          <Stack>
            <NavTabs value={value} onChange={handleChange}>
              <NavTab label="Media" />
              <NavTab label="Links" />
              <NavTab label="Docs" />
            </NavTabs>
            {/* IIFE (Immediately Invoked Function Expressions) */}
            {(() => {
              switch (value) {
                case 0:
                  // Media.
                  break;
                case 1:
                  // Link.
                  break;
                case 2:
                  // Docs.
                  break;
              }
            })()}
          </Stack>


          {/* Navigation Buttons */}
          {/* ------------------ */}
          <Stack direction={"row"}>
            <IconButton target="_blank" href="http://www.google.com/">
              <LinkedinLogo size={32} />
            </IconButton>
            <IconButton>
              <InstagramLogo size={32} />
            </IconButton>
          </Stack>
        </Stack>
      </Box>
    </>
  );
}


// ---------------------------------------------------------

export default Navbar;
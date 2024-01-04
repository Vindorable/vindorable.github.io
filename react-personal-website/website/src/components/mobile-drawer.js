import React, { useState } from "react";
import { Box, Drawer, IconButton, Stack } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { LinkedinLogo, List, X } from "phosphor-react";

import { NavTabV, NavTabsV } from "../components/nav-tab";

// Routes.
import { Link } from "react-router-dom";
import { PATH_WEBPAGE } from "../routes/paths";


// ---------------------------------------------------------

const MobileDrawer = () => {
  const theme = useTheme();

  const [openDrawer, setOpenDrawer] = useState(false);

  // Tabs.
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    //setValue(newValue);
    setOpenDrawer(false)
  };

  const items = [
    {
      pathName: PATH_WEBPAGE.general.experience,
      label: "Experience",
    },
    {
      pathName: PATH_WEBPAGE.general.playground,
      label: "Playground",
    },
    {
      pathName: PATH_WEBPAGE.general.contact,
      label: "Contact",
    },
  ];

  return (
    <>
      <Drawer
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        anchor="right"
        PaperProps={{
          sx: {
            width: "100%",
            height: "100%",
            backgroundColor: theme.palette.background.default,
            backgroundImage: "linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0))"
          }
        }}
      >
        {/* Close Button */}
        {/* ------------ */}
        <Box
          p={2}
          sx={{
            backgroundColor: theme.palette.background.default,
            boxShadow: `0px 0px 2px ${theme.palette.dividerCustom.strong}`,
            height: 60,
          }}
        >
          <Stack
            sx={{ width: "100%", height: "100%" }}
            direction={"row"}
            alignItems={"center"}
            justifyContent={"end"}
          >
            <IconButton
              onClick={() => setOpenDrawer(!openDrawer)}
              sx={{
                color: theme.palette.text.disabled,
                "&:hover": {
                  color: theme.palette.text.primary,
                }
              }}
            >
              <X size={32} />
            </IconButton>
          </Stack>
        </Box>


        {/* Navigation Tabs */}
        {/* --------------- */}
        <Stack p={2} justifyContent={"space-between"} sx={{ height: "100%" }}>
          <Stack>
            <NavTabsV
              value={value}
              onChange={handleChange}
              orientation="vertical"
            >
              {items.map((item, index) => (
                <NavTabV
                  key={index}
                  component={Link}
                  label={item.label}
                  to={item.pathName}
                  value={item.pathName}
                />
              ))}
            </NavTabsV>
          </Stack>

          <Stack alignItems={"center"} justifyContent={"center"}>
            <Box>
              <IconButton
                onClick={() => window.open("https://www.linkedin.com/in/jay-raj-97508742/", "_blank")}
                sx={{
                  color: theme.palette.text.disabled,
                  "&:hover": {
                    color: theme.palette.text.primary,
                  }
                }}
              >
                <LinkedinLogo size={32} />
              </IconButton>
            </Box>
          </Stack>
        </Stack>
      </Drawer>


      <IconButton
        onClick={() => setOpenDrawer(!openDrawer)}
        sx={{
          color: theme.palette.text.disabled,
          "&:hover": {
            color: theme.palette.text.primary,
          }
        }}
      >
        <List size={32} />
      </IconButton>
    </>
  );
}


// ---------------------------------------------------------

export default MobileDrawer;
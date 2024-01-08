import React from "react";
import { Box, Icon, IconButton, Stack, Tooltip, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { LinkedinLogo, UserCircle } from "phosphor-react";
import { GithubLogo } from "@phosphor-icons/react";

import { NavTab, NavTabs } from "./nav-tab";
import MobileDrawer from "./mobile-drawer";

import MyName from "../assets/images/homepage/jay-name.png"

// Routes.
import { Link, useLocation } from "react-router-dom";
import { PATH_WEBPAGE } from "../routes/paths";


// ---------------------------------------------------------

const Navbar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  // Tabs.
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // https://stackoverflow.com/a/76166816
  // https://stackoverflow.com/a/70151723
  const { pathname } = useLocation();
  const [[, currentRoot]] = pathname.matchAll(/^(\/[^/]*)/g);

  return (
    <>
      <Box
        p={2} // 2 * 8 (mui internal value) = 16px
        sx={{
          backgroundColor: theme.palette.background.default,
          boxShadow: `0px 0px 2px ${theme.palette.dividerCustom.strong}`,
          height: 60,
          width: "100vw",
          maxWidth: "100%", // This is very Important else there will be the 100vw scrollbar issue.
        }}
        zIndex={"100"}
      >
        <Stack
          sx={{ height: "100%" }}
          direction={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          {/* Homepage w Name */}
          {/* --------------- */}
          <Link to={PATH_WEBPAGE.general.home}
            style={{
              color: "inherit",
              textDecoration: "inherit",
            }}
          >
            <Tooltip
              title="HOME"
              arrow
              componentsProps={{
                tooltip: {
                  sx: {
                    bgcolor: theme.palette.background.defaultInverse,
                    color: theme.palette.background.default,
                  }
                },
                arrow: {
                  sx: {
                    color: theme.palette.background.defaultInverse,
                  }
                }
              }}
            >
              <Stack
                direction={"row"}
                spacing={1}
                sx={{ height: "100%" }}
                alignItems={"center"}
              >
                <Icon sx={{ width: 42, height: 42, }}>
                  {/* <UserCircle size={32} /> */}
                  <img src={MyName} style={{ objectFit: "contain", height: "100%" }} />
                </Icon>
                <Typography variant="h5" fontWeight={"600"}>
                  JAY RAJ
                </Typography>
              </Stack>
            </Tooltip>
          </Link>


          {/* Navigation Tabs */}
          {/* --------------- */}
          <Stack direction={"row"} spacing={2} alignItems={"center"} justifyContent={"center"}>
            {isMobile ? (
              <MobileDrawer />
            ) : (
              <>
                <NavTabs value={currentRoot} onChange={handleChange}>
                  <NavTab label="Experience" component={Link} to={PATH_WEBPAGE.general.experience} value={PATH_WEBPAGE.general.experience} />
                  {/* <NavTab label="Work" component={Link} to={PATH_WEBPAGE.general.work} /> */}
                  <NavTab label="Playground" component={Link} to={PATH_WEBPAGE.general.playground} value={PATH_WEBPAGE.general.playground} />
                  <NavTab label="Contact" component={Link} to={PATH_WEBPAGE.general.contact} value={PATH_WEBPAGE.general.contact} />
                </NavTabs>
                {/* IIFE (Immediately Invoked Function Expressions) */}
                {/* {(() => {
              switch (value) {
                case 0:
                  // Experience.
                  break;
                case 1:
                  // Work.
                  break;
                case 2:
                  // Playground.
                  break;
                case 3:
                  // Contact.
                  break;
              }
            })()} */}

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

                <IconButton
                  onClick={() => window.open("https://github.com/Vindorable", "_blank")}
                  sx={{
                    color: theme.palette.text.disabled,
                    "&:hover": {
                      color: theme.palette.text.primary,
                    }
                  }}
                >
                  <GithubLogo size={32} />
                </IconButton>
              </>
            )}
          </Stack>
        </Stack>
      </Box>
    </>
  );
}


// ---------------------------------------------------------

export default Navbar;
import React from "react";
import { Box, Icon, IconButton, Stack, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { LinkedinLogo, UserCircle } from "phosphor-react";

import { NavTab, NavTabs } from "./nav-tab";

// Routes.
import { Link, useLocation } from "react-router-dom";
import { PATH_WEBPAGE } from "../routes/paths";


// ---------------------------------------------------------

const Navbar = () => {
  const theme = useTheme();

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
            <Stack
              direction={"row"}
              spacing={2}
              sx={{ height: "100%" }}
              alignItems={"center"}
            >
              <Icon sx={{ width: 32, height: 32, }}>
                <UserCircle size={32} />
              </Icon>
              <Typography variant="h5">
                JAY RAJ
              </Typography>
            </Stack>
          </Link>


          {/* Navigation Tabs */}
          {/* --------------- */}
          <Stack direction={"row"} spacing={2} alignItems={"center"} justifyContent={"center"}>
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
            >
              <LinkedinLogo size={32} />
            </IconButton>
          </Stack>
        </Stack>
      </Box>
    </>
  );
}


// ---------------------------------------------------------

export default Navbar;
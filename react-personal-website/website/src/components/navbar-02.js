import React from "react";
import { Box, Icon, Stack, Typography } from "@mui/material";
import { UserCircle } from "phosphor-react";

import { NavTab, NavTabs } from "./nav-tab";

// Routes.
import { Link } from "react-router-dom";
import { PATH_WEBPAGE } from "../routes/paths";


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
          <Stack>
            <NavTabs value={value} onChange={handleChange}>
              <NavTab label="Experience" component={Link} to={PATH_WEBPAGE.general.experience} />
              <NavTab label="Work" component={Link} to={PATH_WEBPAGE.general.work} />
              <NavTab label="Playground" component={Link} to={PATH_WEBPAGE.general.playground} />
              <NavTab label="Contact" component={Link} to={PATH_WEBPAGE.general.contact} />
            </NavTabs>
            {/* IIFE (Immediately Invoked Function Expressions) */}
            {(() => {
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
            })()}
          </Stack>
        </Stack>
      </Box>
    </>
  );
}


// ---------------------------------------------------------

export default Navbar;
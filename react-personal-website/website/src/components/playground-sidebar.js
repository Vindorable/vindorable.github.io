import React from "react";
import { Box, Stack } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { NumberCircleFive, NumberCircleFour, NumberCircleOne, NumberCircleThree, NumberCircleTwo } from "phosphor-react";

import { NavTabV, NavTabsV } from "../components/nav-tab";

// Routes.
import { Link } from "react-router-dom";
import { PATH_WEBPAGE } from "../routes/paths";


// ---------------------------------------------------------

const PlaygroundSidebar = () => {
  const theme = useTheme();

  // Tabs.
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const [isMouseOver, setIsMouseOver] = React.useState(false);
  const [labelVisibility, setLabelVisibility] = React.useState(false);

  const items = [
    {
      pathName: PATH_WEBPAGE.playgroundSubpage.pokemon,
      openInNewTab: false,
      label: "Pokemon (Fan-Made)",
      icon: <NumberCircleOne size={26} />,
    },
    {
      pathName: "/test",
      openInNewTab: false,
      label: "Mobile Games",
      icon: <NumberCircleTwo size={26} />,
    },
    {
      pathName: "/test",
      openInNewTab: false,
      label: "7 Second Vines",
      icon: <NumberCircleThree size={26} />,
    },
    {
      pathName: "http://www.google.com/",
      openInNewTab: true,
      label: "Clothing (Unruly Gent)",
      icon: <NumberCircleFour size={26} />,
    },
    {
      pathName: "/test",
      openInNewTab: false,
      label: "Don't Stave Together Mods",
      icon: <NumberCircleFive size={26} />,
    },
  ];

  return (
    <>
      <Box height={"calc(100vh - 60px)"}>
        <Stack height={"100%"} justifyContent={"space-evenly"} >
          <Box
            py={1.5}
            px={1}
            borderRadius={8}
            sx={{
              backgroundColor: "#F8FAFF",
              boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)",
              //height: 100,
              width: isMouseOver ? "300px" : "72px",
              transition: theme.transitions.create("all", {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen
              })
            }}
            onTransitionEnd={() => { isMouseOver && setLabelVisibility(true) }}
            onMouseEnter={() => setIsMouseOver(true)}
            onMouseLeave={() => { setIsMouseOver(false); setLabelVisibility(false) }}
          >
            {/* Navigation Tabs */}
            {/* --------------- */}
            <Stack>
              <NavTabsV
                value={value}
                onChange={handleChange}
                orientation="vertical"
              >
                {items.map((item, index) => (
                  <NavTabV
                    key={index}
                    icon={item.icon}
                    iconPosition="start"
                    label={labelVisibility && item.label}
                    onClick={() => window.open(item.pathName, (item.openInNewTab ? "_blank" : "_self"))}
                  />
                ))}
              </NavTabsV>
            </Stack>
          </Box>
        </Stack>
      </Box>
    </>
  );
}


// ---------------------------------------------------------

export default PlaygroundSidebar;
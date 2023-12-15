import React from "react";
import { Box, Stack } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { NumberCircleFour, NumberCircleOne, NumberCircleThree, NumberCircleTwo } from "phosphor-react";

import { NavTabV, NavTabsV } from "../components/nav-tab";

// Routes.
import { Link } from "react-router-dom";
import { PATH_WEBPAGE } from "../routes/paths";


// ---------------------------------------------------------

const Playground = () => {
  const theme = useTheme();

  // Tabs.
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const [isMouseOver, setIsMouseOver] = React.useState(false);
  const [labelVisibility, setLabelVisibility] = React.useState(false);

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
              width: isMouseOver ? "200px" : "72px",
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
                <NavTabV icon={<NumberCircleOne size={26} />} iconPosition="start" label={labelVisibility && "Experience"} />
                <NavTabV icon={<NumberCircleTwo size={26} />} iconPosition="start" label={labelVisibility && "Work"} />
                <NavTabV icon={<NumberCircleThree size={26} />} iconPosition="start" label={labelVisibility && "Playground"} />
                <NavTabV icon={<NumberCircleFour size={26} />} iconPosition="start" label={labelVisibility && "Contact"} />
              </NavTabsV>
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
          </Box>
        </Stack>
      </Box>
    </>
  );
}


// ---------------------------------------------------------

export default Playground;
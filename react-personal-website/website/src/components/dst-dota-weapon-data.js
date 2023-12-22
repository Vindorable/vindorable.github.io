import React from "react";
import { Box, Stack, Typography, } from "@mui/material";
import { styled } from "@mui/material/styles";

import { NavTab, NavTabs } from "./nav-tab";


// ---------------------------------------------------------

const BoxText = styled(Box)(({ theme }) => ({
  padding: "calc(1.25 * 8px)",
  backgroundColor: "rgb(12, 12, 12)",
  borderRadius: "8px",
  boxShadow: `0px 0px 2px ${theme.palette.dividerCustom.strong}`,
  width: "100%",
  height: "auto",
}));


// ---------------------------------------------------------

const DSTDotaWeaponData = ({ weaponIcon, weaponName, dotaHeroName, releaseStatus, lore, abilities, moreInfo, disclaimer }) => {
  // Tabs.
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Stack spacing={1.25}>
        <Stack direction={"row"} spacing={2}>
          <Box
            component="img"
            sx={{ width: "150px", height: "auto", }}
            alt=""
            src={weaponIcon}
          />
          <Stack>
            <Typography variant="h6">{weaponName}</Typography>
            <Typography variant="body2">{dotaHeroName}'s weapon.</Typography>
            <Typography variant="body2">Status: {releaseStatus}</Typography>
          </Stack>
        </Stack>

        <NavTabs value={value} onChange={handleChange}>
          <NavTab label="Lore" />
          <NavTab label="Abilities" />
          <NavTab label="More Info" />
          <NavTab label="Disclaimer" />
        </NavTabs>
        {/* IIFE (Immediately Invoked Function Expressions) */}
        {(() => {
          switch (value) {
            case 0: return <BoxText>{lore}</BoxText>
            case 1: return <BoxText>{abilities}</BoxText>
            case 2: return <BoxText>{moreInfo}</BoxText>
            case 3: return <BoxText>{disclaimer}</BoxText>
          }
        })()}
      </Stack>
    </>
  );
}


// ---------------------------------------------------------

export default DSTDotaWeaponData;
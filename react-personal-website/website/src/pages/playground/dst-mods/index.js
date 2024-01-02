import React from "react";
import { Divider, Stack, Typography } from "@mui/material";

import BodyWrapper from "../../../components/body-wrapper";
import Image from "../../../components/image/image";
import Spacer from "../../../components/spacer";

import SteamWorkshopLogo from "../../../assets/images/dst/steam-workshop-logo.png";
import BDayCakeModDP from "../../../assets/images/dst/01-booty-pack-mod/bday-cake-mod-dp.jpg";
import BootyPackModDP from "../../../assets/images/dst/02-booty-pack-mod/booty-pack-mod-dp.jpg";
import DotaWeaponsModDP from "../../../assets/images/dst/03-dota-weapons-mod/dota-weapons-mod-dp.jpg";

import { PATH_WEBPAGE } from "../../../routes/paths";


// ---------------------------------------------------------

const DSTMods = () => {
  return (
    <>
      <BodyWrapper>
        <Spacer amount={20} />
        <Image src={SteamWorkshopLogo} height={124} />

        <Spacer amount={30} />
        <Divider />

        <Typography variant="body2">
          These are the public mods I created for one of my favourite games, Don't Starve Together.
        </Typography>

        <Stack direction={"row"} p={2} spacing={3}>
          <Image
            src={BDayCakeModDP}
            height={180}
            url={PATH_WEBPAGE.playgroundSubpage.dstBDayCakeMod}
          />
          <Image
            src={BootyPackModDP}
            height={180}
            url={PATH_WEBPAGE.playgroundSubpage.dstBootyPackMod}
          />
          <Image
            src={DotaWeaponsModDP}
            height={180}
            url={PATH_WEBPAGE.playgroundSubpage.dstDotaWeaponsMod}
          />
        </Stack>
      </BodyWrapper>
    </>
  );
}


// ---------------------------------------------------------

export default DSTMods;
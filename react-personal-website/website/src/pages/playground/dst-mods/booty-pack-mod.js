import React from "react";

import BodyWrapper from "../../../components/body-wrapper";
import DSTModData from "../../../components/dst-mod-data";

import BDayCakeModBanner from "../../../assets/images/dst/02-booty-pack-mod/dst+booty+pack+mod+steam+dp.png";
import BDayCakeDescArt from "../../../assets/images/dst/02-booty-pack-mod/dst+booty+pack+mod+desc+art.png";
import { imageList as BootyPackModScreenshots } from "../../../assets/images/dst/02-booty-pack-mod/screenshots/booty-pack-mod-screenshots";


// ---------------------------------------------------------

const BootyPackMod = () => {
  return (
    <>
      <BodyWrapper>
        <DSTModData
          modBanner={BDayCakeModBanner}
          modName={"BOOTY PACK"}
          modShortDesc={<>
            Arr!! Ahoy me mateys!
            <br />
            What do we do with all this booty from our bountiful plunder??
            <br />
            Me lad, your ol' Cap'n gives you the <b>Booty Pack</b> from the single player, <b>Don't Starve - Shipwrecked DLC</b>! Arr!!
          </>}
          modDescArt={BDayCakeDescArt}
          modScreenshots={BootyPackModScreenshots}
          modLongDesc={<>
            This mod adds an additional bagpack to the game from the single player Don't Starve - Shipwrecked DLC. It has 14 slots like the Krampus Sack.
            <br /><br />
            If you have any questions / comments / requests please leave a comment below. Have fun!
          </>}
          steamWorkshopLink={"https://steamcommunity.com/sharedfiles/filedetails/?id=716271544"}
          changelogImgLink={"http://orig07.deviantart.net/2fa5/f/2016/184/6/f/workshop_version_detail___booty_pack_by_vindorable-da8oiba.png"}
        />
      </BodyWrapper>
    </>
  );
}


// ---------------------------------------------------------

export default BootyPackMod;
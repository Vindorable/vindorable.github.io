import React from "react";

import BodyWrapper from "../../../components/body-wrapper";
import DSTModData from "../../../components/dst-mod-data";

import BDayCakeModBanner from "../../../assets/images/dst/01-booty-pack-mod/dst+bday+cake+mod+steam+dp.png";
import BDayCakeDescArt from "../../../assets/images/dst/01-booty-pack-mod/dst+bday+cake+mod+desc+art.png";
import { imageList as BDayCakeModScreenshots } from "../../../assets/images/dst/01-booty-pack-mod/screenshots/bday-cake-mod-screenshots";


// ---------------------------------------------------------

const BDayCakeMod = () => {
  return (
    <>
      <BodyWrapper>
        <DSTModData
          modBanner={BDayCakeModBanner}
          modName={"BIRTHDAY CAKE (+CREATOR KIT)"}
          modShortDesc={<>
            Do you play DST often with your love ones?
            <br />
            Do you wish you can show them your love through one of your favourite games?
            <br />
            If so, this mod is just the tool for you! You can even have <b>their name on the cake!</b>
          </>}
          modDescArt={BDayCakeDescArt}
          modScreenshots={BDayCakeModScreenshots}
          modLongDesc={<>
            Yes! You can now create a custom named birthday cake for your special someone!
            <br /><br />
            The cake does not appear in any tabs. You have to use to console to spawn it.
            <br />
            Why? Because this is a birthday cake that should only be baked on someone's birthday!
            <br /><br />
            It provides 100 hunger, 100 sanity and 100 health once eaten.
            <br />
            To spawn the basic "HAPPY" and "BIRTHDAY" cakes that is provided, copy / paste this codes in the console:

          </>}
          steamWorkshopLink={"https://steamcommunity.com/sharedfiles/filedetails/?id=716271544"}
          changelogImgLink={"http://orig03.deviantart.net/ac8f/f/2016/182/e/c/workshop_version_detail___bday_cake_w_creator_kit_by_vindorable-da7sdsz.png"}
        />
      </BodyWrapper>
    </>
  );
}


// ---------------------------------------------------------

export default BDayCakeMod;
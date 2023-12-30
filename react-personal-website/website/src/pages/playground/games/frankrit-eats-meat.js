import React from "react";
import { Divider, Stack, Typography } from "@mui/material";
import { Question } from "phosphor-react";

import BodyWrapper from "../../../components/body-wrapper";
import Image from "../../../components/image/image";
import Spacer from "../../../components/spacer";
import ImageGallery from "../../../components/image-gallery";

import JayProfilePic from "../../../assets/images/games/dev-jay-r.png";
import CameronProfilePic from "../../../assets/images/games/dev-cameron-e.png";
import GerardProfilePic from "../../../assets/images/games/dev-gerard-n.png";
import { imageList as GameShowcase } from "../../../assets/images/games/game-fem-showcase/gallery-game-fem-showcase";
import Artwork from "../../../assets/images/games/fem-artwork.png";


// ---------------------------------------------------------

const FrankritEatsMeat = () => {
  return (
    <>
      <BodyWrapper>
        <Image src={Artwork} height={400} />
        <Stack>
          <Typography inline align="center" variant="body2">
            "Uh... Oh? Meat... Me hungry! Hunger kills... MEAT!"
            <br /><br />
            Frankrit, a gentle grotesque giant, created in an unorthodox scientific experiment finds himself stranded on a small island surrounded by vast ocean. His grumpy rumbling tummy growls for meat. He sees all sorts of meat delicacies flying around him. Is this abnormality real or just a mirage? No one knows. Feed him the meat he desires by hooking it!
          </Typography>
        </Stack>
        <Spacer amount={5} />
        <ImageGallery imageSet={GameShowcase} columns={4} />
        <Spacer amount={30} />

        {/* --------------------------------------------------------- */}
        {/* FEATURES ------------------------------------------------ */}
        {/* --------------------------------------------------------- */}
        <Stack alignItems={"center"} justifyContent={"center"}>
          <Typography variant="h6">❖ Features ❖</Typography>
        </Stack>
        <Spacer amount={5} />

        <Stack>
          <Typography variant="body2">
            ◆ <b><i>SURVIVE</i></b> &nbsp; by hooking randomly flying Meats to stay alive.<br />
            ◆ <b><i>UPGRADE</i></b> &nbsp; your hook's size and speed to stay ahead of the game.<br />
            ◆ <b><i>AVOID</i></b> &nbsp; mysterious 'The Things' that hurt you, which can eventually kill your gentle grotesque giant!<br />
            ◆ <b><i>COLLECT</i></b> &nbsp; rare Gems that spawns in-game.<br />
            ◆ <b><i>UNLOCK</i></b> &nbsp; unique skins to customize Frankrit to suit your playstyle.<br />
            ◆ <b><i>COMPETE</i></b> &nbsp; with others globally to see who conquers the top spot of best Hook Streak, Gluttony & Undying!
          </Typography>
        </Stack>
        <Spacer amount={30} />

        {/* --------------------------------------------------------- */}
        {/* DEVS ---------------------------------------------------- */}
        {/* --------------------------------------------------------- */}
        <Stack alignItems={"center"} justifyContent={"center"}>
          <Typography variant="h6">❖ MEAT the Developers ❖</Typography>
        </Stack>
        <Spacer amount={5} />

        <Stack spacing={3}>
          <Stack spacing={1}>
            <Image src={JayProfilePic} height={200} />
            <Stack>
              <Typography inline align="center" variant="body2">
                Jay R.
              </Typography>
              <Typography inline align="center" variant="caption">
                Founder / Producer
                <br />
                Art / Programming - Design & Concept Ideas
              </Typography>
            </Stack>
          </Stack>

          <Stack spacing={1}>
            <Image src={CameronProfilePic} height={200} />
            <Stack>
              <Typography inline align="center" variant="body2">
                Cameron E.
              </Typography>
              <Typography inline align="center" variant="caption">
                Programming - Design & Concept Ideas
              </Typography>
            </Stack>
          </Stack>

          <Stack>
            <Typography inline align="center" variant="body2">
              <i>And... special thanks to:</i>
            </Typography>
          </Stack>

          <Stack spacing={1}>
            <Image src={GerardProfilePic} height={200} />
            <Stack>
              <Typography inline align="center" variant="body2">
                Gerard N.
              </Typography>
              <Typography inline align="center" variant="caption">
                Great guy who comes up with quirky stories and has been there from the start.
              </Typography>
            </Stack>
          </Stack>
        </Stack>
        <Spacer amount={30} />
        <Divider />
        <Spacer amount={20} />

        {/* --------------------------------------------------------- */}
        {/* FAQS ---------------------------------------------------- */}
        {/* --------------------------------------------------------- */}
        <Stack direction={"row"} alignItems={"center"} justifyContent={"center"} spacing={0.75}>
          <Question size={28} />
          <Typography variant="h5">FAQs</Typography>
        </Stack>

        <Stack spacing={3}>
          <Stack spacing={0.5}>
            <Typography variant="h6">
              IPhone App Store?
            </Typography>
            <Stack p={0.75}>
              <Typography variant="body2">
                Maybe (maybe not). We would like to build a stable fan base on the Android platform on Google Play first. Maybe then we will look into putting our resources into exploring new grounds.
              </Typography>
            </Stack>
          </Stack>

          <Stack spacing={0.5}>
            <Typography variant="h6">
              Desktop Version?
            </Typography>
            <Stack p={0.75}>
              <Typography variant="body2">
                This game was built on having the mobile environment in mind. There will be no desktop version of the game.
              </Typography>
            </Stack>
          </Stack>

          <Stack spacing={0.5}>
            <Typography variant="h6">
              Game Save Data?
            </Typography>
            <Stack p={0.75}>
              <Typography variant="body2">
                Every player's game save data file is saved securely <i>(encrypted to prevent human-editing)</i> and locally on their respective mobile device's root directory. Due to Android's security, you won't have access to the save file unless your phone is rooted.
                <br /><br />
                <b>Do note that uninstallation of the game app from your mobile device also deletes the save file.</b>
              </Typography>
            </Stack>
          </Stack>

          <Stack spacing={0.5}>
            <Typography variant="h6">
              Changing Phone (or lost phone)?
            </Typography>
            <Stack p={0.75}>
              <Typography variant="body2">
                <span style={{ textDecoration: "line-through" }}>
                  <i>If you're changing your mobile device, you can choose one of the "complete phone backup solution" apps available on the Google Market to save a copy of your game save data file. We'd recommend using <a href="https://play.google.com/store/apps/details?id=com.keramidas.TitaniumBackup" target="_blank">Titanium Backup</a> due its high ratings from the community. Follow the instructions on the app you're using on how to restore your data.</i>
                  <br /><br />
                  <i>In the unfortunate event if you lost your phone, there is really nothing we can do. We urge you to do a backup every now and then to be on the safe side.</i>
                </span>
                <br /><br />
                <b>NEW! (As of game version 1.6.0)</b>
                <br /><br />
                You can now very easily export (Backup) your game save data file, or import (Restore) it, from within the game!
                <br /><br />
                This function can be found in the More Stuff room. The Backup and Restore process is pretty straight forward as all you have to do is press the respective buttons.
                <br /><br />
                <b>For Backup</b>, your game save data file will be copied over from the root directory to your device's Internal Storage. It will be located in the folder: "FrankritEatsMeat &gt; Backup &gt; &#123;your file&#125;.ini". You can then choose to save it on your personal Cloud Storage (eg: Dropbox, Google Drive, etc.) or move it to your SD Card Storage.
                <br /><br />
                <b>For Restore</b>, please make sure you have your game save data file backed up from the game on your previous mobile device. In your new device's Internal Storage, create a folder named "FrankritEatsMeat" and inside that folder create another folder named "Backup". Transfer over (from old device) and place your file (to new device) inside the "Backup" folder. Install the game and press the Restore button. Make sure to only have 1 backup file that you wish to restore inside the "Backup" folder.
                <br /><br />
                Tested and works perfectly fine on mobile devices running on Android version 4.1, 5.1.1, 6 and 6.0.1. It should work fine with older and newer devices.
              </Typography>
            </Stack>
          </Stack>

          <Stack spacing={0.5}>
            <Typography variant="h6">
              Cloud Saving?
            </Typography>
            <Stack p={0.75}>
              <Typography variant="body2">
                <span style={{ textDecoration: "line-through" }}>
                  <i>We are still looking into this. Due to our current available resources at hand, implementing this is beyond us. Nonetheless, we are still looking into this. Any good news will be updated promptly on our game app on the Google Play Store.</i>
                </span>
                <br /><br />
                <b>NEW! (As of game version 1.6.0)</b>
                <br /><br />
                We have decided to give our players (you) full control over your own gaming experience where you can perform manual Backup and Restore of your game save data file. Cloud Saving is no longer a priority.
              </Typography>
            </Stack>
          </Stack>

          <Stack spacing={0.5}>
            <Typography variant="h6">
              Other Questions?
            </Typography>
            <Stack p={0.75}>
              <Typography variant="body2">
                If there are questions not answered in the FAQs, please feel free to drop us a message using the contact form.
              </Typography>
            </Stack>
          </Stack>
        </Stack>
      </BodyWrapper>
    </>
  );
}


// ---------------------------------------------------------

export default FrankritEatsMeat;
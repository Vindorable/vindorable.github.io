import React, { useRef } from "react";
import { Accordion, AccordionDetails, AccordionSummary, Alert, Box, Button, Divider, MenuItem, Stack, Typography } from "@mui/material";
import { CaretDown, DownloadSimple, Question, Table } from "phosphor-react";
import { Gavel } from "@phosphor-icons/react";

import BodyWrapper from "../../../components/body-wrapper";
import Spacer from "../../../components/spacer";
import Image from "../../../components/image/image";
import ImageGallery from "../../../components/image-gallery";
import FloatingContentMenu from "../../../components/floating-content-menu";

import AppIcon from "../../../assets/images/games/dino-with-a-gun/game-app-icon.png";
import PlayStoreDLButton from "../../../assets/images/games/general/playstore-download-button.png";
import PlayStoreDLButtonV2 from "../../../assets/images/games/general/google-play-store-download-button.png";
import AppStoreDLButton from "../../../assets/images/games/general/apple-app-store-download-button.png";
import JayProfilePic from "../../../assets/images/games/dino-with-a-gun/devs/jay-r.jpg";
import { imageList as GameShowcase } from "../../../assets/images/games/dino-with-a-gun/gallery-showcase";
import Artwork from "../../../assets/images/games/dino-with-a-gun/artwork.png";

import { PATH_WEBPAGE } from "../../../routes/paths";
import { useNavigate } from "react-router-dom";


// ---------------------------------------------------------

const DinoWithAGun = () => {
  // FloatingContentMenu
  const fcm = useRef(null);

  const navigate = useNavigate();

  return (
    <>
      <BodyWrapper>
        {/* --------------------------------------------------------- */}
        {/* ABOUT --------------------------------------------------- */}
        {/* --------------------------------------------------------- */}
        <div id="about"></div>
        <Image src={Artwork} height={260} />
        <Spacer amount={5} />
        <Stack>
          <Typography inline align="center" variant="body2">
            🦖🔫 Dino shoots everything everywhere all at once with a gun.<br /><br />
            Dino with a Gun is an adventure roguelike & survivor io game.<br />
            Survive the endless waves of monsters, zombies, ghosts, parasites, robots, and more!<br />
            Upgrade your equipment and character to expand your knowledge of tech and wizardry to triumph over your foes!
          </Typography>
        </Stack>
        <Spacer amount={5} />
        <ImageGallery imageSet={GameShowcase} columns={5} aspectRatio={9 / 16} />
        <Spacer amount={30} />

        {/* --------------------------------------------------------- */}
        {/* FEATURES ------------------------------------------------ */}
        {/* --------------------------------------------------------- */}
        <div id="features"></div>
        <Stack alignItems={"center"} justifyContent={"center"}>
          <Typography variant="h6">❖ Features ❖</Typography>
        </Stack>
        <Spacer amount={5} />

        <Stack>
          <Typography variant="body2">
            Play to find out!~😉
          </Typography>
        </Stack>
        <Spacer amount={30} />

        {/* --------------------------------------------------------- */}
        {/* DEVS ---------------------------------------------------- */}
        {/* --------------------------------------------------------- */}
        <div id="developers"></div>
        <Stack alignItems={"center"} justifyContent={"center"}>
          <Typography variant="h6">❖ Developers ❖</Typography>
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
                Solo Dev
              </Typography>
            </Stack>
          </Stack>
        </Stack>
        <Spacer amount={30} />
        <Divider />
        <Spacer amount={20} />

        {/* --------------------------------------------------------- */}
        {/* DOWNLOAD ------------------------------------------------ */}
        {/* --------------------------------------------------------- */}
        <div id="download"></div>
        <Stack direction={"row"} alignItems={"center"} justifyContent={"center"} spacing={0.75}>
          <DownloadSimple size={28} />
          <Typography variant="h5">DOWNLOAD</Typography>
        </Stack>
        <Spacer amount={10} />

        <Image
          src={AppIcon}
          height={180}
        />
        <Stack spacing={-0.5}>
          <Image
            src={PlayStoreDLButtonV2}
            height={70}
            url="https://play.google.com/store/apps/details?id=com.jgamesentertainment.dinowithagun"
          />
          <Image
            src={AppStoreDLButton}
            height={70}
            url="https://apps.apple.com/us/app/dino-with-a-gun/id6736557518"
          />
        </Stack>

        <Stack spacing={0.5}>
          <Typography variant="h6">
            Current version:
          </Typography>
          <Stack p={0.75}>
            <Typography variant="body2">
              Join my Discord and see the Releases channels. <br />
              <a href="https://discord.gg/vhB5hkqpFU" target="_blank">https://discord.gg/vhB5hkqpFU</a>
            </Typography>
          </Stack>
        </Stack>

        <div id="changelog"></div>
        <Stack spacing={0.5}>
          <Typography variant="h6">Changelog</Typography>

          <Stack p={0.75}>
            <Typography variant="body2">
              Dino official Wiki.gg - Changelog: <a href="https://dinowithagun.wiki.gg/wiki/Changelog" target="_blank">https://dinowithagun.wiki.gg/wiki/Changelog</a>
              <br /><br />
              Note: I will first post the changes of a new release on my Discord under the Releases channels. When time permits, I will update the wiki.
            </Typography>
          </Stack>
        </Stack>

        {/* ========================= */}
        {/* ========================= */}
        <Spacer amount={20} />
        <Divider />
        <Spacer amount={20} />
      </BodyWrapper>
    </>
  );
}


// ---------------------------------------------------------

export default DinoWithAGun;
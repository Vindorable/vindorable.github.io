import React, { useRef } from "react";
import { Accordion, AccordionDetails, AccordionSummary, Alert, Box, Button, Divider, MenuItem, Stack, Typography } from "@mui/material";
import { CaretDown, DownloadSimple, Question, Table } from "phosphor-react";
import { Gavel } from "@phosphor-icons/react";

import BodyWrapper from "../../../components/body-wrapper";
import Spacer from "../../../components/spacer";
import Image from "../../../components/image/image";
import ImageGallery from "../../../components/image-gallery";
import FloatingContentMenu from "../../../components/floating-content-menu";

import AppIcon from "../../../assets/images/games/shark-a-boom/game-app-icon.png";
import PlayStoreDLButton from "../../../assets/images/games/general/playstore-download-button.png";
import JayProfilePic from "../../../assets/images/games/shark-a-boom/devs/jay-r.png";
import OliverProfilePic from "../../../assets/images/games/shark-a-boom/devs/oliver.png";
import { imageList as GameShowcase } from "../../../assets/images/games/shark-a-boom/gallery-showcase";
import Artwork from "../../../assets/images/games/shark-a-boom/artwork.png";

import { PATH_WEBPAGE } from "../../../routes/paths";
import { useNavigate } from "react-router-dom";


// ---------------------------------------------------------

const Sharkaboom = () => {
  // FloatingContentMenu
  const fcm = useRef(null);

  const navigate = useNavigate();

  const importantMessage = (
    <>
      Note:
      <Stack py={1} paddingLeft={2}>
        This game was the biggest project I did. Using the Unity Engine I made a game similar to Brawl Stars. It was too big of a project to handle all by myself from programming to artwork to marketing. It started as a fun ambitious project but after a year it became mentally draining. As a result, this game will not be worked on further but will serve as an MVP of my idea.
        <br /><br />
        The game can still be downloaded from the Google Play Store as it is still on the Early Access Branch.
      </Stack>
    </>
  );

  return (
    <>
      <BodyWrapper>
        <FloatingContentMenu ref={fcm}>
          <MenuItem sx={{ borderRadius: "8px" }} onClick={() => fcm.current.goto("about")}>◆ &nbsp; About</MenuItem>
          <MenuItem sx={{ borderRadius: "8px" }} onClick={() => fcm.current.goto("features")}>◆ &nbsp; Features</MenuItem>
          <MenuItem sx={{ borderRadius: "8px" }} onClick={() => fcm.current.goto("developers")}>◆ &nbsp; Developers</MenuItem>
          <MenuItem sx={{ borderRadius: "8px" }} onClick={() => fcm.current.goto("download")}>◆ &nbsp; Download</MenuItem>
          <MenuItem sx={{ borderRadius: "8px" }} onClick={() => fcm.current.goto("changelog")}>◆ &nbsp; Changelog</MenuItem>
          <MenuItem sx={{ borderRadius: "8px" }} onClick={() => fcm.current.goto("faqs")}>◆ &nbsp; FAQs</MenuItem>
          <MenuItem sx={{ borderRadius: "8px" }} onClick={() => fcm.current.goto("contact")}>◆ &nbsp; Contact</MenuItem>
          <MenuItem sx={{ borderRadius: "8px" }} onClick={() => fcm.current.goto("privacypolicy")}>◆ &nbsp; Privacy Policy</MenuItem>
        </FloatingContentMenu>


        {/* --------------------------------------------------------- */}
        {/* ABOUT --------------------------------------------------- */}
        {/* --------------------------------------------------------- */}
        <div id="about"></div>
        <Image src={Artwork} height={300} />
        <Spacer amount={5} />
        <Stack>
          <Typography inline align="center" variant="body2">
            🦈💥Shark-A-Boom brings you the classic PvP action to play with or against your friends in self-hosted rooms or solo with randomly matched players from all over the world across a variety of game modes. The challenge doesn't stop here. Develop your favourite Shark and Turret to secure a guaranteed victory and an awesome mobile MOBA experience!
          </Typography>
        </Stack>
        <Spacer amount={5} />
        <ImageGallery imageSet={GameShowcase} columns={5} aspectRatio={16 / 9} />
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
            ◆ <b><i>BATTLE</i></b> &nbsp; in real-time fast-paced multiplayer matches (solo/co-op) against players across the world.<br />
            ◆ <b><i>UPGRADE</i></b> &nbsp; your Sharks and Turrets to give yourself an edge in battle.<br />
            ◆ <b><i>UNLOCK</i></b> &nbsp; unique skins to customize your Sharks and Turrets to suit your playstyle.<br />
            ◆ <b><i>COMPETE</i></b> &nbsp; with others globally to see who conquers the top spot in the Leaderboards!<br />
            ◆ Constantly evolving with new Sharks, Turrets, skins, maps, special events and game modes in the future.
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
                Founder / Producer
                <br />
                Art / Programming - Design & Concept Ideas
              </Typography>
            </Stack>
          </Stack>

          <Stack spacing={1}>
            <Image src={OliverProfilePic} height={200} />
            <Stack>
              <Typography inline align="center" variant="body2">
                Oliver Sradnick
              </Typography>
              <Typography inline align="center" variant="caption">
                Great guy from Photon Engine Forums who helped me a lot during the development!
              </Typography>
            </Stack>
          </Stack>

          <Stack>
            <Typography inline align="center" variant="body2">
              <i>And... special thanks to:</i>
              <br />
              <i>Evelina and Twilight</i>
            </Typography>
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
        <Image
          src={PlayStoreDLButton}
          height={56}
          url="https://play.google.com/store/apps/details?id=com.jgamesentertainment.sharkpewpew"
        />

        <Alert variant="outlined" severity="warning">
          {importantMessage}
        </Alert>

        <Stack spacing={0.5}>
          <Typography variant="h6">
            Current version:
          </Typography>
          <Stack p={0.75}>
            <Typography variant="body2">
              v0.0.39 [Public Early Access]
            </Typography>
          </Stack>
        </Stack>

        <div id="changelog"></div>
        <Stack>
          <Typography variant="h6">Changelog</Typography>
        </Stack>

        {/* ========================= */}
        {/* ========================= */}
        <Accordion>
          <AccordionSummary
            expandIcon={<CaretDown size={24} />}
            aria-controls="accordion-01-content"
            id="accordion-01-header"
          >
            <Typography variant="body2">(02/12/21)&nbsp;&nbsp;&nbsp;v0.0.39 [Public Early Access]</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="subtitle2">
              First public early access release!!
              <br />
              NOTE: The game is being frequently updated on the private branch. If you want to try out before updates are pushed to the public branch you can join my Discord and dm me :)
            </Typography>
          </AccordionDetails>
        </Accordion>
        {/* ========================= */}
        {/* ========================= */}
        <Spacer amount={20} />
        <Divider />
        <Spacer amount={20} />


        {/* --------------------------------------------------------- */}
        {/* FAQS ---------------------------------------------------- */}
        {/* --------------------------------------------------------- */}
        <div id="faqs"></div>
        <Stack direction={"row"} alignItems={"center"} justifyContent={"center"} spacing={0.75}>
          <Question size={28} />
          <Typography variant="h5">FAQs</Typography>
        </Stack>

        <Alert variant="outlined" severity="warning">
          {importantMessage}
        </Alert>

        <Stack spacing={3}>
          <Stack spacing={0.5}>
            <Typography variant="h6">
              IPhone App Store?
            </Typography>
            <Stack p={0.75}>
              <Typography variant="body2">
                Yes! Give me sometime to iron out the bugs on the Android platform. Once it is stable, I will port it over for the iPhone.
              </Typography>
            </Stack>
          </Stack>
        </Stack>

        <Stack spacing={3}>
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
        </Stack>

        <Stack spacing={3}>
          <Stack spacing={0.5}>
            <Typography variant="h6">
              Game Save Data?
            </Typography>
            <Stack p={0.75}>
              <Typography variant="body2">
                Every player's game save data file is saved securely <i>(encrypted to prevent human-editing)</i> and locally on their respective mobile device's root directory.
                <br /><br />
                Do note that uninstallation of the game app from your mobile device also deletes the save file permanently if you choose to remain playing as a Guest without linking your Google account <i>(see below on Cloud Saving)</i>.
              </Typography>
            </Stack>
          </Stack>
        </Stack>

        <Stack spacing={3}>
          <Stack spacing={0.5}>
            <Typography variant="h6">
              Changing Phone (or lost phone)?
            </Typography>
            <Stack p={0.75}>
              <Typography variant="body2">
                <i>See below on Cloud Saving.</i>
              </Typography>
            </Stack>
          </Stack>
        </Stack>

        <Stack spacing={3}>
          <Stack spacing={0.5}>
            <Typography variant="h6">
              Cloud Saving?
            </Typography>
            <Stack p={0.75}>
              <Typography variant="body2">
                Android - By linking your Google account <i>(In-game &gt; Settings / Signing in on the first game launch)</i>, the game automatically backs up your data using the Google Play Games Services.
              </Typography>
            </Stack>
          </Stack>
        </Stack>

        <Stack spacing={3}>
          <Stack spacing={0.5}>
            <Typography variant="h6">
              Other Questions?
            </Typography>
            <Stack p={0.75}>
              <Typography variant="body2">
                If there are questions not answered in the FAQ, please feel free to drop me a message using the contact form.
              </Typography>
            </Stack>
          </Stack>
        </Stack>

        <div id="contact"></div>
        <Box>
          <Button
            disableElevation
            variant="outlined"
            startIcon={<Table size={28} />}
            onClick={() => navigate(PATH_WEBPAGE.general.contact)}
          >
            Contact Form
          </Button>
        </Box>

        <div id="privacypolicy"></div>
        <Box>
          <Button
            disableElevation
            variant="outlined"
            startIcon={<Gavel size={28} />}
            onClick={() => navigate(PATH_WEBPAGE.playgroundSubpage.gamePrivacyPolicy)}
          >
            Privacy Policy
          </Button>
        </Box>
      </BodyWrapper>
    </>
  );
}


// ---------------------------------------------------------

export default Sharkaboom;
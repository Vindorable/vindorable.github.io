import React from "react";
import { Accordion, AccordionDetails, AccordionSummary, Divider, IconButton, Menu, MenuItem, Stack, Typography } from "@mui/material";
import { CaretDown, DownloadSimple, ListBullets, Question } from "phosphor-react";

import BodyWrapper from "../../../components/body-wrapper";
import Image from "../../../components/image/image";
import Spacer from "../../../components/spacer";
import ImageGallery from "../../../components/image-gallery";

import JayProfilePic from "../../../assets/images/games/dev-jay-r.png";
import CameronProfilePic from "../../../assets/images/games/dev-cameron-e.png";
import GerardProfilePic from "../../../assets/images/games/dev-gerard-n.png";
import { imageList as GameShowcase } from "../../../assets/images/games/game-fem-showcase/gallery-game-fem-showcase";
import Artwork from "../../../assets/images/games/fem-artwork.png";
import AppIcon from "../../../assets/images/games/game-frankrit-eats-meat.png";
import PlayStoreDLButton from "../../../assets/images/games/playstore-download-button.png";


// ---------------------------------------------------------

const FrankritEatsMeat = () => {
  // Page content - using Mui Menu component.
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  // Using Mui Menu to scroll to content.
  const scrollTo = (elementID) => {
    document.getElementById(elementID).scrollIntoView({ block: 'start', behavior: 'smooth' });
    handleClose();
  };

  return (
    <>
      <BodyWrapper>
        <Stack
          sx={{
            position: "absolute",
            top: "0px",
            left: "0px",
          }}
        >
          <Stack
            sx={{
              position: "fixed",
              transform: "translateX(-50%)",
            }}
          >
            <IconButton
              id="basic-button"
              aria-controls={open ? 'basic-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              onClick={handleClick}
            >
              <ListBullets />
            </IconButton>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                'aria-labelledby': 'basic-button',
              }}
            >
              <MenuItem onClick={() => scrollTo("about")}>About</MenuItem>
              <MenuItem onClick={() => scrollTo("features")}>Features</MenuItem>
              <MenuItem onClick={() => scrollTo("developers")}>Developers</MenuItem>
              <MenuItem onClick={() => scrollTo("download")}>Download</MenuItem>
              <MenuItem onClick={() => scrollTo("changelog")}>Changelog</MenuItem>
              <MenuItem onClick={() => scrollTo("faqs")}>FAQs</MenuItem>
            </Menu>
          </Stack>
        </Stack>


        {/* --------------------------------------------------------- */}
        {/* ABOUT --------------------------------------------------- */}
        {/* --------------------------------------------------------- */}
        <div id="about"></div>
        <Image src={Artwork} height={400} />
        <Stack>
          <Typography inline align="center" variant="body2">
            "Uh... Oh? Meat... Me hungry! Hunger kills... MEAT!"
            <br /><br />
            Frankrit, a gentle grotesque giant, created in an unorthodox scientific experiment finds himself stranded on a small island surrounded by vast ocean. His grumpy rumbling tummy growls for meat. He sees all sorts of meat delicacies flying around him. Is this abnormality real or just a mirage? No one knows. Feed him the meat he desires by hooking it!
          </Typography>
        </Stack>
        <Spacer amount={5} />
        <ImageGallery imageSet={GameShowcase} columns={4} aspectRatio={16 / 9} />
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
        <div id="developers"></div>
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
          url="https://play.google.com/store/apps/details?id=com.jgamesentertainment.frankriteatsmeat"
        />

        <Stack spacing={0.5}>
          <Typography variant="h6">
            Current version:
          </Typography>
          <Stack p={0.75}>
            <Typography variant="body2">
              v2.6.3 [Public Release]
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
            <Typography variant="body2">(12/03/17)&nbsp;&nbsp;&nbsp;v1.0.0</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="subtitle2">
              • Initial release. App got rejected by Google due to "libpng" security issue.
            </Typography>
          </AccordionDetails>
        </Accordion>
        {/* ========================= */}
        {/* ========================= */}
        <Accordion>
          <AccordionSummary
            expandIcon={<CaretDown size={24} />}
            aria-controls="accordion-02-content"
            id="accordion-02-header"
          >
            <Typography variant="body2">(12/03/17)&nbsp;&nbsp;&nbsp;v1.0.1 [Public Release]</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="subtitle2">
              • Critical bug fix: Solved "libpng" security issue.
            </Typography>
          </AccordionDetails>
        </Accordion>
        {/* ========================= */}
        {/* ========================= */}
        <Accordion>
          <AccordionSummary
            expandIcon={<CaretDown size={24} />}
            aria-controls="accordion-03-content"
            id="accordion-03-header"
          >
            <Typography variant="body2">(15/03/17)&nbsp;&nbsp;&nbsp;v1.0.2</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="subtitle2">
              • Added "How-to-play" tutorial. <br />
              • Added Premium IAP function. Exported APK to test its IAP functionality by uploading it to the Play Console.
            </Typography>
          </AccordionDetails>
        </Accordion>
        {/* ========================= */}
        {/* ========================= */}
        <Accordion>
          <AccordionSummary
            expandIcon={<CaretDown size={24} />}
            aria-controls="accordion-04-content"
            id="accordion-04-header"
          >
            <Typography variant="body2">(17/03/17)&nbsp;&nbsp;&nbsp;v1.1.0 [Public Release]</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="subtitle2">
              • Locked Premium room. IAP functionality failed to work.
            </Typography>
          </AccordionDetails>
        </Accordion>
        {/* ========================= */}
        {/* ========================= */}
        <Accordion>
          <AccordionSummary
            expandIcon={<CaretDown size={24} />}
            aria-controls="accordion-05-content"
            id="accordion-05-header"
          >
            <Typography variant="body2">(22/03/17)&nbsp;&nbsp;&nbsp;v1.2.0 [Public Release]</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="subtitle2">
              • Added "randomize()" to change Hookables spawning seed. <br />
              • Fixed bug of Gem always spanwing at 100%. <br />
              • Adjusted Gem movement speed. <br />
              • Increased Hook base speed. <br />
              • Hook speed upgrades now improve speed exponentially, instead of linearly. <br />
              • Reworked Hookables spawn pattern. Intervals are now 20s, instead of 15s. Doom lasts for 10s, instead of 15s. <br />
              • Improved Meat-'The Things' ratio based on spawn pattern.
            </Typography>
          </AccordionDetails>
        </Accordion>
        {/* ========================= */}
        {/* ========================= */}
        <Accordion>
          <AccordionSummary
            expandIcon={<CaretDown size={24} />}
            aria-controls="accordion-06-content"
            id="accordion-06-header"
          >
            <Typography variant="body2">(26/03/17)&nbsp;&nbsp;&nbsp;v1.3.0 [Public Release]</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="subtitle2">
              • Added Hook Streak combos score popup in Game room. <br />
              • Removed Upgrades Panel. Upgrade buttons are now displayed outside for easy one-click upgrade. <br />
              • Pressing the device's native back key while in the Menu room now ends the game. <br />
              • Fixed the "white flash" transition effect bug for devices with large screen resolution.
            </Typography>
          </AccordionDetails>
        </Accordion>
        {/* ========================= */}
        {/* ========================= */}
        <Accordion>
          <AccordionSummary
            expandIcon={<CaretDown size={24} />}
            aria-controls="accordion-07-content"
            id="accordion-07-header"
          >
            <Typography variant="body2">(02/04/17)&nbsp;&nbsp;&nbsp;v1.4.0 [Public Release]</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="subtitle2">
              • Optimized game speed by improving texture pages swaps of using outline shader. <br />
              •  Increased game music volume. <br />
              •  Fixed bug of Gems rewarded from unlocking an Achievement not saving locally. <br />
              •  Changed "Options" button and room title board to "More" and "More Stuff" respectively. <br />
              •  Fixed drawing depth of timer display counter in Game room. <br />
              •  Added game version number id in Menu room. <br />
              •  Unlocked Settings room and added the function to turn ON / OFF game tutorial with preferences saved locally.
            </Typography>
          </AccordionDetails>
        </Accordion>
        {/* ========================= */}
        {/* ========================= */}
        <Accordion>
          <AccordionSummary
            expandIcon={<CaretDown size={24} />}
            aria-controls="accordion-08-content"
            id="accordion-08-header"
          >
            <Typography variant="body2">(09/04/17)&nbsp;&nbsp;&nbsp;v1.5.0 [Public Release]</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="subtitle2">
              •  Updated the app permissions for features releasing on future updates. <br />
              •  Added NEW Fresh Meats: Sushi (Sake, Ebi &amp; Tamago). <br />
              •  Added NEW Popup Talkers for the respective Sushi types.
            </Typography>
          </AccordionDetails>
        </Accordion>
        {/* ========================= */}
        {/* ========================= */}
        <Accordion>
          <AccordionSummary
            expandIcon={<CaretDown size={24} />}
            aria-controls="accordion-09-content"
            id="accordion-09-header"
          >
            <Typography variant="body2">(17/04/17)&nbsp;&nbsp;&nbsp;v1.6.0 [Public Release]</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="subtitle2">
              •  Added Backup &amp; Restore function. <br />
              •  Fixed bug of pressing of the device's native back key not working in Settings room. <br />
              •  Fixed bug of banner sprites (_UILongImage) showing gaps.
            </Typography>
          </AccordionDetails>
        </Accordion>
        {/* ========================= */}
        {/* ========================= */}
        <Accordion>
          <AccordionSummary
            expandIcon={<CaretDown size={24} />}
            aria-controls="accordion-10-content"
            id="accordion-10-header"
          >
            <Typography variant="body2">(25/04/17)&nbsp;&nbsp;&nbsp;v1.7.0 [Public Release]</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="subtitle2">
              •  Further improved Hook speed. <br />
              •  Added a NEW Hook: A-Beloved Hook. It has "specials": Emote System.
            </Typography>
          </AccordionDetails>
        </Accordion>
        {/* ========================= */}
        {/* ========================= */}
        <Accordion>
          <AccordionSummary
            expandIcon={<CaretDown size={24} />}
            aria-controls="accordion-11-content"
            id="accordion-11-header"
          >
            <Typography variant="body2">(01/05/17)&nbsp;&nbsp;&nbsp;v1.7.5 [Public Release]</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="subtitle2">
              •  Game file size optimization: Reduced all animation's sprite frames by half and adopted the "ping-pong" looping animation. Removed GeekStats sprites. <br />
              •  A little texture pages cleanup. <br />
              •  Improved Hook reel back mechanics. <br />
              •  Simplified the Hook combo score popup design. <br />
              •  Changed "Design Builder" name to "Wardrobe". <br />
              •  Improved "How-to-play" tutorial. <br />
              •  Added Camera Shake and Vibrations with the option to ON / OFF them from the Settings. <br />
              •  Increased Healthbar shake on hurt.
            </Typography>
          </AccordionDetails>
        </Accordion>
        {/* ========================= */}
        {/* ========================= */}
        <Accordion>
          <AccordionSummary
            expandIcon={<CaretDown size={24} />}
            aria-controls="accordion-12-content"
            id="accordion-12-header"
          >
            <Typography variant="body2">(01/05/17)&nbsp;&nbsp;&nbsp;v1.7.6</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="subtitle2">
              • Exported APK to test its IAP functionality by uploading it to the Play Console again.
            </Typography>
          </AccordionDetails>
        </Accordion>
        {/* ========================= */}
        {/* ========================= */}
        <Accordion>
          <AccordionSummary
            expandIcon={<CaretDown size={24} />}
            aria-controls="accordion-13-content"
            id="accordion-13-header"
          >
            <Typography variant="body2">(13/05/17)&nbsp;&nbsp;&nbsp;v1.8.0 [Public Release]</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="subtitle2">
              • IAP functionality works fine now. <br />
              • Opened the Premium room to purchase the Premium version of the game. Removes Ads and gifts a one-time 100 Gems pack on purchase. <br />
              • Made the "How-to-play" tutorial more compact. <br />
              • Optimized texture pages swaps of using outline shader in Wardrobe room. <br />
              • Added health popup to display the amount of health gained or lost in Game room. <br />
              • Improved gameover popup visuals. <br />
              • Added a NEW in-game currency, Stars, that is awared after a gameplay round ends. <br />
              • Shop room is now opened and you can buy permanent upgrades of Hook Size and Speed using the Stars earned.
            </Typography>
          </AccordionDetails>
        </Accordion>
        {/* ========================= */}
        {/* ========================= */}
        <Accordion>
          <AccordionSummary
            expandIcon={<CaretDown size={24} />}
            aria-controls="accordion-14-content"
            id="accordion-14-header"
          >
            <Typography variant="body2">(06/06/17)&nbsp;&nbsp;&nbsp;v1.8.5 [Public Release]</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="subtitle2">
              • Revamped the Menu room layout. <br />
              • Locked Shop room again (sorry..) <br />
              • Permanent upgrades bought from the Shop is now moved over to the Skill Tree room. All your purchased upgrades are converted to skill levels. <br />
              • Added Doom (a state where only Cleavers, "The Things", spawn) display indicator. <br />
              • Fixed bug of game crashing when the Android OS back button is pressed while a popup is open.
            </Typography>
          </AccordionDetails>
        </Accordion>
        {/* ========================= */}
        {/* ========================= */}
        <Accordion>
          <AccordionSummary
            expandIcon={<CaretDown size={24} />}
            aria-controls="accordion-15-content"
            id="accordion-15-header"
          >
            <Typography variant="body2">(27/06/17)&nbsp;&nbsp;&nbsp;v1.8.7 [Public Release]</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="subtitle2">
              • Added 2 NEW Hooks: Buddha's Love & Buddha's Lost Relic. <br />
              • Made it slightly harder to earn Stars. <br />
              • Temporarily removed the broken Reward Video Ads button from the Wardrobe room until its fixed. <br />
              • Fixed minor bug of chains distance issue in Game room.
            </Typography>
          </AccordionDetails>
        </Accordion>
        {/* ========================= */}
        {/* ========================= */}
        <Accordion>
          <AccordionSummary
            expandIcon={<CaretDown size={24} />}
            aria-controls="accordion-16-content"
            id="accordion-16-header"
          >
            <Typography variant="body2">(20/07/17)&nbsp;&nbsp;&nbsp;v1.9.0 [Public Release]</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="subtitle2">
              • Added a NEW game mode! Two players battle royale! You can now battle your friend on the same device. <br />
              • Added Patreon button in Menu room. <br />
              • Opened the Shop where you can purchase Gems (finally!).
            </Typography>
          </AccordionDetails>
        </Accordion>
        {/* ========================= */}
        {/* ========================= */}
        <Accordion>
          <AccordionSummary
            expandIcon={<CaretDown size={24} />}
            aria-controls="accordion-17-content"
            id="accordion-17-header"
          >
            <Typography variant="body2">(26/08/17)&nbsp;&nbsp;&nbsp;v1.9.5 [Public Release]</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="subtitle2">
              <b>MEGA UPDATE!!!</b> <br />
              <b>General</b> <br />
              • Changed Play room game modes selection layout. <br />
              • Game size optimisation and many other small improvements. <br />
              <b>Single Player game mode</b> <br />
              • Created a popup to notify Hook upgrade (size / speed) purchases in Game room. <br />
              • The Ultimate Skill has been unlocked in the Skill Tree room! The NEW Ultimate Skill ability can now be activated at will in Game room! <br />
              <b>Two Players game mode</b> <br />
              • Added "blood splat" fx and sound fx for Cleaver in Two Players game room when it hurts a Frankrit from being tossed at by the other. <br />
              • Frankrit Duo (player 2; your friend) will now get a random skin applied every time when playing the Two Players game mode. At times, you might see skins that are not YET available in the Wardrobe! <br />
              <b>What's really new?!</b> <br />
              • Changed all Frankrit's animations from traditional spritesheets to native Skeleton Animation system (Hooray!!). <br />
              • Added 5 NEW Hooks! <br />
              • Added NEW Skins category in Wardrobe! <br />
              • Added NEW Spiderkrit skin for the Skins category! <br />
              • Skins purchased from Wardrobe will now be instantly applied on purchase.
            </Typography>
          </AccordionDetails>
        </Accordion>
        {/* ========================= */}
        {/* ========================= */}
        <Accordion>
          <AccordionSummary
            expandIcon={<CaretDown size={24} />}
            aria-controls="accordion-18-content"
            id="accordion-18-header"
          >
            <Typography variant="body2">(03/10/17)&nbsp;&nbsp;&nbsp;v1.9.7 [Public Release]</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="subtitle2">
              • New permission required: Get Accounts. Needed as we are testing out Push Notifications. <br />
              • New Story mode games! Unlock the mysteries behind Frankrit's existence. <br />
              • New skins type: Hats. Available in Wardrobe room. Some are unlocked by completing Story mode chapters on perfect score. <br />
              • Added Cleaver hurt fx & sfx in normal game mode. <br />
              • Added a blog shop link where you can purchase Developer's side project merchandises in More room. <br />
              • **Note: Hats are not yet available in Two Players game mode.
            </Typography>
          </AccordionDetails>
        </Accordion>
        {/* ========================= */}
        {/* ========================= */}
        <Accordion>
          <AccordionSummary
            expandIcon={<CaretDown size={24} />}
            aria-controls="accordion-19-content"
            id="accordion-19-header"
          >
            <Typography variant="body2">(13/10/17)&nbsp;&nbsp;&nbsp;v1.9.8 [Public Release]</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="subtitle2">
              • Added Chapter 2 of the Story game mode. <br />
              • Added NEW hat style: Sugegasa Black. Which can be purchased normally after unlocking Sugegasa by completing Chapter 2 with a perfect score. <br />
              • Added NEW full skin: Spiderkrit Black Suit. <br />
              • Minor tweaks & improvements.
            </Typography>
          </AccordionDetails>
        </Accordion>
        {/* ========================= */}
        {/* ========================= */}
        <Accordion>
          <AccordionSummary
            expandIcon={<CaretDown size={24} />}
            aria-controls="accordion-20-content"
            id="accordion-20-header"
          >
            <Typography variant="body2">(16/10/17)&nbsp;&nbsp;&nbsp;v1.9.9 [Public Release]</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="subtitle2">
              • Fixed critical issue with the game failing to start on Android version 7.0 and above.
            </Typography>
          </AccordionDetails>
        </Accordion>
        {/* ========================= */}
        {/* ========================= */}
        <Accordion>
          <AccordionSummary
            expandIcon={<CaretDown size={24} />}
            aria-controls="accordion-21-content"
            id="accordion-21-header"
          >
            <Typography variant="body2">(28/10/17)&nbsp;&nbsp;&nbsp;v2.0.0 [Public Release]</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="subtitle2">
              • Added a new Hat style: Captain's Hat.
            </Typography>
          </AccordionDetails>
        </Accordion>
        {/* ========================= */}
        {/* ========================= */}
        <Accordion>
          <AccordionSummary
            expandIcon={<CaretDown size={24} />}
            aria-controls="accordion-22-content"
            id="accordion-22-header"
          >
            <Typography variant="body2">(02/03/18)&nbsp;&nbsp;&nbsp;v2.5.0 [Public Release]</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="subtitle2">
              <b>*** ONLINE MODE ADDED ***</b> <br />
              • Many minor optimizations. <br />
              • Fixed bug of Android native back button not working in certain rooms. <br />
              • Added 4 NEW Hooks! <br />
              • Added a new items display layout in Wardrobe room. <br />
              • Cleavers no longer have the 50% chance to throw back at the other player in multi-player game modes. <br />
              • Added a new item, Coconade, in multi-player game modes. <br />
              • Added category sorting for game modes in Game Zone; NEW Online multi-player mode added! <br />
              • New permission required: Get Accounts. For the online multi-player mode.
            </Typography>
          </AccordionDetails>
        </Accordion>
        {/* ========================= */}
        {/* ========================= */}
        <Accordion>
          <AccordionSummary
            expandIcon={<CaretDown size={24} />}
            aria-controls="accordion-23-content"
            id="accordion-23-header"
          >
            <Typography variant="body2">(19/09/18)&nbsp;&nbsp;&nbsp;v2.6.0</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="subtitle2">
              • Test (codes porting [GM2] - internal).
            </Typography>
          </AccordionDetails>
        </Accordion>
        {/* ========================= */}
        {/* ========================= */}
        <Accordion>
          <AccordionSummary
            expandIcon={<CaretDown size={24} />}
            aria-controls="accordion-24-content"
            id="accordion-24-header"
          >
            <Typography variant="body2">(20/09/18)&nbsp;&nbsp;&nbsp;v2.6.1</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="subtitle2">
              • Test (codes porting [GM2] - internal).
            </Typography>
          </AccordionDetails>
        </Accordion>
        {/* ========================= */}
        {/* ========================= */}
        <Accordion>
          <AccordionSummary
            expandIcon={<CaretDown size={24} />}
            aria-controls="accordion-25-content"
            id="accordion-25-header"
          >
            <Typography variant="body2">(26/09/18)&nbsp;&nbsp;&nbsp;v2.6.2 [Public Release]</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="subtitle2">
              IMPORTANT: Our vendor has changed their game engine. Had to port the game over as the old game engine will no longer be supported anymore. There are many compatibility issues porting over. I managed to fix most of them. If you do encounter any, please let me know and I'll fix it asap. Game has been updated to the new Google SDK rules and GDPR requirements.
              • Online mode removed due to some complication from the porting. <br />
              • Vibrations removed due to some complication from the porting. <br />
              • Added NEW full skin: Justice Franko.
            </Typography>
          </AccordionDetails>
        </Accordion>
        {/* ========================= */}
        {/* ========================= */}
        <Accordion>
          <AccordionSummary
            expandIcon={<CaretDown size={24} />}
            aria-controls="accordion-26-content"
            id="accordion-26-header"
          >
            <Typography variant="body2">(04/10/18)&nbsp;&nbsp;&nbsp;v2.6.3 [Public Release]</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="subtitle2">
              • Fixed a small bug in the Wardrobe room. <br />
              • Texture drawing optimization. <br />
              • Updated game Credits room.
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
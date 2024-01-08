import React from "react";
import { Box, Divider, Stack, Typography } from "@mui/material";

import BodyWrapper from "../../../components/body-wrapper";
import Image from "../../../components/image/image";
import Spacer from "../../../components/spacer";
import YoutubeEmbed from "../../../components/youtube-embed";
import ImageGallery from "../../../components/image-gallery";

import Artwork from "../../../assets/images/games/fem-artwork-2.png";
import AppIcon from "../../../assets/images/games/game-frankrit-eats-meat.png";
import JayProfilePic from "../../../assets/images/games/dev-jay-r.png";
import CameronProfilePic from "../../../assets/images/games/dev-cameron-e.png";
import GerardProfilePic from "../../../assets/images/games/dev-gerard-n.png";
import { imageList as Gallery } from "../../../assets/images/games/game-fem-presskit/gallery-game-fem-presskit";

import { PATH_WEBPAGE } from "../../../routes/paths";


// ---------------------------------------------------------

const FrankritEatsMeatPresskit = () => {
  return (
    <>
      <BodyWrapper>
        <Image src={Artwork} />

        <Spacer amount={10} />

        <Stack direction={"row"}>
          <Stack width={"25%"}>
            <Typography variant="h6">
              ❖ FACTSHEET ❖
            </Typography>

            <Spacer amount={30} />

            <Typography variant="body2">
              <b>Developer</b>
            </Typography>
            <Typography variant="body2">
              J. Games Entertainment
              <br />
              Based in Singapore
            </Typography>

            <Spacer amount={30} />

            <Typography variant="body2">
              <b>Release Date</b>
            </Typography>
            <Typography variant="body2">
              12 March, 2017
            </Typography>

            <Spacer amount={30} />

            <Typography variant="body2">
              <b>Platforms</b>
            </Typography>
            <Typography variant="body2">
              Android
            </Typography>

            <Spacer amount={30} />

            <Typography variant="body2">
              <b>Website</b>
            </Typography>
            <Typography variant="body2">
              <a href="https://play.google.com/store/apps/details?id=com.jgamesentertainment.frankriteatsmeat" target="_blank">Play Store</a>
            </Typography>

            <Spacer amount={30} />

            <Typography variant="body2">
              <b>Price</b>
            </Typography>
            <Typography variant="body2">
              Free To Play
            </Typography>
          </Stack>

          <Stack width={"75%"}>
            <Typography variant="h6">
              ❖ DESCRIPTION ❖
            </Typography>
            <Spacer amount={10} />
            <Typography variant="body2">
              Frankrit, a gentle grotesque giant, created in an unorthodox scientific experiment finds himself stranded on a small island surrounded by vast ocean. His grumpy rumbling tummy growls for meat. He sees all sorts of meat delicacies flying around him. Is this abnormality real or just a mirage? No one knows. Feed him the meat he desires by hooking it!
            </Typography>

            <Spacer amount={30} />

            <Typography variant="h6">
              ❖ HISTORY ❖
            </Typography>
            <Spacer amount={10} />
            <Typography variant="body2">
              The idea behind this game was to create something very simple that was easy to be grasped by anyone. A game that everyone can play and will play repeatedly which relies heavily on its own unique replay factor. In other words, we wanted a fun and enjoyable pocket "time-killer".
              <br /><br />
              Either you are waiting for someone or something to happen, or you are in a short (perhaps long) bus / train ride, or you just have all the time in the world, this game will be right for you!
            </Typography>

            <Spacer amount={30} />

            <Typography variant="h6">
              ❖ FEATURES ❖
            </Typography>
            <Spacer amount={10} />
            <Typography variant="body2">
              ◆ <b><i>SURVIVE</i></b> &nbsp; by hooking randomly flying Meats to stay alive.<br />
              ◆ <b><i>UPGRADE</i></b> &nbsp; your hook's size and speed to stay ahead of the game.<br />
              ◆ <b><i>AVOID</i></b> &nbsp; mysterious 'The Things' that hurt you, which can eventually kill your gentle grotesque giant!<br />
              ◆ <b><i>COLLECT</i></b> &nbsp; rare Gems that spawns in-game.<br />
              ◆ <b><i>UNLOCK</i></b> &nbsp; unique skins to customize Frankrit to suit your playstyle.<br />
              ◆ <b><i>COMPETE</i></b> &nbsp; with others globally to see who conquers the top spot of best Hook Streak, Gluttony & Undying!
            </Typography>
          </Stack>
        </Stack>

        <Spacer amount={30} />
        <Divider />
        <Spacer amount={20} />

        <Stack spacing={3}>
          <Typography variant="h6">
            ❖ VIDEO ❖
          </Typography>

          <YoutubeEmbed embedId={"-DjaTHVWxrA"} />
        </Stack>

        <Spacer amount={30} />
        <Divider />
        <Spacer amount={20} />

        <Stack spacing={3}>
          <Typography variant="h6">
            ❖ IMAGES ❖
          </Typography>

          <ImageGallery imageSet={Gallery} columns={2} aspectRatio={16 / 9} objectFit={"contain"} />
        </Stack>

        <Spacer amount={30} />
        <Divider />
        <Spacer amount={20} />

        <Stack spacing={3} alignItems={"start"} justifyContent={"start"}>
          <Typography variant="h6">
            ❖ LOGO / ICON ❖
          </Typography>

          <Box>
            <Image
              src={AppIcon}
              height={180}
            />
          </Box>
        </Stack>

        <Spacer amount={30} />
        <Divider />
        <Spacer amount={20} />

        <Stack spacing={3}>
          <Typography variant="h6">
            ❖ ADDITIONAL LINKS ❖
          </Typography>

          <Stack>
            <Typography variant="body2">
              <a href="https://soundcloud.com/adetokunbo-adeshile/la2a-11-interview-with-jay-r-creator-of-frankrit-eats-mobile-video-game" target="_blank">Interview Podcast #1</a>
              &nbsp;- Interviewed by&nbsp;
              <a href="https://soundcloud.com/adetokunbo-adeshile" target="_blank">Life According to Adeshile</a>.
            </Typography>

            <Typography variant="body2">
              <a href="https://thegamemakerpodcast.blogspot.com/2017/04/episode-3-of-gamemaker-podcast-news.html" target="_blank">Interview Podcast #2</a>
              &nbsp;- Interviewed by Jim from&nbsp;
              <a href="https://thegamemakerpodcast.blogspot.com/" target="_blank">The Gamemaker Podcast</a>.
            </Typography>

            <Typography variant="body2">
              <a href={`#${PATH_WEBPAGE.playgroundSubpage.gameFrankritEatsMeat}`} target="_blank">Game Homepage</a>
              &nbsp;- A simple homepage for the game with FAQs, etc.
            </Typography>

            <Typography variant="body2">
              <a href="https://www.instagram.com/vindorable/" target="_blank">Instagram</a>
              &nbsp;- Developer's (Jay R.) personal account where game updates are posted.
            </Typography>
          </Stack>
        </Stack>

        <Spacer amount={30} />
        <Divider />
        <Spacer amount={20} />

        <Stack spacing={3}>
          <Typography variant="h6">
            ❖ ABOUT J. GAMES ENTERTAINMENT ❖
          </Typography>

          <Stack>
            <Typography variant="body2">
              J. Games Entertainment was founded by Jay R. and built with the great support of two very close associates, Cameron and Gerard, who have helped through the process of making the game Frankrit Eats Meat <i>(and another abandoned game Desare)</i>.
              <br /><br />
              Both Cameron and Gerard have their own commitments and goals to achieve in life, as such J. Games Entertainment will be handled solely by Jay R. in the long term. Despite both of them going their separate ways to make their own mark in History, they will always be a part of the foundation that this Brand has built upon.
              <br /><br />
              Our goal is to provide a simple yet highly engaging, relying heavily on each game's unique replay factor, gaming experience for everyone.
            </Typography>
          </Stack>
        </Stack>

        <Spacer amount={30} />
        <Divider />
        <Spacer amount={20} />

        <Stack spacing={3}>
          <Typography variant="h6">
            ❖ CREDITS ❖
          </Typography>

          <Stack spacing={3}>
            <Stack direction={"row"} alignItems={"center"} justifyContent={"space-evenly"}>
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
        </Stack>

        <Spacer amount={30} />
        <Divider />
        <Spacer amount={20} />

        <Stack spacing={3}>
          <Typography variant="h6">
            ❖ CONTACT ❖
          </Typography>

          <Stack>
            <Typography variant="body2"><b>E-mail</b></Typography>
            <Typography variant="body2">
              j.raj93.designer@gmail.com
            </Typography>
          </Stack>

          <Stack>
            <Typography variant="body2"><b>Whatsapp</b></Typography>
            <Typography variant="body2">
              (+65) 8298 4663
            </Typography>
          </Stack>
        </Stack>
      </BodyWrapper>
    </>
  );
}


// ---------------------------------------------------------

export default FrankritEatsMeatPresskit;
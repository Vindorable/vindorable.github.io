import React from "react";
import { Box, Button, Divider, Stack, Typography } from "@mui/material";
import { DevToLogo, Gavel } from "@phosphor-icons/react";

import BodyWrapper from "../../../components/body-wrapper";
import Image from "../../../components/image/image";
import Spacer from "../../../components/spacer";

import { IsMobile } from "../../../functions/isMobile";

import JGamesLogo from "../../../assets/images/games/general/jgames-logo.png";
import FrankritEatsMeat from "../../../assets/images/games/frankrit-eats-meat/game-app-icon.png";
import SharkABoom from "../../../assets/images/games/shark-a-boom/game-app-icon.png";
import DinoWithAGun from "../../../assets/images/games/dino-with-a-gun/game-app-icon.png";

import { PATH_WEBPAGE } from "../../../routes/paths";
import { useNavigate } from "react-router-dom";


// ---------------------------------------------------------

const Games = () => {
  const navigate = useNavigate();

  return (
    <>
      <BodyWrapper>
        <Image src={JGamesLogo} height={300} />

        {/* <Box>
          <Button
            disableElevation
            variant="outlined"
            startIcon={<DevToLogo size={28} />}
            onClick={() => navigate(PATH_WEBPAGE.playgroundSubpage.gameDevJourney)}
          >
            My Journey as a Solo Indie Game Dev
          </Button>
        </Box> */}

        <Box>
          <Button
            disableElevation
            variant="outlined"
            startIcon={<Gavel size={28} />}
            onClick={() => navigate(PATH_WEBPAGE.playgroundSubpage.gamePrivacyPolicy)}
          >
            Games Privacy Policy
          </Button>
        </Box>

        <Spacer amount={10} />
        <Divider />

        <Typography variant="body2">
          These are the games I created as a solo indie game dev over the years.
        </Typography>

        <Stack direction={IsMobile() ? "column" : "row"} p={2} spacing={3}>
          <Image
            src={FrankritEatsMeat}
            height={IsMobile() ? "100%" : "180px"}
            url={PATH_WEBPAGE.playgroundSubpage.gameFrankritEatsMeat}
          />
          <Image
            src={SharkABoom}
            height={IsMobile() ? "100%" : "180px"}
            url={PATH_WEBPAGE.playgroundSubpage.gameSharkABoom}
          />
          <Image
            src={DinoWithAGun}
            height={IsMobile() ? "100%" : "180px"}
            url={PATH_WEBPAGE.playgroundSubpage.gameDinoWithAGun}
          />
        </Stack>
      </BodyWrapper>
    </>
  );
}


// ---------------------------------------------------------

export default Games;
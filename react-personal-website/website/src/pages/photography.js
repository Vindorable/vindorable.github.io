import React from "react";
import { Divider, Stack, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";

import BodyWrapper from "../components/body-wrapper";
import ImageGallery from "../components/image-gallery";
import Image from "../components/image/image";
import Spacer from "../components/spacer";

import { imageList as TriathlonSingapore } from "../assets/images/photography/client-work/triathlon-singapore/folio";
import TriathlonSingaporeLogo from "../assets/images/photography/client-work/triathlon-singapore/logo.png";
import { imageList as InterNationsSingapore } from "../assets/images/photography/client-work/internations-singapore/folio";
import InterNationsSingaporeLogo from "../assets/images/photography/client-work/internations-singapore/logo.png";
import { imageList as Pets } from "../assets/images/photography/personal/pets/folio";
import { imageList as Cars } from "../assets/images/photography/personal/cars/folio";
import { imageList as Others } from "../assets/images/photography/personal/others/folio";


// ---------------------------------------------------------

const Photography = () => {
  const theme = useTheme();

  return (
    <>
      <BodyWrapper>
        <Typography variant="caption">August 23, 2019</Typography>

        <Typography variant="h5">CLIENTS WORK</Typography>

        <Stack
          spacing={1}
          p={2}
          sx={{
            borderRadius: "8px",
            border: 1,
            borderColor: theme.palette.divider,
          }}
        >
          <Image src={TriathlonSingaporeLogo} />
          <Typography inline align="center" variant="body2">Triathlon Association of Singapore 🏃🚴🏊</Typography>
          <ImageGallery
            imageSet={TriathlonSingapore}
            height={164}
            width={164}
          />
        </Stack>

        <Stack
          spacing={1}
          p={2}
          sx={{
            borderRadius: "8px",
            border: 1,
            borderColor: theme.palette.divider,
          }}
        >
          <Image src={InterNationsSingaporeLogo} />
          <Typography inline align="center" variant="body2">InterNations Singapore 🌍🌎🌏</Typography>
          <ImageGallery
            imageSet={InterNationsSingapore}
            height={164}
            width={164}
          />
        </Stack>

        <Spacer amount={20} />
        <Divider />
        <Spacer amount={20} />

        <Typography variant="h5">PERSONAL WORK</Typography>

        <Typography variant="body2">Pets 🐶🐱</Typography>
        <ImageGallery
          imageSet={Pets}
          height={164}
          width={164}
        />

        <Typography variant="body2">Automóvil 🏎️🚗</Typography>
        <ImageGallery
          imageSet={Cars}
          height={164}
          width={164}
        />

        <Typography variant="body2">Others 🤘🤙</Typography>
        <ImageGallery
          imageSet={Others}
          height={164}
          width={164}
        />
      </BodyWrapper>
    </>
  );
}


// ---------------------------------------------------------

export default Photography;
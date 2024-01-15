import React from "react";
import { CardMedia, Divider, Stack, Typography } from "@mui/material";

import BodyWrapper from "../components/body-wrapper";
import Spacer from "../components/spacer";


// ---------------------------------------------------------

const TronDAOStickers = () => {
  const winkies = [
    {
      link: "https://i.imgur.com/y66DPuA.mp4"
    },
    {
      link: "https://i.imgur.com/jhHSUjH.mp4"
    },
    {
      link: "https://i.imgur.com/ZLtmcTS.mp4"
    },
    {
      link: "https://i.imgur.com/TG0lIUh.mp4"
    },
    {
      link: "https://i.imgur.com/hu1dVCe.mp4"
    },
    {
      link: "https://i.imgur.com/gHIQMf9.mp4"
    },
    {
      link: "https://i.imgur.com/lQFqc4Q.mp4"
    },
  ]

  const tronbull = [
    {
      link: "https://i.imgur.com/VKk6g3c.mp4"
    },
    {
      link: "https://i.imgur.com/hpJXN3N.mp4"
    },
    {
      link: "https://i.imgur.com/Xf9vaXI.mp4"
    },
  ]

  return (
    <>
      <BodyWrapper>
        <Typography inline align="center" variant="h6">Winky</Typography>
        <Spacer amount={10} />
        <Stack
          direction={"row"}
          useFlexGap
          flexWrap="wrap"
          spacing={2}
          justifyContent={"space-evenly"}
        >
          {winkies.map((item, index) => (
            <CardMedia
              key={index}
              component='video'
              image={item.link}
              autoPlay
              muted
              loop
              //controls
              sx={{ width: "auto", height: "200px", borderRadius: "16px" }}
            />
          ))}
        </Stack>

        <Spacer amount={30} />
        <Divider />
        <Spacer amount={20} />

        <Typography inline align="center" variant="h6">Tronbull</Typography>
        <Spacer amount={10} />
        <Stack
          direction={"row"}
          useFlexGap
          flexWrap="wrap"
          spacing={2}
          justifyContent={"space-evenly"}
        >
          {tronbull.map((item, index) => (
            <CardMedia
              key={index}
              component='video'
              image={item.link}
              autoPlay
              muted
              loop
              //controls
              sx={{ width: "auto", height: "200px", borderRadius: "16px" }}
            />
          ))}
        </Stack>
      </BodyWrapper>
    </>
  );
}


// ---------------------------------------------------------

export default TronDAOStickers;
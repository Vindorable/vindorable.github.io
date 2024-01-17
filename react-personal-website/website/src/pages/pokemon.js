import React from "react";
import { Divider, List, ListItem, Stack, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";

import PlaygroundSidebar from "../components/playground-sidebar";
import BodyWrapper from "../components/body-wrapper";
import ImageGallery from "../components/image-gallery";
import YoutubeEmbed from "../components/youtube-embed";
import Spacer from "../components/spacer";

import GifAron from "../assets/images/pokemon/gifs/aron.gif"
import GifLairon from "../assets/images/pokemon/gifs/lairon.gif"
import GifAggron from "../assets/images/pokemon/gifs/aggron.gif"
import GifMegaAggron from "../assets/images/pokemon/gifs/mega-aggron.gif"
import GifCharmander from "../assets/images/pokemon/gifs/charmander.gif"
import GifCharmeleon from "../assets/images/pokemon/gifs/charmeleon.gif"
import GifCharizard from "../assets/images/pokemon/gifs/charizard.gif"

import { imageList as PokemonImages } from "../assets/images/pokemon/gallery-ig";


// ---------------------------------------------------------

const Pokemon = () => {
  const theme = useTheme();

  return (
    <>
      {/* <PlaygroundSidebar /> */}

      <BodyWrapper>
        <Typography variant="h5">
          THE BACKGROUND STORY
        </Typography>

        <Typography variant="h6">
          Why Pokemon?
        </Typography>
        <Stack p={0.75}>
          <Typography variant="body2">
            The first ever gaming console I had as a kid was the Gameboy Advance SP, along with a fake copy (I seriously thought it was genuine tho..) of the Pokemon Emerald Version game cartridge.
            <br /><br />
            So naturally, I got addicted to it and fell in love with Pokemon!
          </Typography>
        </Stack>

        <Divider sx={{ visibility: "hidden" }} />

        <Typography variant="h6">
          My Favourite Pokemons?
        </Typography>
        <Stack p={0.75}>
          <Typography variant="body2">
            Aron and the naughty little Charmander!
          </Typography>
          <Spacer amount={5} />
          <Stack
            direction={"row"}
            spacing={2}
            alignItems={"end"}
            useFlexGap
            flexWrap="wrap"
          >
            <img src={GifAron} />
            <img src={GifLairon} />
            <img src={GifAggron} />
            <img src={GifMegaAggron} />
          </Stack>
          <Spacer amount={5} />
          <Stack
            direction={"row"}
            spacing={2}
            alignItems={"end"}
            useFlexGap
            flexWrap="wrap"
          >
            <img src={GifCharmander} />
            <img src={GifCharmeleon} />
            <img src={GifCharizard} />
          </Stack>
        </Stack>

        <Divider sx={{ visibility: "hidden" }} />

        <Typography variant="h6">
          My Pokemon team?
        </Typography>
        <Stack p={0.75}>
          <Typography variant="body2">
            <List sx={{ listStyleType: 'disc', padding: "0" }}>
              <ListItem sx={{ display: 'list-item', listStylePosition: "inside", padding: "0" }}>
                Aggron
              </ListItem>
              <ListItem sx={{ display: 'list-item', listStylePosition: "inside", padding: "0" }}>
                Charizard
              </ListItem>
              <ListItem sx={{ display: 'list-item', listStylePosition: "inside", padding: "0" }}>
                Dusknoir
              </ListItem>
              <ListItem sx={{ display: 'list-item', listStylePosition: "inside", padding: "0" }}>
                Metagross
              </ListItem>
              <ListItem sx={{ display: 'list-item', listStylePosition: "inside", padding: "0" }}>
                Kyogre
              </ListItem>
              <ListItem sx={{ display: 'list-item', listStylePosition: "inside", padding: "0" }}>
                Golem
              </ListItem>
            </List>
          </Typography>
        </Stack>

        <Divider />

        <Typography variant="h5">
          MY POKEMON FAN-WORKS
        </Typography>

        <Typography variant="h6">
          Adding 3D Pokemons To Real-Life Images, Etc (2019)
        </Typography>
        <Stack direction={"row"} justifyContent={"space-evenly"}>
          <ImageGallery
            imageSet={PokemonImages}
            height={164}
            width={164}
          />
        </Stack>

        <Typography variant="h6">
          Live-action with Charmander - My First Starter (2019)
        </Typography>
        <Stack direction={"row"} justifyContent={"space-evenly"} width={"100%"}>
          <Stack width={"100%"} maxWidth={"800px"}>
            <YoutubeEmbed embedId={"E7GK102Bw-E"} />
          </Stack>
        </Stack>

        <Typography variant="h6">
          Outros for my YouTube Videos with Aron (2015)
        </Typography>
        <Stack p={0.75}>
          <Typography variant="body2">
            There was a time when I was really free... Ahh, how I wish I could go back in time... *snap* Oh sorry!
            <br /><br />
            So, these are the couple of different outros I did for my YouTube videos.
          </Typography>
        </Stack>
        <Stack direction={"row"} justifyContent={"space-evenly"} width={"100%"}>
          <Stack width={"100%"} maxWidth={"800px"}>
            <YoutubeEmbed embedId={"foiH9YqUvs4?rel=0&showinfo=0&autohide=1&start=102"} />
          </Stack>
        </Stack>
        <Stack direction={"row"} justifyContent={"space-evenly"} width={"100%"}>
          <Stack width={"100%"} maxWidth={"800px"}>
            <YoutubeEmbed embedId={"2O1720q1vpA?rel=0&showinfo=0&autohide=1&start=137"} />
          </Stack>
        </Stack>
      </BodyWrapper>
    </>
  );
}


// ---------------------------------------------------------

export default Pokemon;
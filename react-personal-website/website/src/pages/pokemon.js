import React from "react";
import { Divider, List, ListItem, Stack, Typography } from "@mui/material";

import PlaygroundSidebar from "../components/playground-sidebar";
import ImageGallery from "../components/image-gallery";
import YoutubeEmbed from "../components/youtube-embed";

import { imageList as PokemonImages } from "../assets/images/gallery-pokemon";


// ---------------------------------------------------------

const Pokemon = () => {
  return (
    <>
      <PlaygroundSidebar />

      <Stack
        p={2}
        sx={{
          width: "100vw",
          maxWidth: "100%", // This is very Important else there will be the 100vw scrollbar issue.
        }}
      >
        <Stack
          direction={"row"}
          sx={{ width: "100%" }}
          justifyContent={"space-evenly"}
        >
          <Stack
            spacing={1}
            p={3}
            sx={{
              backgroundColor: "#F8FAFF",
              boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)",
              width: {
                xs: "auto", // 0px
                md: "80%",  // 900px
                lg: "60%",  // 1200px
              },
            }}
          >
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

            <Stack direction={"row"} justifyContent={"space-evenly"}>
              <ImageGallery
                imageSet={PokemonImages}
                height={164}
                width={164}
              />
            </Stack>

            <Stack direction={"row"} justifyContent={"space-evenly"}>
              <Stack width={"60%"}>
                <YoutubeEmbed embedId={"E7GK102Bw-E"} />
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </>
  );
}


// ---------------------------------------------------------

export default Pokemon;
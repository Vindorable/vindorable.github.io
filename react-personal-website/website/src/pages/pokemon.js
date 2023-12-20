import React from "react";
import { Divider, List, ListItem, Stack, Typography } from "@mui/material";

import PlaygroundSidebar from "../components/playground-sidebar";
import ImageGallery from "../components/image-gallery";

import { imageList as PokemonImages } from "../assets/images/gallery-pokemon";


// ---------------------------------------------------------

const Pokemon = () => {
  return (
    <>
      <PlaygroundSidebar />

      <Stack p={2}>
        <Stack
          direction={"row"}
          sx={{ width: "100vw" }}
          justifyContent={"space-evenly"}
        >
          <Stack
            spacing={1}
            p={3}
            sx={{
              backgroundColor: "#F8FAFF",
              boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)",
              width: "60%",
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
                padding={8}
                columns={5}
                height={164}
                width={164}
              />
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </>
  );
}


// ---------------------------------------------------------

export default Pokemon;
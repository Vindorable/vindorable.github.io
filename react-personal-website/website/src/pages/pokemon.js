import React from "react";
import { Stack } from "@mui/material";

import ImageGallery from "../components/image-gallery";

import { imageList as PokemonImages } from "../assets/images/gallery-pokemon";


// ---------------------------------------------------------

const Pokemon = () => {
  return (
    <>
      Pokemon
      <Stack direction={"row"} justifyContent={"space-evenly"}>
        <ImageGallery
          imageSet={PokemonImages}
          padding={8}
          columns={5}
          height={164}
          width={164}
        />
      </Stack>
    </>
  );
}


// ---------------------------------------------------------

export default Pokemon;
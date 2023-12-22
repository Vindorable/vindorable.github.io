import React from "react";
import { Box, Divider, Stack, Typography, } from "@mui/material";

import ImageGallery from "./image-gallery";


// ---------------------------------------------------------

const DSTModData = ({ modBanner, modName, modShortDesc, modDescArt, modScreenshots, modLongDesc }) => {
  return (
    <>
      <Stack spacing={1.25}>
        <Box
          component="img"
          sx={{ width: "100%", height: "auto" }}
          alt=""
          src={modBanner}
          style={{ borderRadius: "8px" }}
        />

        <Divider />

        <Typography variant="h6">{modName}</Typography>
        <Stack p={0.75}>
          <Typography variant="body2">{modShortDesc}</Typography>
        </Stack>

        <Divider />

        <Stack direction={"row"}>
          <Stack width={"70%"}>
            <Box
              component="img"
              sx={{ width: "100%", height: "auto" }}
              alt=""
              src={modDescArt}
            />
          </Stack>
          <Stack width={"30%"}>
            <ImageGallery
              imageSet={modScreenshots}
              height={164}
              width={164}
              columns={2}
            />
          </Stack>
        </Stack>

        <Typography variant="h6">Description</Typography>
        <Stack p={0.75}>
          <Typography variant="body2">{modLongDesc}</Typography>
        </Stack>
      </Stack>
    </>
  );
}


// ---------------------------------------------------------

export default DSTModData;
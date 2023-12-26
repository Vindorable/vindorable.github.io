import React, { useState } from "react";
import { Box, Button, Divider, Stack, Typography, } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { ArrowElbowLeft } from "phosphor-react";

import ImageGallery from "./image-gallery";


// ---------------------------------------------------------

const DSTModData = ({ modBanner, modName, modShortDesc, modDescArt, modScreenshots, modLongDesc, steamWorkshopLink, changelogImgLink }) => {
  const theme = useTheme();

  const [showChangelog, setShowChangelog] = useState(false);

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

        <Box>
          <Button
            disableElevation
            variant="outlined"
            startIcon={<ArrowElbowLeft />}
            onClick={() => window.open(steamWorkshopLink, "_blank")}
          >
            Steam Workshop Link
          </Button>
        </Box>

        <Box
          p={1}
          sx={{
            borderRadius: "8px",
            border: 1,
            borderColor: theme.palette.divider,
          }}
        >
          <Stack spacing={1}>
            <Box>
              <Button onClick={() => setShowChangelog(prev => !prev)}>
                {showChangelog ? "Hide Changelog" : "View Changelog"}
              </Button>
            </Box>

            {showChangelog &&
              <Box
                component="img"
                sx={{ width: "630px", maxWidth: "100%", height: "auto" }}
                alt=""
                src={changelogImgLink}
                style={{ borderRadius: "8px" }}
              />
            }
          </Stack>
        </Box>
      </Stack>
    </>
  );
}


// ---------------------------------------------------------

export default DSTModData;
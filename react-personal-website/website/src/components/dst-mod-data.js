import React, { useState } from "react";
import { Box, Button, Divider, Stack, Typography, } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { ArrowElbowLeft } from "phosphor-react";

import ImageGallery from "./image-gallery";
import Spacer from "./spacer";

import { IsMobile } from "../functions/isMobile";


// ---------------------------------------------------------

const DSTModData = ({ modBanner, modName, modShortDesc, modDescArt, modScreenshots, modLongDesc, steamWorkshopLink, changelogImgLink, others }) => {
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

        <Spacer amount={5} />
        <Divider />

        <Typography variant="h6">{modName}</Typography>
        <Stack p={0.75}>
          <Typography variant="body2">{modShortDesc}</Typography>
        </Stack>

        <Divider />
        <Spacer amount={5} />

        <>{(modDescArt || modScreenshots) &&
          <Stack
            direction={IsMobile() ? "column" : "row"}
            spacing={IsMobile() ? 3 : 0}
          >
            <>{modDescArt &&
              <Stack width={IsMobile() ? "100%" : "70%"}>
                <Box
                  component="img"
                  sx={{ width: "100%", height: "auto" }}
                  alt=""
                  src={modDescArt}
                />
              </Stack>
            }</>
            <>{modScreenshots &&
              <Stack width={IsMobile() ? "100%" : "30%"}>
                <ImageGallery
                  imageSet={modScreenshots}
                  height={200}
                  width={200}
                  columns={1}
                  aspectRatio={16 / 9}
                />
              </Stack>
            }</>
          </Stack>
        }</>

        <>{modLongDesc && <>
          <Spacer amount={5} />
          <Typography variant="h6">Description</Typography>
          <Stack p={0.75}>
            <Typography variant="body2">{modLongDesc}</Typography>
          </Stack>
        </>}</>

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

        <>{changelogImgLink &&
          // <Box
          //   p={1}
          //   sx={{
          //     borderRadius: "8px",
          //     border: 1,
          //     borderColor: theme.palette.divider,
          //   }}
          // >
          //   <Stack spacing={1}>
          //     <Box>
          //       <Button onClick={() => setShowChangelog(prev => !prev)}>
          //         {showChangelog ? "Hide Changelog" : "View Changelog"}
          //       </Button>
          //     </Box>

          //     {showChangelog &&
          //       <Box
          //         component="img"
          //         sx={{ width: "630px", maxWidth: "100%", height: "auto" }}
          //         alt=""
          //         src={changelogImgLink}
          //         style={{ borderRadius: "8px" }}
          //       />
          //     }
          //   </Stack>
          // </Box>
          <>
            <Spacer />
            <Box
              component="img"
              sx={{ width: "630px", maxWidth: "100%", height: "auto" }}
              alt=""
              src={changelogImgLink}
              style={{ borderRadius: "8px" }}
            />
          </>
        }</>

        <Box sx={{ width: "100%", height: "auto" }}>
          {others}
        </Box>
      </Stack>
    </>
  );
}


// ---------------------------------------------------------

export default DSTModData;
import React from "react";
import { Box, Stack } from "@mui/material";


// https://stackoverflow.com/a/75863103
// ---------------------------------------------------------

const YoutubeEmbed = ({ embedId }) => {
  return (
    <Stack width={"100%"} alignItems={"center"} justifyContent={"center"}>
      <Stack width={"100%"} maxWidth={"600px"}>
        <Box
          sx={{
            position: "relative",
            width: "100%",
            paddingBottom: "56.25%", // 9/16 * 100% for 16:9 aspect ratio
          }}
        >
          <iframe
            src={`https://www.youtube.com/embed/${embedId}`}
            title="YouTube video player"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              border: 0,
            }}
          />
        </Box>
      </Stack>
    </Stack>
  );
}


// ---------------------------------------------------------

export default YoutubeEmbed;
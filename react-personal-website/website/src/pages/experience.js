import React from "react";
import { Box, Button, Divider, Stack, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { FileArrowDown } from "phosphor-react";
import { ReadCvLogo } from "@phosphor-icons/react";

import BodyWrapper from "../components/body-wrapper";
import Spacer from "../components/spacer";
import ExperienceTimeline from "../components/experience-timeline";
import ExperienceCertification from "../components/experience-certification";
import ExperienceProficiency from "../components/experience-proficiency";
import ExperienceProfile from "../components/experience-profile";

import { IsMobile } from "../functions/isMobile";

const ResumeFilePDF = "http://localhost:3000/jayraj-resume.pdf"
//const ResumeFileDocx = "http://localhost:3000/jayraj-resume.docx"


// ---------------------------------------------------------

const Experience = () => {
  const theme = useTheme();

  // https://www.youtube.com/watch?v=IPEqb_AJbAQ
  // Note: If user have IDM (Internet Download Manager), it will intercept the download and the browser downloads an empty PDF file.
  //       To test if download is working remove the PDF extension from IDM:
  //        ... open IDM > Downloads > Options > File types (remove PDF here)
  const downloadFileFromURL = (url) => {
    fetch(url)
      .then((response) => response.blob())
      .then((response) => {
        const blob = new Blob([response], { type: "application/pdf" })
        const fileName = url.split("/").pop();
        const link = document.createElement("a");
        link.download = fileName;
        link.href = URL.createObjectURL(blob);
        link.click();
        link.remove();
      })
  }

  return (
    <>
      <BodyWrapper>
        <Box
          p={2}
          sx={{
            borderRadius: "8px",
            border: 1,
            borderColor: theme.palette.divider,
          }}
        >
          <Stack spacing={2}>
            <Stack spacing={1} alignItems={"center"} justifyContent={"center"}>
              <ReadCvLogo size={32} />
              <Typography variant="body2">Resume</Typography>
            </Stack>

            <Divider />

            <Button
              variant="contained"
              color="info"
              startIcon={<FileArrowDown size={26} />}
              onClick={() => downloadFileFromURL(ResumeFilePDF)}
              sx={{ textTransform: "none" }}
            >
              Download a PDF
            </Button>

            {/* <Button
              variant="contained"
              color="info"
              startIcon={<FileArrowDown size={26} />}
              onClick={() => downloadFileFromURL(ResumeFileDocx)}
              sx={{ textTransform: "none" }}
            >
              Download a .docx
            </Button> */}
          </Stack>
        </Box>

        <Spacer amount={10} />
        <ExperienceTimeline />

        {/* <Spacer amount={10} /> */}
        <ExperienceCertification
          HideHealthAndFitness={true}
          HideBusinessAndFinance={true}
        />

        <Spacer amount={10} />
        <Stack direction={!IsMobile() ? "row" : "column"} justifyContent={"space-between"}>
          <Stack spacing={1}>
            <ExperienceProficiency />
          </Stack>

          {IsMobile() && <Spacer amount={20} />}

          <Stack width={"150px"}>
            <ExperienceProfile />
            <Typography inline align="right" variant="caption"><b>Dream • Learn • Grow</b></Typography>
          </Stack>
        </Stack>
      </BodyWrapper>
    </>
  );
}


// ---------------------------------------------------------

export default Experience;
import React from "react";
import { Button, Stack } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { FileArrowDown } from "phosphor-react";

import BodyWrapper from "../components/body-wrapper";

const ResumeFile = "http://localhost:3000/resume.pdf"


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
        <Button
          variant="contained"
          color="info"
          startIcon={<FileArrowDown size={26} />}
          onClick={() => downloadFileFromURL(ResumeFile)}
        >
          Resume
        </Button>
      </BodyWrapper>
    </>
  );
}


// ---------------------------------------------------------

export default Experience;
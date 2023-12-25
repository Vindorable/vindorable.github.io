import React from "react";
import { Button, Stack } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { FileArrowDown } from "phosphor-react";

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
      <Stack
        p={2}
        sx={{
          width: "100vw",
          maxWidth: "100%", // This is very Important else there will be the 100vw scrollbar issue.
          flexGrow: 1,
          height: "100%",
          overflowY: "scroll",
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
              backgroundColor: theme.palette.background.paper,
              boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)",
              width: {
                xs: "auto", // 0px
                md: "80%",  // 900px
                lg: "60%",  // 1200px
              },
            }}
          >
            <Button
              variant="contained"
              color="info"
              startIcon={<FileArrowDown size={26} />}
              onClick={() => downloadFileFromURL(ResumeFile)}
            >
              Resume
            </Button>
          </Stack>
        </Stack>
      </Stack>
    </>
  );
}


// ---------------------------------------------------------

export default Experience;
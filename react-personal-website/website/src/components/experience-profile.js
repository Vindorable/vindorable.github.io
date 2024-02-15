import React from "react";
import { Box } from "@mui/material";

import ProfilePic from "../assets/images/resume/jay-r.jpg";


// ---------------------------------------------------------

const ExperienceProfile = () => {
  return (
    <>
      <Box
        component="img"
        sx={{
          width: "100%",
          height: "auto",
          WebkitFilter: `brightness(90%) contrast(110%) grayscale(80%)`,
          filter: `brightness(90%) contrast(110%) grayscale(80%)`,
        }}
        src={ProfilePic}
        style={{ borderRadius: "8px" }}
      />
    </>
  );
}


// ---------------------------------------------------------

export default ExperienceProfile;
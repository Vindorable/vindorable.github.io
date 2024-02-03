import React from "react";
import { Box, Link, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";

import BodyWrapper from "../components/body-wrapper";
import { NavTab, NavTabs } from "../components/nav-tab";
import Image from "../components/image/image";
import ImageGallery from "../components/image-gallery";

import ProvocationCollage from "../assets/images/unruly-gent/collection-provocation.jpg"
import ShapesCollage from "../assets/images/unruly-gent/collection-shapes.jpg"
import ThreadlessBanner from "../assets/images/unruly-gent/threadless_banner.png"
import { imageList as IGShowcase } from "../assets/images/unruly-gent/gallery-ig";


// ---------------------------------------------------------

const UnrulyGent = () => {
  const theme = useTheme();

  // Tabs.
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <BodyWrapper>
        <Image
          src={ThreadlessBanner}
          url="https://unrulygent.threadless.com/"
        />

        <ImageGallery imageSet={IGShowcase} columns={5} aspectRatio={1 / 1} />
        <Link inline align="end" target="_blank" href="https://www.instagram.com/unruly_gent/" color="inherit" variant="body2">View more @ instagram.com/unruly_gent/</Link>

        <Typography variant="h5">
          COLLECTIONS
        </Typography>
        <NavTabs value={value} onChange={handleChange}>
          <NavTab label="Provocation" />
          <NavTab label="Shapes" />
        </NavTabs>

        <Box sx={{
          padding: "calc(1.25 * 8px)",
          backgroundColor: "rgb(12, 12, 12)",
          borderRadius: "8px",
          boxShadow: `0px 0px 2px ${theme.palette.dividerCustom.strong}`,
          width: "100%",
          height: "auto",
        }}>
          {/* IIFE (Immediately Invoked Function Expressions) */}
          {(() => {
            switch (value) {
              case 0: return <Image src={ProvocationCollage} />
              case 1: return <Image src={ShapesCollage} />
            }
          })()}
        </Box>
      </BodyWrapper>
    </>
  );
}


// ---------------------------------------------------------

export default UnrulyGent;
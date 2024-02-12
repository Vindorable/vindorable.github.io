import React from "react";
import { Box, Link, Stack, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Note } from "phosphor-react";

import BodyWrapper from "../../../components/body-wrapper";
import { NavTab, NavTabs } from "../../../components/nav-tab";
import Image from "../../../components/image/image";
import ImageGallery from "../../../components/image-gallery";
import Spacer from "../../../components/spacer";
import { AnimBox } from "../../../components/anim-box";

import ProvocationCollage from "../../../assets/images/unruly-gent/collection-provocation.jpg"
import ShapesCollage from "../../../assets/images/unruly-gent/collection-shapes.jpg"
import ThreadlessBanner from "../../../assets/images/unruly-gent/threadless_banner.png"
import { imageList as IGShowcase } from "../../../assets/images/unruly-gent/gallery-ig";
import SkullCollarLogo from "../../../assets/images/unruly-gent/skull-collar-logo.png";

import { PATH_WEBPAGE } from "../../../routes/paths";
import { useNavigate } from "react-router-dom";


// ---------------------------------------------------------

const UnrulyGent = () => {
  const theme = useTheme();
  const navigate = useNavigate();

  // Tabs.
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <BodyWrapper>
        <AnimBox>
          <Image
            src={ThreadlessBanner}
            url="https://unrulygent.threadless.com/"
          />
        </AnimBox>

        <Spacer />
        <Image src={SkullCollarLogo} height={300} />
        <Spacer />

        <Typography inline align="center" variant="h5">DON'T BE SORRY. BE VINDICTIVE.</Typography>

        <Typography inline align="center" variant="body2">
          When we are born, we are little angels with aspirations and dreams clenched in our fists.<br />
          No negative emotions; just glad to be born.
          <br /><br />
          As we take a step into life, we learn the reasons behind our anger, disappointment, stress... and grief.<br />
          Our journey towards decay begins.
          <br /><br />
          To survive, we seek a "balance" by relying on our darkness. The Yin in all Yang. In the process of our innocence slowly changing into vindiction and arrogance for the unworthy - we learn the truth.<br />
          <b>The Unruly</b>.
          <br /><br />
          Despite the doings of this modern world, we remain humble and dedicated to the ones who care for us. Their support through our hard times will not be forgotten. After all, we were all born innocent - to be loved.<br />
          <b>The Gentleman</b>.
          <br /><br />
          The brand/label, <b>Unruly Gent</b>, does not tie itself down to a specific theme. We love to venture where our heart takes us. Into the darkness <i>(unruly)</i> or into the light <i>(gent)</i>, we seek a balance in life as we grow.
        </Typography>

        <Spacer />

        <ImageGallery imageSet={IGShowcase} columns={5} aspectRatio={1 / 1} />
        <Link inline align="end" target="_blank" href="https://www.instagram.com/unruly_gent/" color="inherit" variant="body2">View more on Instagram</Link>

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

        <Spacer amount={20} />

        <Typography variant="h5">
          BLOG POSTS
        </Typography>
        <Stack
          px={2}
          spacing={1}
        >
          <Stack direction={"row"} spacing={1}>
            <Note size={28} />
            <Link
              href={"javascript:void(0)"}
              onClick={() => navigate(PATH_WEBPAGE.playgroundSubpage.unrulyGentBlogPost01)}
              color="inherit"
              variant="body2"
            >
              <Typography variant="caption">[2015 • July • 25]</Typography>
              <br />
              After A Long Hiatus
            </Link>
          </Stack>

          <Stack direction={"row"} spacing={1}>
            <Note size={28} />
            <Link
              href={"javascript:void(0)"}
              onClick={() => navigate(PATH_WEBPAGE.playgroundSubpage.unrulyGentBlogPost02)}
              color="inherit"
              variant="body2"
            >
              <Typography variant="caption">[2015 • August • 01]</Typography>
              <br />
              Yin In All Yang Tee First Look
            </Link>
          </Stack>
        </Stack>
      </BodyWrapper>
    </>
  );
}


// ---------------------------------------------------------

export default UnrulyGent;
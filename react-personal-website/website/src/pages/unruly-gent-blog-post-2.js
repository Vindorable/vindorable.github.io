import React from "react";
import { Stack, Typography } from "@mui/material";

import BodyWrapper from "../components/body-wrapper";
import ImageGallery from "../components/image-gallery";
import Spacer from "../components/spacer";
import Image from "../components/image/image";

import { imageList as Gallery } from "../assets/images/unruly-gent/blog/post-2/gallery-1";
import SkullCollarLogo from "../assets/images/unruly-gent/skull-collar-logo.png";


// ---------------------------------------------------------

const UnrulyGentBlogPost02 = () => {
  return (
    <>
      <BodyWrapper>
        <Stack>
          <Typography variant="caption">August 01, 2015</Typography>
          <Typography variant="h6">Yin In All Yang Tee First Look</Typography>
        </Stack>

        <Spacer amount={20} />

        <Stack>
          <Typography variant="body2">
            A sneak peak at our new Yin In All Yang Tee from our upcoming Yin Yang Collection.
          </Typography>
          <Spacer amount={10} />
          <ImageGallery
            imageSet={Gallery}
            columns={1}
          />
          <Spacer amount={10} />
          <Typography variant="body2">Stay tuned for more!</Typography>
        </Stack>

        <Spacer amount={20} />

        <Image src={SkullCollarLogo} height={100} />
      </BodyWrapper>
    </>
  );
}


// ---------------------------------------------------------

export default UnrulyGentBlogPost02;
import React from "react";
import { Stack, Typography } from "@mui/material";

import BodyWrapper from "../../../../components/body-wrapper";
import ImageGallery from "../../../../components/image-gallery";
import Spacer from "../../../../components/spacer";
import Image from "../../../../components/image/image";

import { imageList as Gallery } from "../../../../assets/images/unruly-gent/blog/post-1/gallery-1";
import DiamondTee from "../../../../assets/images/unruly-gent/blog/post-1/diamond-tee.jpeg";
import SkullCollarLogo from "../../../../assets/images/unruly-gent/skull-collar-logo.png";


// ---------------------------------------------------------

const UnrulyGentBlogPost01 = () => {
  return (
    <>
      <BodyWrapper>
        <Stack>
          <Typography variant="caption">July 25, 2015</Typography>
          <Typography variant="h6">After A Long Hiatus</Typography>
        </Stack>

        <Spacer amount={20} />

        <Stack>
          <Typography variant="body2">
            We have been on a long hiatus due to some important personal commitments. Things are slowly settling down and we are coming back!
            <br /><br />
            We have been working on some new designs for our upcoming collection.
          </Typography>
          <Spacer amount={10} />
          <ImageGallery
            imageSet={Gallery}
            aspectRatio={650 / 1024}
            columns={3}
          />
          <Spacer amount={10} />
          <Typography variant="body2"><br />Do check out our previous collections Provocation & Shapes if you have not done so.</Typography>
          <Spacer amount={10} />
          <Image src={DiamondTee} />
          <Typography variant="caption">Diamond Tee from the Shapes Collection</Typography>
        </Stack>

        <Spacer amount={20} />

        <Image src={SkullCollarLogo} height={100} />
      </BodyWrapper>
    </>
  );
}


// ---------------------------------------------------------

export default UnrulyGentBlogPost01;
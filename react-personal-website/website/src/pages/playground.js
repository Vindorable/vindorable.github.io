import React from "react";
import { Stack } from "@mui/system";

import PlaygroundSidebar from "../components/playground-sidebar";
import BodyWrapper from "../components/body-wrapper";
import StyledImage01 from "../components/image-styled-01";

import { PATH_WEBPAGE } from "../routes/paths";


// ---------------------------------------------------------

const Playground = () => {
  return (
    <>
      <PlaygroundSidebar />

      <BodyWrapper>
        <Stack direction={"row"}>
          <StyledImage01
            imageAlt="frankrit eats meat mobile game"
            imageLink="https://images.squarespace-cdn.com/content/v1/52485ff0e4b016b87cc4bf2f/1488975377441-L4PULVVO0Q01I0PTNUEG/image-asset.png"
          />

          <StyledImage01
            imageAlt="vines"
            imageLink="https://images.squarespace-cdn.com/content/v1/52485ff0e4b016b87cc4bf2f/1469318046060-1W0QMTK6L8YIUOC305ZS/Website+Links+-+Vines.png"
            url="https://vine.co/u/1058801076616462336"
            isURLExternal={true}
          />

          <StyledImage01
            imageAlt="pokemon works"
            imageLink="https://images.squarespace-cdn.com/content/v1/52485ff0e4b016b87cc4bf2f/1469322623310-0TOQEDQ8SEMHSZ7RPABW/Pokemon+Link.png"
            url={PATH_WEBPAGE.playgroundSubpage.pokemon}
          />
        </Stack>

        <Stack direction={"row"}>
          <StyledImage01
            imageAlt="dst mods"
            imageLink="https://images.squarespace-cdn.com/content/v1/52485ff0e4b016b87cc4bf2f/1469322178513-A0PQINIFRVOFEO5SIJ7S/DST+Mods+Links.png"
          />

          <StyledImage01
            imageAlt="unruly gent clothing"
            imageLink="https://images.squarespace-cdn.com/content/v1/52485ff0e4b016b87cc4bf2f/1469331347367-55TBODTS5U7Y6HL83PVX/Website+Links+-+Unruly+Gent.png"
          />

          <StyledImage01
            imageAlt=""
            imageLink="https://images.squarespace-cdn.com/content/v1/52485ff0e4b016b87cc4bf2f/1469318046060-1W0QMTK6L8YIUOC305ZS/Website+Links+-+Vines.png"
            emptyHiddenSpace={true}
          />
        </Stack>
      </BodyWrapper>
    </>
  );
}


// ---------------------------------------------------------

export default Playground;
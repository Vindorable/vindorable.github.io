import React from "react";
import { Link, Stack } from "@mui/material";

import PlaygroundSidebar from "../components/playground-sidebar";
import BodyWrapper from "../components/body-wrapper";
import StyledImage01 from "../components/image-styled-01";

import { IsMobile } from "../functions/isMobile";

import { PATH_WEBPAGE } from "../routes/paths";
import { useNavigate } from "react-router-dom";


// ---------------------------------------------------------

const Playground = () => {
  const navigate = useNavigate();

  return (
    <>
      {/* <PlaygroundSidebar /> */}

      <BodyWrapper>
        <Stack direction={IsMobile() ? "column" : "row"}>
          <StyledImage01
            imageAlt="frankrit eats meat mobile game"
            imageLink="https://images.squarespace-cdn.com/content/v1/52485ff0e4b016b87cc4bf2f/1488975377441-L4PULVVO0Q01I0PTNUEG/image-asset.png"
            url={PATH_WEBPAGE.playgroundSubpage.games}
          />

          <StyledImage01
            imageAlt="dst mods"
            imageLink="https://images.squarespace-cdn.com/content/v1/52485ff0e4b016b87cc4bf2f/1469322178513-A0PQINIFRVOFEO5SIJ7S/DST+Mods+Links.png"
            url={PATH_WEBPAGE.playgroundSubpage.dst}
          />

          <StyledImage01
            imageAlt="pokemon works"
            imageLink="https://images.squarespace-cdn.com/content/v1/52485ff0e4b016b87cc4bf2f/1469322623310-0TOQEDQ8SEMHSZ7RPABW/Pokemon+Link.png"
            url={PATH_WEBPAGE.playgroundSubpage.pokemon}
          />
        </Stack>

        <Stack direction={IsMobile() ? "column" : "row"}>
          <StyledImage01
            imageAlt="vines"
            imageLink="https://images.squarespace-cdn.com/content/v1/52485ff0e4b016b87cc4bf2f/1469318046060-1W0QMTK6L8YIUOC305ZS/Website+Links+-+Vines.png"
            url="https://vine.co/u/1058801076616462336"
            isURLExternal={true}
          />

          <StyledImage01
            imageAlt="unruly gent clothing"
            imageLink="https://images.squarespace-cdn.com/content/v1/52485ff0e4b016b87cc4bf2f/1469331347367-55TBODTS5U7Y6HL83PVX/Website+Links+-+Unruly+Gent.png"
            url={PATH_WEBPAGE.playgroundSubpage.unrulyGent}
          //url="https://unrulygent.threadless.com/"
          //isURLExternal={true}
          />

          {!IsMobile() &&
            <StyledImage01
              imageAlt=""
              imageLink="https://images.squarespace-cdn.com/content/v1/52485ff0e4b016b87cc4bf2f/1469318046060-1W0QMTK6L8YIUOC305ZS/Website+Links+-+Vines.png"
              emptyHiddenSpace={true}
            />
          }
        </Stack>

        <Link
          href={"javascript:void(0)"}
          onClick={() => navigate(PATH_WEBPAGE.playgroundSubpage.photography)}
          color="inherit"
          variant="body2"
        >
          Photography
        </Link>
      </BodyWrapper>
    </>
  );
}


// ---------------------------------------------------------

export default Playground;
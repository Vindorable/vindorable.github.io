import React from "react";
import { Stack, Typography } from "@mui/material";

import BodyWrapper from "../../../components/body-wrapper";
import Spacer from "../../../components/spacer";
import Image from "../../../components/image/image";
import YoutubeEmbed from "../../../components/youtube-embed";

import DSTBanner from "../../../assets/images/games/article-dst-banner.jpg";
import DotaBanner from "../../../assets/images/games/article-dota-banner.jpg";
import NIGHTMAREBLADE from "../../../assets/images/dst/03-dota-weapons-mod/NIGHTMARE BLADE.png"
import KRAKENBRINGER from "../../../assets/images/dst/03-dota-weapons-mod/KRAKEN BRINGER.png"
import WULDASTRON from "../../../assets/images/dst/03-dota-weapons-mod/WULDASTRON.png"
import CURSEDWULDAST from "../../../assets/images/dst/03-dota-weapons-mod/CURSED WULDAST.png"
import FEMArtwork from "../../../assets/images/games/fem-artwork.png";


// ---------------------------------------------------------

const DevJourney = () => {
  return (
    <>
      <BodyWrapper>
        <Typography variant="body2">
          This is a follow up of my post on Unity Forums which I talked about being on the verge of giving up on my game Shark-A-Boom:
          <br />
          <a href="https://forum.unity.com/threads/android-shark-a-boom-making-money-as-an-indie-dev-is-just-a-dream.1060169/" target="_blank">https://forum.unity.com/threads/android-shark-a-boom-making-money-as-an-indie-dev-is-just-a-dream.1060169/</a>

          <br /><br />

          How did it all start?
          <br />
          I didn’t ever think I would be a game developer. The younger me only loved playing games and I still do if I can make out time for it. My dream was actually to become an actor but not everyone gets their dream, do they? (Favourite actors: Johhny Depp and Robert Downer Jr.)

          <br /><br />
          <Spacer amount={30} />

          <Image src={DSTBanner} lightbox={true} />
          <br />
          So one fine day I came across Don’t Starve Together (DST). The game that I clocked almost 800 hours of playtime (Mind you, this excluded the countless hours spent on modding! More on that later.)

          <br /><br />
          <Spacer amount={30} />

          <Image src={DotaBanner} lightbox={true} />
          <br />
          But before that, I actively played Dota2 for 3000 hours. That’s 125 full days of my life!
          <br />
          I was a Dota player even before that. Sad to say I didn’t get the chance to play WOW but I was still intrigued by the lore of the characters.

          <br /><br /><br />

          So when I got sucked into DST (I’m glad I did), I came to realise that you could actually add your own contents into the game and share it with your friends to play together with called modding. That gave birth to an interest in coding. My love of Dota2 and DST made me create some Dota2 weapons which I play together with my girlfriend.
          <br /><Spacer amount={10} />
          <Stack direction={"row"}>
            <Image src={NIGHTMAREBLADE} />
            <Image src={KRAKENBRINGER} />
            <Image src={WULDASTRON} />
            <Image src={CURSEDWULDAST} />
          </Stack>
          <br /><Spacer amount={10} />
          All my other public mods are here: http://www.jayondope.com/my-dst-mods (I do have some private mods that are only for my girlfriend and me. Too bad!)

          <br /><br /><br />

          So from a small interest, it grew bigger. I wanted to create my own game! Create something from scratch. Create something that I would be proud of and treat it like my baby. I created Frankrit Eats Meat and published it on the Play Store. More on it here: http://www.jayondope.com/jgamesentertainment/frankrit-eats-meat.
          <br />
          As you can see, Frankrit is… Pudge from Dota. Why Pudge? Because I could never land a successful hook in the game so I made a game that was all about hooking. Lol.
          <br /><Spacer amount={10} />
          <Image src={FEMArtwork} />
          <Stack width={"100%"} maxWidth={"600px"}>
            <YoutubeEmbed embedId={"-DjaTHVWxrA"} />
          </Stack>

          <br /><br /><br />

          As years went by, I changed my job from a Motion Graphics & VFX Artist to Personal Fitness Trainer to Insurance Agent and I got busy and slowly stopped updating Frankrit Eats Meat. Also, it was built on GameMaker Studio (GMS), a game engine that was not so flexible back in the days as it was built on version 1.4. Version 2+ is much better now though.
        </Typography>
      </BodyWrapper>
    </>
  );
}


// ---------------------------------------------------------

export default DevJourney;
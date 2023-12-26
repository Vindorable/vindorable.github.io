import React from "react";
import { Box, Divider, List, ListItem, Stack, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";

import PlaygroundSidebar from "../components/playground-sidebar";

import DSTModData from "../components/dst-mod-data";

import BootyPackModBanner from "../assets/images/dst/01-booty-pack-mod/dst+bday+cake+mod+steam+dp.png";
import BootyPackDescArt from "../assets/images/dst/01-booty-pack-mod/dst+bday+cake+mod+desc+art.png";
import { imageList as PokemonImages } from "../assets/images/gallery-pokemon";

import DSTDotaWeaponData from "../components/dst-dota-weapon-data";
import NIGHTMAREBLADE from "../assets/images/dst/03-dota-weapons-mod/NIGHTMARE BLADE.png"
import KRAKENBRINGER from "../assets/images/dst/03-dota-weapons-mod/KRAKEN BRINGER.png"
import WULDASTRON from "../assets/images/dst/03-dota-weapons-mod/WULDASTRON.png"
import CURSEDWULDAST from "../assets/images/dst/03-dota-weapons-mod/CURSED WULDAST.png"


// ---------------------------------------------------------

const DST = () => {
  const theme = useTheme();

  return (
    <>
      <PlaygroundSidebar />

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

            <DSTModData
              modBanner={BootyPackModBanner}
              modName={"BIRTHDAY CAKE (+CREATOR KIT)"}
              modShortDesc={<>
                Do you play DST often with your love ones?
                <br />
                Do you wish you can show them your love through one of your favourite games?
                <br />
                If so, this mod is just the tool for you! You can even have <b>their name on the cake!</b>
              </>}
              modDescArt={BootyPackDescArt}
              modScreenshots={PokemonImages}
              modLongDesc={<>
                Yes! You can now create a custom named birthday cake for your special someone!
                <br /><br />
                The cake does not appear in any tabs. You have to use to console to spawn it.
                <br />
                Why? Because this is a birthday cake that should only be baked on someone's birthday!
                <br /><br />
                It provides 100 hunger, 100 sanity and 100 health once eaten.
                <br />
                To spawn the basic "HAPPY" and "BIRTHDAY" cakes that is provided, copy / paste this codes in the console:

              </>}
              steamWorkshopLink={"https://steamcommunity.com/sharedfiles/filedetails/?id=716271544"}
              changelogImgLink={"http://orig03.deviantart.net/ac8f/f/2016/182/e/c/workshop_version_detail___bday_cake_w_creator_kit_by_vindorable-da7sdsz.png"}
            />

            <Divider />

            <DSTDotaWeaponData
              weaponIcon={NIGHTMAREBLADE}

              weaponName={"NIGHTMARE BLADE"}

              dotaHeroName={"Axe"}

              releaseStatus={"Public Release"}

              lore={
                <Typography variant="body2">
                  No one knows the true origins of the Nightmare Blade. Countless folklores of its existence have been passed down for generations. One of the oldest records documented the blade being bathed in the black mist of timeless darkness, and by this baptism it was given an innate connection to its beholder's Sanity.
                </Typography>
              }

              abilities={
                <Stack p={0.75}>
                  <Typography variant="body2">
                    <List sx={{ listStyleType: 'disc', padding: "0" }}>
                      <ListItem sx={{ display: 'list-item', listStylePosition: "inside", padding: "0" }}>
                        Has 150 uses with 40 damage.
                      </ListItem>
                      <ListItem sx={{ display: 'list-item', listStylePosition: "inside", padding: "0" }}>
                        Reduces movement speed when equipped by 20%.
                      </ListItem>
                      <ListItem sx={{ display: 'list-item', listStylePosition: "inside", padding: "0" }}>
                        Weapon damage increases based on Player's sanity (full sanity = 40 dmg / zero sanity = 80 dmg).
                      </ListItem>
                    </List>
                  </Typography>
                </Stack>
              }

              moreInfo={
                <Stack>
                  <Typography variant="body2">
                    Found under the War (weapons) tab. Weapon recipe configuration available:
                  </Typography>
                  <Stack p={0.75}>
                    <Typography variant="body2">
                      <List sx={{ listStyleType: 'disc', padding: "0" }}>
                        <ListItem sx={{ display: 'list-item', listStylePosition: "inside", padding: "0" }}>
                          Easy - Hound Tooth=4, Log=12, Flint=8
                        </ListItem>
                        <ListItem sx={{ display: 'list-item', listStylePosition: "inside", padding: "0" }}>
                          Normal - Hound Tooth=8, Living Log=4, Flint=12
                        </ListItem>
                        <ListItem sx={{ display: 'list-item', listStylePosition: "inside", padding: "0" }}>
                          Hard - Hound Tooth=12, Living Log=8, Flint=22
                        </ListItem>
                      </List>
                    </Typography>
                  </Stack>
                  <Typography variant="body2">
                    Weapon is not upgradable (some weapons can be upgraded to form a stronger version of itself).
                  </Typography>
                </Stack>
              }

              disclaimer={
                <Typography variant="body2">
                  This weapon art is based of this. <br />
                  The weapon is adapted, modified, and/or build upon its original content to fit the Don't Starve Together's gameplay.
                </Typography>
              }
            />

            <Divider sx={{ visibility: "hidden", borderBottomWidth: 10 }} />

            <DSTDotaWeaponData
              weaponIcon={KRAKENBRINGER}

              weaponName={"KRAKEN BRINGER"}

              dotaHeroName={"Kunkka"}

              releaseStatus={"Public Release"}

              lore={
                <Typography variant="body2">
                  Anyone who holds the Krakenbringer feels a greater presence gravitating on them. Some say the blade is the vengeful Kraken himself. Even though, it has the power to command it's brethren in battle, those careless find themselves entangled in psychosis. After all, the Kraken is still alive and breathing...
                </Typography>
              }

              abilities={
                <Stack p={0.75}>
                  <Typography variant="body2">
                    <List sx={{ listStyleType: 'disc', padding: "0" }}>
                      <ListItem sx={{ display: 'list-item', listStylePosition: "inside", padding: "0" }}>
                        Has 150 uses with 41 damage.
                      </ListItem>
                      <ListItem sx={{ display: 'list-item', listStylePosition: "inside", padding: "0" }}>
                        Drains sanity similar to the Night Sword when equipped.
                      </ListItem>
                      <ListItem sx={{ display: 'list-item', listStylePosition: "inside", padding: "0" }}>
                        Every hit spawns a Tentacle, Kraken Brethren, to support you in battle. Kraken Brethren only hits once and does same damage as the Tentacle.
                      </ListItem>
                    </List>
                  </Typography>
                </Stack>
              }

              moreInfo={
                <Stack>
                  <Typography variant="body2">
                    Found under the War (weapons) tab. Weapon recipe configuration available:
                  </Typography>
                  <Stack p={0.75}>
                    <Typography variant="body2">
                      <List sx={{ listStyleType: 'disc', padding: "0" }}>
                        <ListItem sx={{ display: 'list-item', listStylePosition: "inside", padding: "0" }}>
                          Easy - Tentacle Spots=2, Tentacle Spike=1, Gold Nugget=4
                        </ListItem>
                        <ListItem sx={{ display: 'list-item', listStylePosition: "inside", padding: "0" }}>
                          Normal - Tentacle Spots=6, Tentacle Spike=3, Gold Nugget=8
                        </ListItem>
                        <ListItem sx={{ display: 'list-item', listStylePosition: "inside", padding: "0" }}>
                          Hard - Tentacle Spots=8, Tentacle Spike=6, Gold Nugget=12
                        </ListItem>
                      </List>
                    </Typography>
                  </Stack>
                  <Typography variant="body2">
                    Weapon is not upgradable (some weapons can be upgraded to form a stronger version of itself).
                  </Typography>
                </Stack>
              }

              disclaimer={
                <Typography variant="body2">
                  This weapon art is based of this. <br />
                  The weapon is adapted, modified, and/or build upon its original content to fit the Don't Starve Together's gameplay.
                </Typography>
              }
            />

            <Divider sx={{ visibility: "hidden", borderBottomWidth: 10 }} />

            <DSTDotaWeaponData
              weaponIcon={WULDASTRON}

              weaponName={"WULDASTRON"}

              dotaHeroName={"Sven"}

              releaseStatus={"Private Release (don't ask me for it..)"}

              lore={
                <Typography variant="body2">
                  A blade that can only be held by the mightiest. A blade that brings great honour. Wuldastron is the most prized great sword amongst the Kings that has been passed down for generations to only those worthy. It's swift judgement leaves no one to question it's wielder's ulterior motives.
                </Typography>
              }

              abilities={
                <Stack p={0.75}>
                  <Typography variant="body2">
                    <List sx={{ listStyleType: 'disc', padding: "0" }}>
                      <ListItem sx={{ display: 'list-item', listStylePosition: "inside", padding: "0" }}>
                        [Not Comfirmed]
                      </ListItem>
                    </List>
                  </Typography>
                </Stack>
              }

              moreInfo={
                <Stack>
                  <Typography variant="body2">
                    Found under the War (weapons) tab. Weapon recipe configuration available:
                  </Typography>
                  <Stack p={0.75}>
                    <Typography variant="body2">
                      <List sx={{ listStyleType: 'disc', padding: "0" }}>
                        <ListItem sx={{ display: 'list-item', listStylePosition: "inside", padding: "0" }}>
                          Easy - [Not Comfirmed]
                        </ListItem>
                        <ListItem sx={{ display: 'list-item', listStylePosition: "inside", padding: "0" }}>
                          Normal - [Not Comfirmed]
                        </ListItem>
                        <ListItem sx={{ display: 'list-item', listStylePosition: "inside", padding: "0" }}>
                          Hard - [Not Comfirmed]
                        </ListItem>
                      </List>
                    </Typography>
                  </Stack>
                  <Typography variant="body2">
                    Weapon is upgradable to an evil and stronger version - the Cursed Wuldast.
                  </Typography>
                </Stack>
              }

              disclaimer={
                <Typography variant="body2">
                  This weapon art is based of this. <br />
                  The weapon is adapted, modified, and/or build upon its original content to fit the Don't Starve Together's gameplay.
                </Typography>
              }
            />

            <Divider sx={{ visibility: "hidden", borderBottomWidth: 10 }} />

            <DSTDotaWeaponData
              weaponIcon={CURSEDWULDAST}

              weaponName={"CURSED WULDAST"}

              dotaHeroName={"Sven"}

              releaseStatus={"Private Release (don't ask me for it..)"}

              lore={
                <Typography variant="body2">
                  ...darkness...
                </Typography>
              }

              abilities={
                <Stack p={0.75}>
                  <Typography variant="body2">
                    <List sx={{ listStyleType: 'disc', padding: "0" }}>
                      <ListItem sx={{ display: 'list-item', listStylePosition: "inside", padding: "0" }}>
                        [Not Comfirmed]
                      </ListItem>
                    </List>
                  </Typography>
                </Stack>
              }

              moreInfo={
                <Stack>
                  <Typography variant="body2">
                    Found under the War (weapons) tab. Weapon recipe configuration available:
                  </Typography>
                  <Stack p={0.75}>
                    <Typography variant="body2">
                      <List sx={{ listStyleType: 'disc', padding: "0" }}>
                        <ListItem sx={{ display: 'list-item', listStylePosition: "inside", padding: "0" }}>
                          Easy - [Not Comfirmed]
                        </ListItem>
                        <ListItem sx={{ display: 'list-item', listStylePosition: "inside", padding: "0" }}>
                          Normal - [Not Comfirmed]
                        </ListItem>
                        <ListItem sx={{ display: 'list-item', listStylePosition: "inside", padding: "0" }}>
                          Hard - [Not Comfirmed]
                        </ListItem>
                      </List>
                    </Typography>
                  </Stack>
                  <Typography variant="body2">
                    Weapon is an upgraded version of Wuldastron.
                  </Typography>
                </Stack>
              }

              disclaimer={
                <Typography variant="body2">
                  This weapon art is based of this. <br />
                  The weapon is adapted, modified, and/or build upon its original content to fit the Don't Starve Together's gameplay.
                </Typography>
              }
            />
          </Stack>
        </Stack>
      </Stack>
    </>
  );
}


// ---------------------------------------------------------

export default DST;
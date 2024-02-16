import React from "react";
import { Divider, Link, List, ListItem, Stack, Typography } from "@mui/material";
import { Sword } from "phosphor-react";

import BodyWrapper from "../../../components/body-wrapper";
import DSTModData from "../../../components/dst-mod-data";

import DotaWeaponModBanner from "../../../assets/images/dst/03-dota-weapons-mod/dst+dota+weapon+mod+steam+dp.png";
import DSTDotaWeaponData from "../../../components/dst-dota-weapon-data";
import NIGHTMAREBLADE from "../../../assets/images/dst/03-dota-weapons-mod/weapons/1-nightmare-blade/weapon.png"
import { imageList as NightmareBladeShowcase } from "../../../assets/images/dst/03-dota-weapons-mod/weapons/1-nightmare-blade/gallery-showcase";
import KRAKENBRINGER from "../../../assets/images/dst/03-dota-weapons-mod/weapons/2-kraken-bringer/weapon.png"
import { imageList as KrakenBringerShowcase } from "../../../assets/images/dst/03-dota-weapons-mod/weapons/2-kraken-bringer/gallery-showcase";
import WULDASTRON from "../../../assets/images/dst/03-dota-weapons-mod/weapons/3-wuldastron/weapon.png"
import CURSEDWULDAST from "../../../assets/images/dst/03-dota-weapons-mod/weapons/4-cursed-wuldast/weapon.png"


// ---------------------------------------------------------

const DotaWeaponsMod = () => {
  return (
    <>
      <BodyWrapper>
        <DSTModData
          modBanner={DotaWeaponModBanner}
          modName={"DOTA2 X DON'T STARVE TOGETHER WEAPONS COLLECTION"}
          modShortDesc={<>
            Are you an veteran  Dota2 player? Do you also enjoy playing Don't Starve Together?
            <br /><br />
            I have clocked 2500++ hours <i>(yes that much!)</i> in Dota2 and I have purchased countless hero customization items created by Valve and the amazing community which I fell in love with.
            <br /><br />
            Now, I bring those weapons into DST for you! ;)
          </>}
          steamWorkshopLink={"https://steamcommunity.com/sharedfiles/filedetails/?id=734809016"}
          others={<>
            <Divider sx={{ borderBottomWidth: 10, visibility: "hidden" }} />

            <Stack direction={"row"} spacing={1} alignItems={"center"} justifyContent={"center"}>
              <Sword size={26} />
              <Typography variant="h5">The Weapons</Typography>
              <Sword size={26} mirrored />
            </Stack>

            <Divider sx={{ borderBottomWidth: 10, visibility: "hidden" }} />

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
                  This weapon art is based of&nbsp;
                  <Link target="_blank" href="https://dota2.fandom.com/wiki/Nightmare_Blade" color="inherit">this</Link>.
                  <br />
                  The weapon is adapted, modified, and/or build upon its original content to fit the Don't Starve Together's gameplay.
                </Typography>
              }

              screenshots={NightmareBladeShowcase}
            />

            <Divider sx={{ visibility: "hidden", borderBottomWidth: 15 }} />

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
                  This weapon art is based of&nbsp;
                  <Link target="_blank" href="https://dota2.fandom.com/wiki/Krakenbringer" color="inherit">this</Link>.
                  <br />
                  The weapon is adapted, modified, and/or build upon its original content to fit the Don't Starve Together's gameplay.
                </Typography>
              }

              screenshots={KrakenBringerShowcase}
            />

            <Divider sx={{ visibility: "hidden", borderBottomWidth: 15 }} />

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
                  This weapon art is based of&nbsp;
                  <Link target="_blank" href="https://dota2.fandom.com/wiki/Wuldastron_the_Twin-Blade_of_Giants" color="inherit">this</Link>.
                  <br />
                  The weapon is adapted, modified, and/or build upon its original content to fit the Don't Starve Together's gameplay.
                </Typography>
              }
            />

            <Divider sx={{ visibility: "hidden", borderBottomWidth: 15 }} />

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
                  This weapon art is based of&nbsp;
                  <Link target="_blank" href="https://dota2.fandom.com/wiki/Wuldastron_the_Twin-Blade_of_Giants" color="inherit">this</Link>.
                  <br />
                  The weapon is adapted, modified, and/or build upon its original content to fit the Don't Starve Together's gameplay.
                </Typography>
              }
            />
          </>}
        />
      </BodyWrapper>
    </>
  );
}


// ---------------------------------------------------------

export default DotaWeaponsMod;
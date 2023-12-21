import React from "react";
import { Box, List, ListItem, Stack, Typography } from "@mui/material";

import PlaygroundSidebar from "../components/playground-sidebar";
import { NavTab, NavTabs } from "../components/nav-tab";


// ---------------------------------------------------------

const DST = () => {
  // Tabs.
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      DST
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
              backgroundColor: "#F8FAFF",
              boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)",
              width: {
                xs: "auto", // 0px
                md: "80%",  // 900px
                lg: "60%",  // 1200px
              },
            }}
          >
            <Stack>
              <NavTabs value={value} onChange={handleChange}>
                <NavTab label="Lore" />
                <NavTab label="Abilities" />
                <NavTab label="More Info" />
                <NavTab label="Disclaimer" />
              </NavTabs>
              {/* IIFE (Immediately Invoked Function Expressions) */}
              {(() => {
                switch (value) {
                  case 0:
                    // Lore
                    return <Box
                      p={1.25}
                      sx={{
                        backgroundColor: "#F8FAFF",
                        boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)",
                        width: "100%",
                        height: "auto",
                      }}
                    >
                      <Typography variant="body2">
                        No one knows the true origins of the Nightmare Blade. Countless folklores of its existence have been passed down for generations. One of the oldest records documented the blade being bathed in the black mist of timeless darkness, and by this baptism it was given an innate connection to its beholder's Sanity.
                      </Typography>
                    </Box>

                  case 1:
                    // Abilities
                    return <Box
                      p={1.25}
                      sx={{
                        backgroundColor: "#F8FAFF",
                        boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)",
                        width: "100%",
                        height: "auto",
                      }}
                    >
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
                    </Box>

                  case 2:
                    // More Info
                    return <Box
                      p={1.25}
                      sx={{
                        backgroundColor: "#F8FAFF",
                        boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)",
                        width: "100%",
                        height: "auto",
                      }}
                    >
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
                    </Box>

                  case 3:
                    // Disclaimer
                    return <Box
                      p={1.25}
                      sx={{
                        backgroundColor: "#F8FAFF",
                        boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)",
                        width: "100%",
                        height: "auto",
                      }}
                    >
                      <Typography variant="body2">
                        This weapon art is based of this. <br />
                        The weapon is adapted, modified, and/or build upon its original content to fit the Don't Starve Together's gameplay.
                      </Typography>
                    </Box>
                }
              })()}
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </>
  );
}


// ---------------------------------------------------------

export default DST;
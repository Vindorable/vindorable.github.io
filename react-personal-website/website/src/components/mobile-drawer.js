import React, { useState } from "react";
import { Drawer, IconButton, List, ListItem, ListItemText, Stack, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { List as ListIcon } from "phosphor-react";


// ---------------------------------------------------------

const MobileDrawer = () => {
  const theme = useTheme();

  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <>
      <Drawer
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        anchor="right"
      >
        <List>
          <ListItem>
            <ListItemText>
              <Typography>item 1</Typography>
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>
              <Typography>item 2</Typography>
            </ListItemText>
          </ListItem>
          <ListItem >
            <ListItemText>
              <Typography>item 3</Typography>
            </ListItemText>
          </ListItem>
        </List>
      </Drawer>

      <IconButton
        onClick={() => setOpenDrawer(!openDrawer)}
        sx={{
          color: theme.palette.text.disabled,
          "&:hover": {
            color: theme.palette.text.primary,
          }
        }}
      >
        <ListIcon size={32} />
      </IconButton>
    </>
  );
}


// ---------------------------------------------------------

export default MobileDrawer;
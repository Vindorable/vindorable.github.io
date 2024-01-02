import React from "react";
import { Stack, Typography } from "@mui/material";

import MyAvatar from "../assets/images/homepage/jay-avatar.png"
import MyName from "../assets/images/homepage/jay-name.png"


// ---------------------------------------------------------

const Homepage = () => {
  return (
    <>
      <Stack
        direction={"row"}
        width={"100%"}
        justifyContent={"space-evenly"}
      >
        <Stack
          position={"fixed"}
          bottom={0}
          width={"auto"}
          height={"100%"}
          maxHeight={"calc(100vh - 60px)"}
          justifyContent={"space-evenly"}
        // sx={{
        //   borderRadius: "8px",
        //   border: 1,
        //   borderColor: "#fff",
        // }}
        >
          <Stack height={"1%"} />

          <Stack height={"4%"}>
            <Typography inline align="center" variant="h1" fontWeight={"600"} fontSize={"5vh"}>
              Hi, I'm
            </Typography>
          </Stack>

          <Stack height={"1%"} />

          <Stack height={"22%"}>
            <img src={MyName} style={{ objectFit: "contain", height: "100%" }} />
          </Stack>

          <Stack height={"2%"}>
            <Typography inline align="center" variant="body2" fontWeight={"300"} fontSize={"1.6vh"} letterSpacing={"0.1rem"}>
              Welcome to my personal space.
            </Typography>
          </Stack>

          <Stack height={"70%"}>
            <img src={MyAvatar} style={{ objectFit: "cover", height: "100%" }} />
          </Stack>
        </Stack>
      </Stack>
    </>
  );
}


// ---------------------------------------------------------

export default Homepage;
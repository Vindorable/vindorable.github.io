import React from "react";
import { Outlet } from "react-router-dom";
import { Stack } from "@mui/material";

import Navbar from "../components/navbar";
import Navbar02 from "../components/navbar-02";
import Footer from "../components/footer";


// ---------------------------------------------------------

const MainLayout = () => {
  return (
    <>
      <Stack height={"100%"} minHeight={"100dvh"} maxHeight={"100dvh"} width={"auto"}>
        <Navbar02 />
        <Outlet />
        {/* <Footer /> */}
      </Stack>
    </>
  );
}


// ---------------------------------------------------------

export default MainLayout;
import React from "react";
import { Outlet } from "react-router-dom";
import { Stack } from "@mui/material";

import Navbar from "../components/navbar";
import Navbar02 from "../components/navbar-02";


// ---------------------------------------------------------

const MainLayout = () => {
  return (
    <>
      <Stack>
        <Navbar02 />
        <Outlet />
      </Stack>
    </>
  );
}


// ---------------------------------------------------------

export default MainLayout;
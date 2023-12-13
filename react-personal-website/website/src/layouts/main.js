import React from "react";
import { Outlet } from "react-router-dom";
import { Stack } from "@mui/material";

import Navbar from "../components/navbar";


// ---------------------------------------------------------

const MainLayout = () => {
  return (
    <>
      <Stack direction={"row"}>
        <Navbar />
        <Outlet />
      </Stack>
    </>
  );
}


// ---------------------------------------------------------

export default MainLayout;
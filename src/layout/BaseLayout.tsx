import { Box } from "@mui/material";
import React from "react";
import Footer from "./Footer.tsx";
import NavBar from "./NavBar.tsx";
import { Page } from "./Page.tsx";

const BaseLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <Box className="flex flex-col min-h-screen">
      <NavBar />
      <Page>{children}</Page>
      <Footer />
    </Box>
  );
};

export default BaseLayout;

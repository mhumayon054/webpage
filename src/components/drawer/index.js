import React from "react";
import { Drawer, Box, Typography, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
const MuiDrawer = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  return (
    <>
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="logo"
        onClick={() => setIsDrawerOpen(true)}
      >
        <MenuIcon />
      </IconButton>
      <Drawer
        anchor="left"
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      >
        <Box p={2} width="250px" textAlign="center" role="presentation">
          <Typography variant="h5" component="div">
            Menu
          </Typography>
          <div className="appbtn">
            <button className="button">Home</button>
            <button className="button">Women's</button>
            <button className="button">Men's</button>
            <button className="button">Shop</button>
            <button className="button">Pages</button>
            <button className="button">Blog</button>
            <button className="button">Contact</button>
          </div>
        </Box>
      </Drawer>
    </>
  );
};
export default MuiDrawer;

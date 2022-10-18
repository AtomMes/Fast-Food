import {
  Toolbar,
  IconButton,
  Button,
  Box,
  styled,
  Menu,
  MenuItem,
  Stack,
  Drawer,
  Typography,
  Badge,
  TextField,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";


import React from "react";
import { Link } from "react-router-dom";

const BurgerMenu = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const open = Boolean(anchorEl);

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = (e) => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ display: { xs: "flex", sm: "none" }, alignItems: "center" }}>
      <Button
        id="resources-button"
        onClick={handleClick}
        aria-controls={open && "resources-menu"}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
      >
        <MenuIcon />
      </Button>
      <Menu
        sx={{ display: { xs: "flex", sm: "none" } }}
        id="resources-menu"
        anchorEl={anchorEl}
        open={open}
        MenuListProps={{
          "aria-labelledby": "resources-button",
        }}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MenuItem onClick={handleClose}>
          <Link to="/" style={{ textDecoration: "none" }}>
            <Button sx={{ color: "gray" }}>Home</Button>
          </Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link to="/order" style={{ textDecoration: "none" }}>
            <Button sx={{ color: "gray" }}>Order</Button>
          </Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link to="/company" style={{ textDecoration: "none" }}>
            <Button sx={{ color: "gray" }}>Company</Button>
          </Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link to="/faq" style={{ textDecoration: "none" }}>
            <Button sx={{ color: "gray" }}>FAQ</Button>
          </Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Button sx={{ color: "gray" }}>CONTACT</Button>
        </MenuItem>
      </Menu>
    </Box>
  );
};

export default BurgerMenu;

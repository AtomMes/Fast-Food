import React from "react";
import {
  Toolbar,
  IconButton,
  Button,
  Box,
  styled,
  Menu,
  MenuItem,
} from "@mui/material";
import { Stack } from "@mui/system";
import MainLogo from "../images/5e865e09d8efa341ab76b5e7_Logo";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import MenuIcon from "@mui/icons-material/Menu";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

export const Navbar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const open = Boolean(anchorEl);

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = (e) => {
    setAnchorEl(null);
  };

  return (
    <Box
      position="static"
      sx={{ backgroundColor: "transparent", width: "100%" }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="logo"
          sx={{ width: "60px", height: "60px" }}
        >
          <MainLogo />
        </IconButton>
        <Stack direction="row" spacing={2}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              display: { xs: "none", sm: "flex" },
            }}
          >
            <Button sx={{ color: "gray" }}>Home</Button>
            <Button sx={{ color: "gray" }}>Order</Button>
            <Button sx={{ color: "gray" }}>Company</Button>
            <Button sx={{ color: "gray" }}>FAQ</Button>
            <Button sx={{ color: "gray" }}>CONTACT</Button>
          </Box>

          <Box
            sx={{ display: { xs: "flex", sm: "none" }, alignItems: "center" }}
          >
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
                <Button sx={{ color: "gray" }}>Home</Button>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <Button sx={{ color: "gray" }}>Order</Button>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <Button sx={{ color: "gray" }}>Company</Button>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <Button sx={{ color: "gray" }}>FAQ</Button>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <Button sx={{ color: "gray" }}>CONTACT</Button>
              </MenuItem>
            </Menu>
          </Box>

          <Button>
            <ShoppingCartIcon
              sx={{
                bgcolor: "#35b8be",
                width: "40px",
                height: "40px",
                padding: "11px",
                borderRadius: "8px",
                color: "white",
              }}
            />
          </Button>
        </Stack>
      </Toolbar>
    </Box>
  );
};

export default Navbar;

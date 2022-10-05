import React from "react";
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
} from "@mui/material";
import MainLogo from "../images/5e865e09d8efa341ab76b5e7_Logo";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import MenuIcon from "@mui/icons-material/Menu";

export const Navbar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);

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
      <Box
          sx={{
            width: "100%",
            maxWidth: "1200px",
            margin: "0 auto",
          }}
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
            <Button sx={{ color: "gray", fontWeight: "400" }}>Home</Button>
            <Button sx={{ color: "gray", fontWeight: "400" }}>Order</Button>
            <Button sx={{ color: "gray", fontWeight: "400" }}>Company</Button>
            <Button sx={{ color: "gray", fontWeight: "400" }}>FAQ</Button>
            <Button sx={{ color: "gray", fontWeight: "400" }}>CONTACT</Button>
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
          <Button onClick={() => setIsDrawerOpen(true)}>
            <Badge badgeContent={0} showZero color='w'>
              <ShoppingCartIcon
                color="w"
                sx={{
                  bgcolor: "#35b8be",
                  width: "55px",
                  height: "55px",
                  padding: "18px",
                  borderRadius: "8px",
                }}
              />
            </Badge>
          </Button>
        </Stack>
      </Toolbar>
      <Drawer
        anchor="right"
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      >
        <Box p={2} width="300px" textAlign="center" role="presentation">
          <Typography variant="h6" component="div">
            Cart
          </Typography>
        </Box>
      </Drawer>
      </Box>
    </Box>
  );
};

export default Navbar;

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
  TextField,
} from "@mui/material";
import MainLogo from "../images/5e865e09d8efa341ab76b5e7_Logo";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import MenuIcon from "@mui/icons-material/Menu";
import { Close, FoodBank } from "@mui/icons-material";

const f = [1, 1, 1, 1];

export const Navbar = ({ theme }) => {
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
              <Badge badgeContent={0} showZero color="w">
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
          <Box
            width="500px"
            height="100%"
            display="flex"
            flexDirection="column"
          >
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              borderBottom="1px solid grey"
              padding={3} 
            >
              <Typography variant="h4" sx={{ fontWeight: "bold" }}>
                Your Order
              </Typography>
              <Close onClick={() => setIsDrawerOpen(false)} cursor="pointer" />
            </Box>
            <Box flex="1" padding={2} sx={{overflow:'auto'}} >
              {f.map((ff, i) => (
                <Box display="flex" alignItems="center" key={i} borderBottom='1px solid rgb(220,220,220)' >
                  <FoodBank sx={{ width: "90px", height: "auto" }} />
                  <Box flex="1">
                    <Typography>Name of the Food</Typography>
                    <Typography>$ 4.00 USD</Typography>
                    <Button>Remove</Button>
                  </Box>
                  <Box>
                    <TextField
                      size="small"
                      variant="outlined"
                      sx={{
                        width: "65px",
                        marginRight: "10px",
                      }}
                      type="number"
                    />
                  </Box>
                </Box>
              ))}
            </Box>
            <Box padding={3} borderTop="1px solid grey">
              <Box
                display="flex"
                justifyContent="space-between"
                marginBottom='15px'
              >
                <Typography variant="h5">Subtotal</Typography>
                <Typography variant="h5">$22.00 USD</Typography>
              </Box>
              <Box>
                <Button
                  sx={{ width: "100%", height: "50px", color: "white" }}
                  variant="contained"
                >
                  Continue to checkout
                </Button>
              </Box>
            </Box>
          </Box>
        </Drawer>
      </Box>
    </Box>
  );
};

export default Navbar;

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
import LunchDiningIcon from "@mui/icons-material/LunchDining";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
import Cart from "./Cart";
import BurgerMenu from "./BurgerMenu";

const f = [1, 1, 1, 1];

export const Navbar = ({ theme }) => {
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);

  return (
    <Box position="static" sx={{ backgroundColor: "white", width: "100%" }}>
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
          <Link to="/" style={{ textDecoration: "none" }}>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="logo"
              sx={{ width: "60px", height: "60px" }}
            >
              <MainLogo />
            </IconButton>
          </Link>
          <Stack direction="row" spacing={2}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                display: { xs: "none", sm: "flex" },
              }}
            >
              <Link to="/" style={{ textDecoration: "none" }}>
                <Button sx={{ color: "gray", fontWeight: "400" }}>Home</Button>
              </Link>
              <Link to="/order" style={{ textDecoration: "none" }}>
                <Button sx={{ color: "gray", fontWeight: "400" }}>Order</Button>
              </Link>
              <Link to="company" style={{ textDecoration: "none" }}>
                <Button sx={{ color: "gray", fontWeight: "400" }}>
                  Company
                </Button>
              </Link>
              <Link to="faq" style={{ textDecoration: "none" }}>
                <Button sx={{ color: "gray", fontWeight: "400" }}>FAQ</Button>
              </Link>
              <Button sx={{ color: "gray", fontWeight: "400" }}>CONTACT</Button>
            </Box>
            <BurgerMenu />
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
        <Cart
          isDrawerOpen={isDrawerOpen}
          setIsDrawerOpen={setIsDrawerOpen}
          f={f}
        />
      </Box>
    </Box>
  );
};

export default Navbar;

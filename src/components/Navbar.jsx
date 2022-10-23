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
import { Link } from "react-router-dom";
import Cart from "./Cart";
import BurgerMenu from "./BurgerMenu";
import { useDispatch, useSelector } from "react-redux";
import { setItems } from "../redux/itemsSlice";
import axios from "axios";

export const Navbar = ({ theme }) => {
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);
  const dispatch = useDispatch();
  const { items } = useSelector((state) => state.itemsSlice);

  const cartItems = items.filter((item) => item.count >= 1);

  React.useEffect(() => {
    if (JSON.parse(localStorage.getItem("items"))) {
      const data = JSON.parse(localStorage.getItem("items"));
      dispatch(setItems(data));
    } else {
      const fetchData = async () => {
        const { data } = await axios.get(
          `https://634ef267df22c2af7b475a0f.mockapi.io/items`
        );
        dispatch(setItems(data));
      };
      fetchData();
    }
  }, []);
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
          <Box sx={{ paddingLeft: "12px", height: "70px", overflow: "hidden" }}>
            <Link to="/" style={{ textDecoration: "none" }}>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                sx={{ width: "60px", height: "60px" }}
              >
                <MainLogo />
              </IconButton>
            </Link>
          </Box>
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
            <Button
              onClick={() => {
                setIsDrawerOpen(true);
              }}
            >
              <Badge
                badgeContent={cartItems.length}
                showZero
                color="w"
                fontWeight="bold"
              >
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
          items={cartItems}
        />
      </Box>
    </Box>
  );
};

export default Navbar;

import React from "react";
import { Toolbar, IconButton, Button, Box, Stack, Badge } from "@mui/material";
import MainLogo from "../images/mainLogo.svg";
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const navigationButtons = [
    {
      text: "Home",
      to: "/home",
    },
    {
      text: "Order",
      to: "/order",
    },
    {
      text: "Company",
      to: "/company",
    },
    {
      text: "FAQ",
      to: "/faq",
    },
  ];

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
                <Box
                  component="img"
                  alt="img"
                  src={MainLogo}
                  sx={{ width: "50px", height: "50px" }}
                />
              </IconButton>
            </Link>
          </Box>
          <Stack direction="row" spacing={2}>
            <Box
              sx={{
                alignItems: "center",
                display: { xs: "none", sm: "flex" },
              }}
            >
              {navigationButtons.map((nav, i) => (
                <Link to={nav.to} key={i} style={{ textDecoration: "none" }}>
                  <Button sx={{ color: "gray", fontWeight: "400" }}>
                    {nav.text}
                  </Button>
                </Link>
              ))}
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

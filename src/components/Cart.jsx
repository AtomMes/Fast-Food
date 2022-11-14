import { Close } from "@mui/icons-material";
import { Box, Button, Drawer, Typography } from "@mui/material";
import React from "react";
import { setItems } from "../redux/itemsSlice";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import ProductionQuantityLimitsIcon from "@mui/icons-material/ProductionQuantityLimits";
import axios from "axios";
import { LoadingButton } from "@mui/lab";
import Checkout from "./Checkout";
import CartItems from "./CartItems";

const Cart = ({ isDrawerOpen, setIsDrawerOpen, items }) => {
  const dispatch = useDispatch();
  const totalPrice = items.reduce((sum, obj) => obj.price * obj.count + sum, 0);
  const [isLoading, setIsLoading] = React.useState(false);

  const load = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      checkout();
    }, 1500);
  };

  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
    setTimeout(() => {
      setIsDrawerOpen(false);
    }, 150);
  };

  const checkout = () => {
    setOpen(true);
    const fetchData = async () => {
      const { data } = await axios.get(
        `https://634ef267df22c2af7b475a0f.mockapi.io/items`
      );
      dispatch(setItems(data));
    };
    fetchData();
    localStorage.clear();
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false);
    setOpen(false);
    setIsLoading(false);
  };

  return (
    <Drawer anchor="right" open={isDrawerOpen} onClose={closeDrawer}>
      <Box
        maxWidth="350px"
        width="100%"
        height="100%"
        display="flex"
        flexDirection="column"
        sx={{ backgroundColor: "w.main" }}
      >
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          borderBottom="1px solid"
          borderBottomColor="g.main"
          padding={3}
        >
          <Typography
            variant="h4"
            sx={{ fontWeight: "bold", color: "ht.main" }}
          >
            Cart
          </Typography>
          <Close onClick={closeDrawer} cursor="pointer" sx={{color:'ht.main'}} />
        </Box>
        <Box width="100%" flex="1" padding={2} sx={{ overflow: "auto" }}>
          {items.length ? (
            <CartItems items={items} />
          ) : (
            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
              height="100%"
              gap={2}
            >
              <Typography
                variant="h4"
                sx={{ fontWeight: "bold", color: "ht.main" }}
              >
                Cart Is Empty
              </Typography>{" "}
              <ProductionQuantityLimitsIcon
                sx={{ width: "70%", height: "auto", color: "ht.main" }}
              />
            </Box>
          )}
        </Box>
        <Box padding={3} borderTop="1px solid" borderTopColor="g.main">
          {items.length ? (
            <>
              <Box
                display="flex"
                justifyContent="space-between"
                marginBottom="15px"
              >
                <Typography variant="h5">Subtotal</Typography>
                <Typography variant="h5">${totalPrice}.00 USD</Typography>
              </Box>
              <LoadingButton
                onClick={load}
                loading={isLoading}
                loadingPosition="start"
                sx={{ width: "100%", height: "50px", color: "white" }}
                variant="contained"
              >
                Continue to checkout
              </LoadingButton>
            </>
          ) : (
            <Link to="/order" style={{ textDecoration: "none" }}>
              <Button
                sx={{ width: "100%", height: "50px", color: "white" }}
                variant="contained"
                onClick={closeDrawer}
              >
                Go to the order page
              </Button>
            </Link>
          )}
        </Box>
        <Checkout open={open} handleClose={handleClose} />
      </Box>
    </Drawer>
  );
};

export default Cart;

import { Close, LunchDining, Save } from "@mui/icons-material";
import {
  Box,
  Button,
  Drawer,
  Snackbar,
  TextField,
  Typography,
  Alert,
} from "@mui/material";
import React from "react";
import {
  addToCart,
  minusFromCart,
  removeFromCart,
  setItems,
} from "../redux/itemsSlice";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import ProductionQuantityLimitsIcon from "@mui/icons-material/ProductionQuantityLimits";
import axios from "axios";
import { LoadingButton } from "@mui/lab";
import Checkout from "./Checkout";

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
      <Box width="100%" height="100%" display="flex" flexDirection="column">
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          borderBottom="1px solid grey"
          padding={3}
        >
          <Typography variant="h4" sx={{ fontWeight: "bold" }}>
            Cart
          </Typography>
          <Close onClick={closeDrawer} cursor="pointer" />
        </Box>
        <Box width="400px" flex="1" padding={2} sx={{ overflow: "auto" }}>
          {items.map((item) => (
            <Box
              display="flex"
              alignItems="center"
              key={item.id}
              borderBottom="1px solid rgb(220,220,220)"
            >
              <Box
                component="img"
                alt="img"
                src={item.imageUrl}
                sx={{ width: "90px", height: "auto" }}
                borderRadius="10px"
                margin="20px 20px 20px 0"
              />
              <Box flex="1">
                <Typography>{item.name}</Typography>
                <Typography>$ {item.price}.00 USD</Typography>
                <Button onClick={() => dispatch(removeFromCart(item.id))}>
                  Remove
                </Button>
              </Box>
              <Box display="flex" alignItems="center">
                <Box
                  margin="0 10px"
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  width="30px"
                  height="30px"
                  bgcolor="#35b8be"
                  color="white"
                  borderRadius="50%"
                >
                  {item.count ? item.count : 0}
                </Box>
                <Box
                  display="flex"
                  flexDirection="column"
                  justifyContent="space-between"
                  gap="3px"
                >
                  <Button
                    color="primary"
                    variant="contained"
                    size="small"
                    sx={{
                      color: "white",
                      width: "20px",
                      padding: "5px",
                      textAlign: "center",
                      minWidth: "0px",
                      marginRight: "10px",
                      height: "20px",
                      "&:hover": {
                        backgroundColor: "#1a9da3",
                      },
                    }}
                    onClick={() => dispatch(addToCart(item.id))}
                  >
                    +
                  </Button>
                  <Button
                    color="primary"
                    variant="contained"
                    size="small"
                    sx={{
                      width: "20px",
                      color: "white",
                      padding: "5px",
                      textAlign: "center",
                      minWidth: "0px",
                      marginRight: "10px",
                      height: "20px",
                      "&:hover": {
                        backgroundColor: "#1a9da3",
                      },
                    }}
                    onClick={() => dispatch(minusFromCart(item.id))}
                  >
                    -
                  </Button>
                </Box>
              </Box>
            </Box>
          ))}
          {!items.length && (
            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
              height="100%"
              gap={2}
            >
              <Typography variant="h4" sx={{ fontWeight: "bold" }}>
                Cart Is Empty
              </Typography>{" "}
              <ProductionQuantityLimitsIcon
                sx={{ width: "200px", height: "200px" }}
              />
            </Box>
          )}
        </Box>
        <Box padding={3} borderTop="1px solid grey">
          {items.length ? (
            <Box
              display="flex"
              justifyContent="space-between"
              marginBottom="15px"
            >
              <Typography variant="h5">Subtotal</Typography>
              <Typography variant="h5">${totalPrice}.00 USD</Typography>
            </Box>
          ) : (
            <></>
          )}

          <Box>
            {items.length ? (
              <LoadingButton
                onClick={load}
                loading={isLoading}
                loadingPosition="start"
                sx={{ width: "100%", height: "50px", color: "white" }}
                variant="contained"
              >
                Continue to checkout
              </LoadingButton>
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
      </Box>
    </Drawer>
  );
};

export default Cart;

import { Close, LunchDining } from "@mui/icons-material";
import { Box, Button, Drawer, TextField, Typography } from "@mui/material";
import React from "react";
import { addToCart, minusFromCart } from "../redux/itemsSlice";
import { useDispatch } from "react-redux";

const Cart = ({ isDrawerOpen, setIsDrawerOpen, items }) => {
  const cartItems = items.filter((item) => item.count >= 1);

  const dispatch = useDispatch();

  return (
    <Drawer
      anchor="right"
      open={isDrawerOpen}
      onClose={() => setIsDrawerOpen(false)}
    >
      <Box width="100%" height="100%" display="flex" flexDirection="column">
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
        <Box flex="1" padding={2} sx={{ overflow: "auto" }}>
          {cartItems.map((item) => (
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
                <Button>Remove</Button>
              </Box>
              <Box display="flex" alignItems="center">
                <Box
                  margin="0 10px"
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  width="30px"
                  height="30px"
                  bgcolor="pink"
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
                    color="w"
                    size="small"
                    sx={{
                      width: "20px",
                      padding: "5px",
                      textAlign: "center",
                      minWidth: "0px",
                      marginRight: "10px",
                      bgcolor: "green",
                      height: "20px",
                      "&:hover": {
                        backgroundColor: "darkgreen",
                      },
                    }}
                    onClick={() => dispatch(addToCart(item.id))}
                  >
                    +
                  </Button>
                  <Button
                    color="w"
                    size="small"
                    sx={{
                      width: "20px",
                      padding: "5px",
                      textAlign: "center",
                      minWidth: "0px",
                      marginRight: "10px",
                      bgcolor: "green",
                      height: "20px",
                      "&:hover": {
                        backgroundColor: "darkgreen",
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
        </Box>
        <Box padding={3} borderTop="1px solid grey">
          <Box
            display="flex"
            justifyContent="space-between"
            marginBottom="15px"
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
  );
};

export default Cart;

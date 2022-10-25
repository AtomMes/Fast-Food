import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { addToCart, minusFromCart, removeFromCart } from "../redux/itemsSlice";

const CartItems = ({ items }) => {
  const dispatch = useDispatch();

  return (
    <>
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
    </>
  );
};

export default CartItems;

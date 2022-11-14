import React from "react";
import Content from "../components/Content";
import Header from "../components/Header";
import Checkout from "../components/Checkout";
import { Box } from "@mui/material";

const Order = () => {

  return (
  <Box  sx={{ backgroundColor: "w.main" }}>
      <Checkout />
      <Header
        text1="Get your food "
        text2="delivered, or pick-up in "
        text3="store ."
      />
      <Content />
    </Box>
  );
};
export default Order;

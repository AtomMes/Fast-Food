import React from "react";
import Content from "../components/Content";
import Header from "../components/Header";
import Menu from "../components/Menu";

const Order = () => {
  return (
    <>
      <Header
        text1="Get your food "
        text2="delivered, or pick-up in "
        text3="store ."
      />
      <Menu />
      <Content />
    </>
  );
};

export default Order;

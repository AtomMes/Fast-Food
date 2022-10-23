import React from "react";
import Content from "../components/Content";
import Header from "../components/Header";
import Checkout from "../components/Checkout";

const Order = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Checkout />
      <Header
        text1="Get your food "
        text2="delivered, or pick-up in "
        text3="store ."
      />
      <Content />
    </>
  );
};
export default Order;

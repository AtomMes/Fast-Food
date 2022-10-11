import React from "react";
import Content from "../components/Content";
import Header from "../components/Header";
import Buttons from "../components/Buttons";

const Order = () => {
  const [buttons, setButtons] = React.useState([
    {
      name: "Full Menu",
      id: 1,
      isSelected: false,
    },
    {
      name: "Burgers",
      id: 2,
      isSelected: false,
    },
    {
      name: "Sides",
      id: 3,
      isSelected: false,
    },
    {
      name: "Drinks",
      id: 4,
      isSelected: false,
    },
  ]);

  const handleClick = (id) => {
    setButtons(
      buttons.map((button) => {
        if (id === button.id) {
          return { ...button, isSelected: true };
        } else {
          return { ...button, isSelected: false };
        }
      })
    );
  };

  return (
    <>
      <Header
        text1="Get your food "
        text2="delivered, or pick-up in "
        text3="store ."
      />
      <Buttons
        buttons={buttons}
        setButtons={setButtons}
        handleClick={handleClick}
      />
      <Content />
    </>
  );
};
export default Order;

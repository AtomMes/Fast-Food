import { Box } from "@mui/material";
import React from "react";
import Buttons from "../components/Buttons";
import Header from "../components/Header";
import Questions from "../components/Questions";

const FAQ = () => {
  const [buttons, setButtons] = React.useState([
    {
      name: "Our Food",
      id: 1,
      isSelected: false,
    },
    {
      name: "Our Delivery",
      id: 2,
      isSelected: false,
    },
    {
      name: "Our company",
      id: 3,
      isSelected: false,
    }
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
    <Box>
      <Header text1="Frequently Asked " text2="Questions" />
      <Buttons buttons={buttons} handleClick={handleClick} setButtons={setButtons} />
      <Questions />
    </Box>
  );
};

export default FAQ;

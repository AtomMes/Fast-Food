import { Box } from "@mui/material";
import React from "react";
import Buttons from "../components/Buttons";
import Header from "../components/Header";
import Questions from "../components/Questions";

const FAQ = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  return (
    <Box>
      <Header text1="Frequently Asked " text2="Questions" />
      <Box className="animate__animated animate__fadeIn">
        <Questions />
      </Box>
    </Box>
  );
};

export default FAQ;

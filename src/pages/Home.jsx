import { Box, Typography } from "@mui/material";
import React from "react";
import TextAndImage from "../components/TextAndImage";
import HowItWorks from "../components/HowItWorks";
import home2 from "../images/home2.png";
import home3 from "../images/home3.png";
import home1 from "../images/home4.png";
import Content from "../components/Content";
import FW from "../components/FW";

const Home = () => {
  const header1 = "Beautiful food & takeaway, delivered to your door.";
  const button1 = `Place an Order`;

  const header2 = `The home of fresh products`;
  const button2 = `Learn About Us`;

  const header3 = `Order online with our simple checkout.`;
  const button3 = `See our FAQ`;

  const header4 = `Call our store and takeaway when it suits you best.`;
  const button4 = `Ph +61 233 2333`;

  const subtitle = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500.`;

  return (
    <Box sx={{ backgroundColor: "w.main" }}>
      <TextAndImage
        header={header1}
        subtitle={subtitle}
        button={button1}
        image={home1}
        to="/order"
      />
      <TextAndImage
        header={header2}
        subtitle={subtitle}
        button={button2}
        image={home2}
        to="/company"
      />
      <HowItWorks />
      <Typography
        color="primary"
        variant="h4"
        fontWeight="bold"
        textAlign="center"
        marginBottom="15px"
      >
        Browse Our Menu
      </Typography>
      <Typography
        color="text.secondary"
        textAlign="center"
        variant="body2"
        width="400px"
        margin="0 auto"
      >
        Use our menu to place an order online, or phone our store to place a
        pickup order. Fast and fresh food.
      </Typography>
      <Content button="Go to order page" />
      <TextAndImage
        header={header3}
        subtitle={subtitle}
        button={button3}
        image={home3}
        to="/FAQ"
        reverse
      />
      <FW />
    </Box>
  );
};

export default Home;

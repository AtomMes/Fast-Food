import { Box, Button, Typography } from "@mui/material";
import fixedImage from "../images/fixedImage.jpg";
import React from "react";
import TextAndImage from "../components/TextAndImage";
import HowItWorks from "../components/HowItWorks";
import home1 from "../images/home1.png";
import home2 from "../images/home2.png";
import home3 from "../images/home3.png";
import home4 from "../images/home4.png";
import Buttons from "../components/Buttons";
import Content from "../components/Content";
// header, subtitle, button, image, reverse
const Home = () => {
  const header1 = "Beautiful food & takeaway, delivered to your door.";
  const subtitle1 = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500.`;
  const button1 = `Place an Order`;

  const header2 = `The home of fresh products`;
  const subtitle2 = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500.`;
  const button2 = `Learn About Us`;

  const header3 = `Order online with our simple checkout.`;
  const subtitle3 = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500.`;
  const button3 = `See our FAQ`;

  const header4 = `Call our store and takeaway when it suits you best.`;
  const subtitle4 = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500.`;
  const button4 = `Ph +61 233 2333`;

  const [buttons, setButtons] = React.useState([
    {
      name: "Burgers",
      id: 1,
      isSelected: false,
    },
    {
      name: "Sides",
      id: 2,
      isSelected: false,
    },
    {
      name: "Drinks",
      id: 3,
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
    <Box>
      <TextAndImage
        header={header1}
        subtitle={subtitle1}
        button={button1}
        image={home1}
      />
      <TextAndImage
        header={header2}
        subtitle={subtitle2}
        button={button2}
        image={home2}
        bgcolor="#f5fbfc"
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
      <Buttons
        buttons={buttons}
        handleClick={handleClick}
        setButtons={setButtons}
      />
      <Content button="See full menu" />
      <TextAndImage
        header={header3}
        subtitle={subtitle3}
        button={button3}
        image={home3}
        reverse
      />

      <TextAndImage
        header={header4}
        subtitle={subtitle4}
        button={button4}
        image={home4}
      />
      <Box
        display="flex"
        justifyContent="space-around"
        sx={{ flexDirection: { xs: "column", md: "row" } }}
      >
        <Box
          component="img"
          alt="img"
          src={fixedImage}
          sx={{
            width: {
              xs: "100%",
              md: "49%",
            },
          }}
        />
        <Box
          sx={{
            bgcolor: "#35b8be",
            width: {
              xs: "100%",
              md: "49%",
            },
          }}
          display="flex"
          flexDirection="column"
          alignItems="start"
          justifyContent="center"
          padding="50px"
        >
          <Typography
            marginBottom="40px"
            sx={{ color: "white" }}
            fontWeight="bold"
            variant="h2"
          >
            Support good food <br /> and local business
          </Typography>
          <Button
            color="w"
            size="large"
            variant="contained"
            sx={{
              color: "#35b8be",
              height: "60px",
              width: "150px",
              textTransform: "unset",
              fontWeight: "400",
              fontSize: "18px",
            }}
          >
            Order Now
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;

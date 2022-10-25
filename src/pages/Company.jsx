import { Box, Typography,} from "@mui/material";
import freshFoodSvg from "../images/freshFood.png";
import fixedImage from "../images/fixedImage.jpg";
import wave from "../images/wave.svg";
import React from "react";
import Header from "../components/Header";
import TextAndImage from "../components/TextAndImage";

const numbers = [62, 13, 34, 57];

const Company = () => {
  const header = "The home of fresh products";
  const subtitle = `Lorem Ipsum is simply dummy text of the printing and typesetting
  industry. Lorem Ipsum has been the industry's standard dummy text ever
  since the 1500.`;
  const button = "Learn About Us";
  const image = freshFoodSvg;

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Box>
      <Box
        component="img"
        src={fixedImage}
        sx={{
          position: "fixed",
          top: "-100px",
          zIndex: "-1000",
          filter: "brightness(50%)",
          margin: "auto",
        }}
      />
      <Header text1="Our company focuses on " text2="food and people" />
      <TextAndImage
        header={header}
        subtitle={subtitle}
        button={button}
        image={image}
      />
      <Box
        width="100%"
        maxWidth="1200px"
        margin="0 auto"
        display="flex"
        justifyContent="space-around"
        padding="150px 0"
        flexWrap="wrap"
      >
        {numbers.map((number, i) => (
          <Box
            key={i}
            display="flex"
            flexDirection="column"
            alignItems="center"
            gap={1}
            sx={{
              width: { xs: "50%", md: "25%" },
              marginBottom: { xs: "20px", md: "0" },
            }}
          >
            <Typography variant="h1" fontWeight="bold" sx={{ color: "white" }}>
              {number}
            </Typography>
            <Box component="img" alt="wave" src={wave} />
            <Typography variant="h6" sx={{ color: "white" }}>
              Fiesty Menu Items
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Company;

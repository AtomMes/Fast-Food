import { Box, Typography } from "@mui/material";
import React from "react";
import step1 from "../images/step1.png";
import step2 from "../images/step2.png";
import step3 from "../images/step3.png";

const HowItWorks = () => {
  return (
    <>
      <Box width="100%" maxWidth="1200px" margin="100px auto">
        <Typography
          color="primary"
          variant="h4"
          fontWeight="bold"
          textAlign="center"
          marginBottom="50px"
        >
          How It Works
        </Typography>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-around"
          sx={{ flexDirection: { xs: "column", md: "row" } }}
        >
          <Box
            width="25%"
            display="flex"
            alignItems="center"
            flexDirection="column"
            marginBottom="35px"
          >
            <Box
              component="img"
              width="100%"
              alt="img"
              marginBottom="40px"
              src={step1}
            />
            <Typography
              variant="h6"
              textAlign="center"
              sx={{ color: "ht.main" }}
              marginBottom='10px'
            >
              Adapt your menu items
            </Typography>
            <Typography
              color="text.secondary"
              textAlign="center"
              sx={{ color: "ht.main" }}
            >
              Easily adapt your menu using the webflow CMS and allow customers
              to browse your items.
            </Typography>
          </Box>
          <Box
            width="25%"
            display="flex"
            alignItems="center"
            flexDirection="column"
            marginBottom="35px"
          >
            <Box
              component="img"
              width="100%"
              alt="img"
              marginBottom="40px"
              src={step2}
            />
            <Typography
              variant="h6"
              textAlign="center"
              sx={{ color: "ht.main" }}
              marginBottom='10px'

            >
              Accept online orders & takeout
            </Typography>
            <Typography
              color="text.secondary"
              textAlign="center"
              sx={{ color: "ht.main" }}
            >
              Let your customers order and pay via the powerful ecommerce
              system, or simple let them call your store.
            </Typography>
          </Box>
          <Box
            width="25%"
            display="flex"
            alignItems="center"
            flexDirection="column"
            marginBottom="35px"
          >
            <Box
              component="img"
              width="100%"
              alt="img"
              marginBottom="40px"
              src={step3}
            />
            <Typography
              variant="h6"
              textAlign="center"
              marginBottom='10px'
              sx={{ color: "ht.main" }}

            >
              Manage delivery or takeout
            </Typography>
            <Typography
              color="text.secondary"
              textAlign="center"
              sx={{ color: "ht.main" }}
            >
              Manage your own logistics and take orders simply through the
              ecommerce system.
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default HowItWorks;

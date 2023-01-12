import { Box, Typography, Button } from "@mui/material";
import fixedImage from "../images/fixedImage.jpg";
import React from "react";
import { Link } from "react-router-dom";

const FW = () => {
  return (
    <Box
      display="flex"
      justifyContent="space-around"
      sx={{ flexDirection: { xs: "column", md: "row" } }}
      maxWidth="1920px"
      margin="80px auto 0"
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
          bgcolor: "primary.main",
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
          sx={{ color: "w.main" }}
          fontWeight="bold"
          variant="h2"
        >
          Support good food <br /> and local business
        </Typography>
        <Link to="/order" style={{ textDecoration: "none" }}>
          <Button
            size="large"
            variant="contained"
            sx={{
              background: "white",
              color: "primary.main",
              height: "60px",
              width: "150px",
              textTransform: "unset",
              fontWeight: "400",
              fontSize: "18px",
            }}
          >
            Order Now
          </Button>
        </Link>
      </Box>
    </Box>
  );
};

export default FW;

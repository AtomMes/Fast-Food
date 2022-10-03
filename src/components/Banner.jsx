import React from "react";
import { Box, Typography, styled } from "@mui/material";


const Banner = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#35b8be",
        minHeight: "40px",
        display: { xs: "none", sm: "flex" },
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography sx={{color:'white'}}>
        We're open and available for takeaway & delivery. Order Now
      </Typography>
    </Box>
  );
};

export default Banner;

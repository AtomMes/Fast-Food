import React from "react";
import { Box, Typography } from "@mui/material";

const Banner = () => {
  return (
    <Box
      sx={{
        backgroundColor: "primary.main",
        minHeight: "40px",
        display: { xs: "none", sm: "flex" },
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography sx={{ color: "white" }}>
        We're open and available for takeaway & delivery. Order Now
      </Typography>
    </Box>
  );
};

export default Banner;

import React from "react";
import { Box, Typography, styled } from "@mui/material";

const Header = () => {
  return (
    <Box
      minHeight={420}
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        bgcolor: "#f5fbfc",
      }}
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: "1200px",
          display: "flex",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <Typography
          variant="h2"
          sx={{
            fontWeight: "700",
            margin: "20 auto",
            maxWidth: "700px",
          }}
        >
          Get your food{" "}
          <Typography
            variant="h2"
            sx={{ fontWeight: "700", color: "#35b8be", display: "inline" }}
          >
            delivered,{" "}
          </Typography>
          <Typography
            variant="h2"
            sx={{ fontWeight: "700", color: "#35b8be", display: "inline" }}
          >
            or pick-up in{" "}
          </Typography>
          store .
        </Typography>
      </Box>
    </Box>
  );
};

export default Header;

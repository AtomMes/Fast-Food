import React from "react";
import { Box, Typography } from "@mui/material";

const Header = ({ text1, text2, text3 }) => {
  return (
    <Box
      minHeight={420}
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        bgcolor: "lig.main",
      }}
    >
      <Box
        display="flex"
        justifyContent="center"
        textAlign="center"
        w="100%"
        maxWidth="1200px"
        className="animate__animated animate__fadeInUp"
      >
        <Typography
          variant="h2"
          sx={{
            fontWeight: "700",
            margin: "20 auto",
            maxWidth: "700px",
          }}
        >
          {text1 && text1}
          <Box sx={{ color: "primary.main", display: "inline" }}>
            {text2 && text2}
          </Box>
          {text3 && text3}
        </Typography>
      </Box>
    </Box>
  );
};

export default Header;

import { Box, Stack, Typography, Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const TextAndImage = ({
  header,
  subtitle,
  button,
  image,
  reverse,
  bgcolor,
  to,
}) => {
  return (
    <Box sx={{ bgcolor:  "w.main" }}>
      <Box
        sx={{ display: "flex", flexDirection: { xs: "column", md: "row" } }}
        alignItems="center"
        width="100%"
        maxWidth="1200px"
        margin="0 auto"
        justifyContent="space-between"
        minHeight="770px"
        padding="30px"
      >
        {reverse && (
          <Box
            width="45%"
            display="flex"
            justifyContent="center"
            alignItems="center"
            className="animate__animated animate__fadeIn"
          >
            <img src={image} alt="food" width="100%" />
          </Box>
        )}
        <Stack
          width="55%"
          display="flex"
          justifyContent="center"
          sx={{ alignItems: { xs: "center", md: "start" } }}
          marginBottom="30px"
        >
          <Typography
            color="primary"
            variant="h2"
            fontWeight="bold"
            sx={{ textAlign: { xs: "center", md: "start" } }}
            marginBottom="20px"
            className="animate__animated animate__fadeIn"
          >
            {header}
          </Typography>
          <Typography
            variant="body1"
            marginBottom="20px"
            sx={{ textAlign: { xs: "center", md: "start" } ,color:'g.main' }}
            className="animate__animated animate__fadeIn"
          >
            {subtitle}
          </Typography>
          <Link to={to} style={{ textDecoration: "none" }}>
            <Button
              variant="outlined"
              sx={{
                color:"white",
                backgroundColor: "primary.main",
                width: "160px",
                fontWeight: "400",
                minHeight: "52px",
                "&:hover": {
                  backgroundColor: "primary.dark",
                },
                whiteSpace: "nowrap",
                textTransform: "capitalize",
              }}
            >
              {button}
            </Button>
          </Link>
        </Stack>
        {!reverse && (
          <Box
            width="45%"
            display="flex"
            justifyContent="center"
            alignItems="center"
            className="animate__animated animate__fadeIn"
          >
            <img src={image} alt="food" width="100%" />
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default TextAndImage;

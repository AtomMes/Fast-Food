import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import { Box, Button, IconButton, styled, Typography } from "@mui/material";
import React from "react";
import MainLogo from "../images/5e865e09d8efa341ab76b5e7_Logo";

const Footer = () => {
  return (
    <Box
      sx={{
        bgcolor: "#f5fbfc",
        width: "100%",
        paddingTop: "100px",
      }}
    >
      <Box
        sx={{ 
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <Box
          sx={{
            display: { xs: "block", md: "flex" },
            justifyContent: "space-between",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              margin: { xs: "0 auto", lg: "0" },
            }}
          >
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="logo"
              sx={{ width: "60px", height: "60px" }}
            >
              <MainLogo />
            </IconButton>
            <Typography
              variant="subtitle1"
              sx={{ marginTop: "10px", marginBottom: "30px" }}
            >
              Takeaway & Delivery template <br /> for small - medium businesses.
            </Typography>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Box
              display="flex"
              sx={{
                flexDirection: "column",
                marginBottom: "20px",
                alignItems: "center",
                width: "200px",
              }}
            >
              <Typography sx={{ fontWeight: "bold", marginBottom: "20px" }}>
                <Button color="b">Company</Button>
              </Typography>
              <Typography sx={{ fontWeight: "400", marginBottom: "20px" }}>
                <Button color="b">Home</Button>
              </Typography>
              <Typography sx={{ fontWeight: "400", marginBottom: "20px" }}>
                <Button color="b">Order</Button>
              </Typography>
              <Typography sx={{ fontWeight: "400", marginBottom: "20px" }}>
                <Button color="b">FAQ</Button>
              </Typography>
              <Typography sx={{ fontWeight: "400", marginBottom: "20px" }}>
                <Button color="b">Contact</Button>
              </Typography>
            </Box>
            <Box
              display="flex"
              sx={{
                flexDirection: "column",
                marginBottom: "20px",
                alignItems: "center",
                width: "200px",
              }}
            >
              <Typography sx={{ fontWeight: "bold", marginBottom: "20px" }}>
                <Button color="b">Template</Button>
              </Typography>
              <Typography sx={{ fontWeight: "400", marginBottom: "20px" }}>
                <Button color="b">Style Guide</Button>
              </Typography>
              <Typography sx={{ fontWeight: "400", marginBottom: "20px" }}>
                <Button color="b">Changelog</Button>
              </Typography>
              <Typography sx={{ fontWeight: "400", marginBottom: "20px" }}>
                <Button color="b">License</Button>
              </Typography>
              <Typography sx={{ fontWeight: "400", marginBottom: "20px" }}>
                <Button color="b"> Webflow university</Button>
              </Typography>
            </Box>
            <Box
              display="flex"
              sx={{
                flexDirection: "column",
                marginBottom: "20px",
                alignItems: "center",
                width: "200px",
              }}
            >
              <Typography sx={{ fontWeight: "bold", marginBottom: "20px" }}>
                <Button color="b">FlowBase</Button>
              </Typography>
              <Typography sx={{ fontWeight: "400", marginBottom: "20px" }}>
                <Button color="b"> More Cloneables</Button>
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            padding: "20px 0 20px",
            borderTop: "1px solid rgba(0, 0, 0, 0.151)",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography>Built by Flowbase, Powered by Webflow</Typography>
          <Box display="flex" sx={{ gap: "10px" }}>
            <Button
              variant="outlined"
              color="b"
              sx={{
                width: "40px",
                height: "40px",
                borderRadius: "100%",
                padding: "0",
                display: "flex",
                padding: 0,
                minHeight: 0,
                minWidth: 0,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Instagram />
            </Button>
            <Button
              variant="outlined"
              color="b"
              sx={{
                width: "40px",
                height: "40px",
                borderRadius: "100%",
                padding: "0",
                display: "flex",
                padding: 0,
                minHeight: 0,
                minWidth: 0,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Facebook />{" "}
            </Button>
            <Button
              variant="outlined"
              color="b"
              sx={{
                width: "40px",
                height: "40px",
                borderRadius: "100%",
                padding: "0",
                display: "flex",
                padding: 0,
                minHeight: 0,
                minWidth: 0,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Twitter />{" "}
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;

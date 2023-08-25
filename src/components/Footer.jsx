import { AssignmentInd, GitHub, LinkedIn } from "@mui/icons-material";
import { Box, Button, IconButton, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import MainLogo from "../images/mainLogo.svg";

const navigationButtons2 = [
  {
    text: "Company",
    to: "/company",
  },
  {
    text: "FAQ",
    to: "/faq",
  },
];
const navigationButtons1 = [
  {
    text: "Home",
    to: "/home",
  },
  {
    text: "Order",
    to: "/order",
  },
];

const socNet = [
  {
    icon: <LinkedIn />,
    to: "https://linkedin.com/in/artem-mesropyan",
  },
  {
    icon: <AssignmentInd />,
    to: "https://artem-mesropyan-dev.netlify.app",
  },
  {
    icon: <GitHub />,
    to: "https://github.com/AtomMes/Fast-Food",
  },
];

const Footer = () => {
  return (
    <Box
      sx={{
        bgcolor: "lig.main",
        width: "100%",
        paddingTop: "50px",
      }}
    >
      <Box
        sx={{
          maxWidth: "1200px",
          paddingX: "20px",
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
              margin: { xs: "0 auto", lg: "20px 0" },
            }}
          >
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              sx={{ width: "60px", height: "60px" }}
            >
              <Box
                component="img"
                alt="img"
                src={MainLogo}
                sx={{ width: "50px", height: "50px" }}
              />
            </IconButton>
            <Typography
              variant="subtitle1"
              sx={{ marginTop: "20px", marginBottom: "30px", color: "ht.main" }}
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
                justifyContent: "center",
                width: "200px",
              }}
            >
              {navigationButtons1.map((contact, i) => (
                <a key={i} href={contact.to} style={{ textDecoration: "none" }}>
                  <Typography sx={{ fontWeight: "400", marginBottom: "20px" }}>
                    <Button>{contact.text}</Button>
                  </Typography>
                </a>
              ))}
            </Box>
            <Box
              display="flex"
              sx={{
                flexDirection: "column",
                marginBottom: "20px",
                alignItems: "center",
                justifyContent: "center",

                width: "200px",
              }}
            >
              {navigationButtons2.map((nav, i) => (
                <Link key={i} to={nav.to} style={{ textDecoration: "none" }}>
                  <Typography sx={{ fontWeight: "400", marginBottom: "20px" }}>
                    <Button>{nav.text}</Button>
                  </Typography>
                </Link>
              ))}
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            padding: "20px 0 20px",
            borderTop: "1px solid",
            borderTopColor: "g.light",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography sx={{ color: "ht.main" }}>Built by Artem</Typography>
          <Box display="flex" sx={{ gap: "10px" }}>
            {socNet.map((net, i) => (
              <a key={i} href={net.to} style={{ textDecoration: "none" }}>
                <Button
                  variant="outlined"
                  sx={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "100%",
                    borderColor: "primary",
                    display: "flex",
                    padding: 0,
                    minHeight: 0,
                    minWidth: 0,
                  }}
                >
                  {net.icon}
                </Button>
              </a>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;

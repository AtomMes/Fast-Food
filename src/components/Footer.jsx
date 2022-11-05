import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import { Box, Button, IconButton, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import MainLogo from "../images/mainLogo.svg";

const navigationButtons = [
  {
    text: "Home",
    to: "/home",
  },
  {
    text: "Order",
    to: "/order",
  },
  {
    text: "Company",
    to: "/company",
  },
  {
    text: "FAQ",
    to: "/faq",
  },
];

const contacts = [
  {
    text: "GitHub",
    to: "https://github.com/AtomMes",
  },
  {
    text: "LinkedIn",
    to: "https://www.linkedin.com/in/artem-mesropyan-27b04a24a/",
  },
];

const socNet = [
  {
    icon: <Instagram />,
    to: "https://www.instagram.com/a.t.m.e.s/",
  },
  {
    icon: <Facebook />,
    to: "https://www.facebook.com/atom.mesropyan/",
  },
];

const Footer = () => {
  return (
    <Box
      sx={{
        bgcolor: "lig.main",
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
              sx={{ marginTop: "20px", marginBottom: "30px" }}
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
              {contacts.map((contact, i) => (
                <a key={i} href={contact.to} style={{ textDecoration: "none" }}>
                  <Typography sx={{ fontWeight: "400", marginBottom: "20px" }}>
                    <Button color="b">{contact.text}</Button>
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
                width: "200px",
              }}
            >
              {navigationButtons.map((nav, i) => (
                <Link key={i} to={nav.to} style={{ textDecoration: "none" }}>
                  <Typography sx={{ fontWeight: "400", marginBottom: "20px" }}>
                    <Button color="b">{nav.text}</Button>
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
            borderTopColor:'g.light',
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography>Built by Atom</Typography>
          <Box display="flex" sx={{ gap: "10px" }}>
            {socNet.map((net, i) => (
              <a key={i} href={net.to} style={{ textDecoration: "none" }}>
                <Button
                  variant="outlined"
                  color="b"
                  sx={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "100%",
                    display: "flex",
                    padding: 0,
                    minHeight: 0,
                    minWidth: 0,
                    alignItems: "center",
                    justifyContent: "center",
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

import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Button from "@mui/material/Button";
import { Box, Typography } from "@mui/material";

import { Link } from "react-router-dom";

const Checkout = ({ open, handleClose }) => {
  return (
    <Backdrop
      sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={open}
      onClick={handleClose}
    >
      <Box
        width="600px"
        color="primary"
        borderRadius="15px"
        border="1px solid transparent"
        sx={{
          transition: ".1s ease-in",
          backgroundColor: "#E3E3E3",
          color: "black",
          "&:hover": {
            border: "2px solid #35b8be",
          },
        }}
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        padding="25px"
        gap={2}
      >
        <Typography
          width="100px"
          height="100px"
          color="primary"
          border="1px solid  #35b8be"
          borderRadius="50%"
          display="flex"
          justifyContent="center"
          alignItems="center"
          variant="h2"
        >
          ✓
        </Typography>
        <Typography textAlign="center" variant="h4">
          Thank you for your purchase!
        </Typography>
        <Typography color="gray" textAlign="center" variant="h6">
          {" "}
          Your order will be delivered to you soon{" "}
        </Typography>
        <Link to="/order" style={{ textDecoration: "none" }}>
          <Button
            sx={{
              width: "100%",
              height: "50px",
              color: "white",
              textTransform: "none",
            }}
            variant="contained"
          >
            Return to the store
          </Button>
        </Link>
      </Box>
    </Backdrop>
  );
};

export default Checkout;

import { Close, LunchDining } from "@mui/icons-material";
import { Box, Button, Drawer, TextField, Typography } from "@mui/material";
import React from "react";

const Cart = ( {isDrawerOpen, setIsDrawerOpen, f, } ) => {
  return (
    <Drawer
      width="240px"
      anchor="right"
      open={isDrawerOpen}
      onClose={() => setIsDrawerOpen(false)}
    >
      <Box width="100%" height="100%" display="flex" flexDirection="column">
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          borderBottom="1px solid grey"
          padding={3}
        >
          <Typography variant="h4" sx={{ fontWeight: "bold" }}>
            Your Order
          </Typography>
          <Close onClick={() => setIsDrawerOpen(false)} cursor="pointer" />
        </Box>
        <Box flex="1" padding={2} sx={{ overflow: "auto" }}>
          {f.map((ff, i) => (
            <Box
              display="flex"
              alignItems="center"
              key={i}
              borderBottom="1px solid rgb(220,220,220)"
            >
              <LunchDining sx={{ width: "90px", height: "auto" }} />
              <Box flex="1">
                <Typography>Name of the Food</Typography>
                <Typography>$ 4.00 USD</Typography>
                <Button>Remove</Button>
              </Box>
              <Box>
                <TextField
                  size="small"
                  variant="outlined"
                  sx={{
                    width: "65px",
                    marginRight: "10px",
                  }}
                  type="number"
                />
              </Box>
            </Box>
          ))}
        </Box>
        <Box padding={3} borderTop="1px solid grey">
          <Box
            display="flex"
            justifyContent="space-between"
            marginBottom="15px"
          >
            <Typography variant="h5">Subtotal</Typography>
            <Typography variant="h5">$22.00 USD</Typography>
          </Box>
          <Box>
            <Button
              sx={{ width: "100%", height: "50px", color: "white" }}
              variant="contained"
            >
              Continue to checkout
            </Button>
          </Box>
        </Box>
      </Box>
    </Drawer>
  );
};

export default Cart;

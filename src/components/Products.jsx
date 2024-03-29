import React from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/itemsSlice";

const Products = ({ food }) => {
  const dispatch = useDispatch();

  return (
    <Box
      sx={{
        marginTop: "30px",
        paddingX: "20px",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
      }}
    >
      {food.map((item) => (
        <Box
          key={item.id}
          sx={{
            display: "flex",
            columnGap: "25px",
            flexDirection: { xs: "column", sm: "row" },
            border: "0.5px solid rgba(53, 184, 190, 0.35)",
            alignItems: "center",
            borderRadius: "6px",
            width: { xs: "49%", sm: "100%", md: "49%" },
            padding: "25px",
            transition: ".1s ease-in",
            marginBottom: "22px",
            "&:hover": {
              border: "0.5px solid rgba(53, 184, 190, .6)",
            },
          }}
        >
          <Link to={`/product/${item.id}`}>
            <Box
              component="img"
              src={item.imageUrl}
              width="130px"
              height="auto"
              borderRadius="10px"
            />
          </Link>
          <Box
            sx={{
              width: "100%",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", sm: "row" },
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "9px",
              }}
            >
              <Typography variant="h6" sx={{ color: "ht.main" }}>
                {item.name}
              </Typography>
              <Typography color="primary">$ {item.price}.00 USD</Typography>
            </Box>
            <Typography
              marginBottom="8px"
              sx={{
                color: "ht.main",
                textAlign: { xs: "center", sm: "initial" },
              }}
            >
              {item.description}
            </Typography>
            <Box
              display="flex"
              sx={{
                justifyContent: { xs: "center", sm: "initial" },
              }}
            >
              <Button
                variant="contained"
                sx={{
                  color: "white",
                  textTransform: "capitalize",
                  whiteSpace: "nowrap",
                  height: "40px",
                  padding: 1,
                }}
                onClick={() => dispatch(addToCart(item.id))}
              >
                {item.count > 0 && (
                  <Box
                    marginRight="5px"
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    minWidth="25px"
                    height="25px"
                    fontSize="14px"
                    paddingTop="3px"
                    bgcolor="white"
                    color="primary.main"
                    borderRadius="50%"
                  >
                    {item.count}
                  </Box>
                )}
                Add to cart
              </Button>
            </Box>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default Products;

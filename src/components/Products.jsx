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
            flexDirection: { xs: "column", sm: "row" },
            border: "0.5px solid rgba(53, 184, 190, 0.35)",
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
              marginRight="25px"
              borderRadius="10px"
            />
          </Link>
          <Box
            sx={{
              width: "100%",
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
              <Typography variant="h6">{item.name}</Typography>
              <Typography color="primary">$ {item.price}.00 USD</Typography>
            </Box>
            <Typography marginBottom="8px">{item.description}</Typography>
            <Box display='flex'>
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
                    color="#35b8be"
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

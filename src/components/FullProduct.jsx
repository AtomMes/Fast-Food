import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { addToCart } from "../redux/itemsSlice";

const FullProduct = ({ item, text1, text2 }) => {
  const dispatch = useDispatch();
  const { items } = useSelector((state) => state.itemsSlice);

  React.useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  return (
    <Box
      width="100%"
      maxWidth="1200px"
      margin="100px auto"
      display="flex"
      justifyContent="space-between"
      sx={{
        flexDirection: {
          xs: "column",
          lg: "row",
        },
      }}
    >
      <Box flex="1" display="flex" justifyContent="center" alignItems="center">
        <Box
          component="img"
          src={item.imageUrl}
          width="95%"
          height="auto"
          margin="0 12px"
          borderRadius="25px"
        />
      </Box>
      <Box
        flex="1"
        display="flex"
        flexDirection="column"
        // alignItems="center"
        gap={3}
        width="95%"
        padding="25px 0"
        margin='0 auto'
      >
        <Typography variant="h3" fontWeight="bold">
          {item.name}
        </Typography>
        <Typography variant="h5" color="primary" fontWeight={500}>
          $ {item.price}.00 USD
        </Typography>
        <Box
          display="flex"
          flexDirection="column"
          gap={1}
          sx={{
            borderTop: "0.5px solid rgba(53, 184, 190, 0.35)",
            padding: "27px 0",
          }}
        >
          <Typography color="text.secondary" fontSize="18px" fontWeight={400}>
            {text1}
          </Typography>
          <Typography color="text.secondary" fontSize="18px" fontWeight={400}>
            {text2}
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            borderBottom: "0.5px solid rgba(53, 184, 190, 0.35)",
            padding: "27px 0",
          }}
        >
          <Button
            variant="contained"
            sx={{
              color: "white",
              textTransform: "capitalize",
              whiteSpace: "nowrap",
              height: "40px",
            }}
            onClick={() => dispatch(addToCart(item.id))}
          >
            {item.count > 0 && (
              <Box
                marginRight="10px"
                display="flex"
                justifyContent="center"
                alignItems="center"
                width="28px"
                height="28px"
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
  );
};

export default FullProduct;

import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
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
      margin="0 auto"
      padding='100px 0'
      display="flex"
      justifyContent="space-between"
      sx={{
        backgroundColor: "w.main",
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
        gap={3}
        width="95%"
        padding="25px 0"
        margin="0 auto"
      >
        <Typography variant="h3" fontWeight="bold" sx={{color:'ht.main'}} >
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
            borderTop: "0.5px solid",
            borderTopColor: "primary.light",
            padding: "27px 0",
          }}
        >
          <Typography fontSize="18px" fontWeight={400} sx={{color:'ht.main'}} >
            {text1}
          </Typography>
          <Typography fontSize="18px" fontWeight={400} sx={{color:'ht.light'}} >
            {text2}
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            borderBottom: "0.5px solid ",
            borderBottomColor: "primary.light",
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
  );
};

export default FullProduct;

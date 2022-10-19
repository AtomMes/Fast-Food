import LunchDiningIcon from "@mui/icons-material/LunchDining";
import { Box, Button, TextField, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { useDispatch, useSelector } from "react-redux";

import axios from "axios";
import React from "react";
import { addToCart, setItems } from "../redux/itemsSlice";

const Content = ({ button }) => {
  const { items } = useSelector((state) => state.itemsSlice);
  const dispatch = useDispatch();

  React.useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(
        `https://634ef267df22c2af7b475a0f.mockapi.io/items`
      );
      dispatch(setItems(data));
    };
    fetchData();
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        width: "100%",

        maxWidth: "1200px",
        justifyContent: "space-between",
        margin: "50px auto",
      }}
    >
      {items.map((item) => (
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
          <Box
            component="img"
            src={item.imageUrl}
            width="130px"
            height="auto"
            marginRight="25px"
            borderRadius="10px"
          />
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
                display: { xs: "block", sm: "flex" },
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "9px",
              }}
            >
              <Typography variant="h6">{item.name}</Typography>
              <Typography color="primary">$ {item.price}.00 USD</Typography>
            </Box>
            <Typography marginBottom="8px">{item.description}</Typography>
            <Box sx={{ display: "flex" }}>
              <Button
                variant="contained"
                sx={{
                  color: "white",
                  textTransform: "capitalize",
                  whiteSpace: "nowrap",
                }}
                onClick={() => dispatch(addToCart(item.id))}
              >
                {item.count > 0 && (
                  <Box
                    marginRight="10px"
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    width="30px"
                    height="30px"
                    bgcolor="pink"
                    borderRadius="50%"
                    color="black"
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
      <Button
        variant="outlined"
        color="w"
        sx={{
          textTransform: "capitalize",
          color: "w",
          backgroundColor: "#35b8be",
          fontWeight: "400",
          minHeight: "52px",
          "&:hover": {
            backgroundColor: "#1a9da3",
          },
          whiteSpace: "nowrap",
          margin: "50px auto",
        }}
        endIcon={<KeyboardArrowRightIcon />}
      >
        {button ? (
          <Link to="/order" style={{ textDecoration: "none", color: "white" }}>
            {button}
          </Link>
        ) : (
          "Next"
        )}
      </Button>
    </Box>
  );
};

export default Content;

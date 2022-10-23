import LunchDiningIcon from "@mui/icons-material/LunchDining";
import { Box, Button  } from "@mui/material";
import { Link, useAsyncError } from "react-router-dom";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { useDispatch, useSelector } from "react-redux";

import axios from "axios";
import React from "react";
import { addToCart, setItems } from "../redux/itemsSlice";
import Buttons from "./Buttons";
import Products from "./Products";
import Skeletons from "./Skeletons";

const Content = ({ button }) => {
  const [buttons, setButtons] = React.useState([
    {
      name: "Full Menu",
      id: 0,
      isSelected: false,
    },
    {
      name: "Burgers",
      id: 1,
      isSelected: false,
    },
    {
      name: "Sides",
      id: 2,
      isSelected: false,
    },
    {
      name: "Drinks",
      id: 3,
      isSelected: false,
    },
  ]);

  const [selectedButton, setSelectedButton] = React.useState(0);

  const { items } = useSelector((state) => state.itemsSlice);
  const dispatch = useDispatch();
  const [food, setFood] = React.useState(items);
  const [loading, setLoading] = React.useState(true);

  const handleClick = (id) => {
    setSelectedButton(id);
  };

  React.useEffect(() => {
    setFood(items.filter((item) => item.types.includes(selectedButton)));
    setButtons(
      buttons.map((button) => {
        if (selectedButton === button.id) {
          return { ...button, isSelected: true };
        } else {
          return { ...button, isSelected: false };
        }
      })
    );
  }, [selectedButton]);

  React.useEffect(() => {
    setFood(items);
  }, []);
  React.useEffect(() => {
    setFood(items.filter((item) => item.types.includes(selectedButton)));
    localStorage.setItem("items", JSON.stringify(items));
    setLoading(false);
  }, [items]);

  const handlePlus = async (id) => {
    dispatch(addToCart(id));
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        flexWrap: "wrap",
        width: "100%",

        maxWidth: "1200px",
        justifyContent: "space-between",
        margin: "0 auto",
      }}
    >
      <Buttons buttons={buttons} handleClick={handleClick} />
      {loading ? <Skeletons /> : <Products food={food} />}
      {button && (
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
          <Link to="/order" style={{ textDecoration: "none", color: "white" }}>
            {button}
          </Link>
        </Button>
      )}
    </Box>
  );
};

export default Content;

import { Box, Button } from "@mui/material";
import { Link } from "react-router-dom";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import {  useSelector } from "react-redux";

import React from "react";
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedButton]);

  React.useEffect(() => {
    setFood(items);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  React.useEffect(() => {
    setFood(items.filter((item) => item.types.includes(selectedButton)));
    localStorage.setItem("items", JSON.stringify(items));
    setLoading(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [items]);

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
            backgroundColor: "primary.main",
            fontWeight: "400",
            minHeight: "52px",
            "&:hover": {
              backgroundColor: "primary.dark",
            },
            whiteSpace: "nowrap",
            margin: "50px auto",
          }}
          endIcon={<KeyboardArrowRightIcon />}
        >
          <Link to="/order" style={{ textDecoration: "none", color: "w.main" }}>
            {button}
          </Link>
        </Button>
      )}
    </Box>
  );
};

export default Content;

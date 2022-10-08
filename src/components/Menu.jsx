import { Box, Button } from "@mui/material";
import { useTheme } from "@mui/material";
import React from "react";

const Menu = () => {
  const [buttons, setButtons] = React.useState([
    {
      name: "Full Menu",
      id: 1,
      isSelected: false,
    },
    {
      name: "Burgers",
      id: 2,
      isSelected: false,
    },
    {
      name: "Sides",
      id: 3,
      isSelected: false,
    },
    {
      name: "Drinks",
      id: 4,
      isSelected: false,
    },
  ]);

  const handleClick = (id) => {
    setButtons(
      buttons.map((button) => {
        if (id === button.id) {
          return { ...button, isSelected: true };
        } else {
          return { ...button, isSelected: false };
        }
      })
    );
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: { xs: "wrap", sm: "nowrap" },
        alignItems: "center",
        justifyContent: "center",
        gap: "10px",
        padding: "120px 0px",
        width: "100%",
        maxWidth: "1200px",
        margin: "0 auto",
      }}
    >
      {buttons.map((button) => (
        <Button
          key={button.id}
          variant={!button.isSelected && "outlined"}
          color="b"
          sx={{
            color: button.isSelected ? "white" : "black",
            backgroundColor: button.isSelected && "#35b8be",
            width: { xs: "40%", sm: "20%" },
            fontWeight: "400",
            padding: "9px 45px",
            margin: "15px",
            minHeight: "52px",
            "&:hover": {
              backgroundColor: button.isSelected && "#1a9da3",
            },
            whiteSpace: "nowrap",
          }}
          value={button.name}
          onClick={() => handleClick(button.id)}
        >
          {button.name}
        </Button>
      ))}
    </Box>
  );
};

export default Menu;

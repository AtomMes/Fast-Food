import { Box, Button } from "@mui/material";
import React from "react";

const Buttons = ({ buttons, handleClick }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: { xs: "wrap", sm: "nowrap" },
        alignItems: "center",
        justifyContent: "center",
        gap: "10px",
        padding: "120px 0 0",
        width: "100%",
        maxWidth: "1200px",
        margin: "0 auto",
      }}
    >
      {buttons.map((button) => (
        <Button
          key={button.id}
          variant={!button.isSelected && "outlined"}
          sx={{
            textTransform: "capitalize",
            color: button.isSelected ? "white" : "ht.main",
            backgroundColor: button.isSelected && "primary.main",
            width: { xs: "40%", sm: "20%" },
            fontWeight: "400",
            padding: "9px 45px",
            margin: "15px",
            minHeight: "52px",
            "&:hover": {
              backgroundColor: button.isSelected && "primary.dark",
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

export default Buttons;

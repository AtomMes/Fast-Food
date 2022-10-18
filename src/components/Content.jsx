import LunchDiningIcon from "@mui/icons-material/LunchDining";
import { Box, Button, TextField, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import axios from "axios";
import React from "react";

const Content = ({ button }) => {

  const [items, setItems] = React.useState([])


  React.useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(
        `https://62f5fe50612c13062b44104a.mockapi.io/items`
      );
      setItems(data);
    };
    fetchData();
  }, []);
  const f = [1,1,1,1,1,1]

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
      {f.map((f, i) => (
        <Box
          key={i}
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
          <LunchDiningIcon
            sx={{
              width: "130px",
              height: "auto",
              marginRight: { xs: "0", sm: "20px" },
            }}
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
              <Typography variant="h6">Burger Spicy</Typography>
              <Typography color="primary">$9.12 USD</Typography>
            </Box>
            <Typography>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum,
              reiciendis.
            </Typography>
            <Box sx={{ display: "flex" }}>
              <TextField
                size="small"
                variant="outlined"
                sx={{
                  width: "65px",
                  marginRight: "10px",
                }}
                type="number"
              />
              <Button
                variant="contained"
                sx={{
                  color: "white",
                  textTransform: "capitalize",
                  whiteSpace: "nowrap",
                }}
              >
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

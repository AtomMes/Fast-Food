import { Box,  Typography } from "@mui/material";
import React from "react";
import {  useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import FullProduct from "../components/FullProduct";
import FW from "../components/FW";
import Products from "../components/Products";
import Tabs from "../components/Tabs";

const Product = () => {
  const { id } = useParams();
  const item = useSelector((state) => state.itemsSlice.items[id]);
  const items = useSelector((state) =>
    state.itemsSlice.items.filter((i) => i.types.includes(item.types[1]))
  );

  const [food, setFood] = React.useState(items);
  const text1 =
    "Alienum phaedrum torquatos nec eu, vis detraxit periculis ex, nihil expetendis in mei. Mei an pericula euripidis, hinc partem ei est.";
  const text2 = `Eos ei nisl graecis, vix aperiri consequat an. Eius lorem tincidunt vix at, vel pertinax sensibus id, error epicurei mea et. Mea facilisis urbanitas. Vis ei rationibus definiebas, eu qui purto zril laoreet. Ex error omnium interpretaris pro, alia illum ea vim.

 ‍`;

  React.useEffect(() => {
    setFood(items.filter((i) => i.types.includes(item.types[1])));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [items]);

  if (!item) {
    return <div>Loading...</div>;
  }

  return (
    <Box  sx={{ backgroundColor: "w.main" }} >
      <FullProduct item={item} text1={text1} text2={text2} />
      <Tabs text1={text1} text2={text2} />
      <Typography
        variant="h2"
        color="primary"
        textAlign="center"
        fontWeight="bold"
        margin="0 auto"
      >
        {" "}
        Related Items{" "}
      </Typography>
      <Box width="100%" maxWidth="1200px" margin="0 auto">
        <Products food={food} />
      </Box>
      <FW />
    </Box>
  );
};

export default Product;

import { FoodBank } from "@mui/icons-material";
import { Box, Button, Input, Typography } from "@mui/material";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import React from "react";

const Content = () => {
  const f = [1, 1, 1, 1,1,1,1,1];

  return (
    <Box
      sx={{
        display: "flex",
        flexWrap:'wrap',  
        width: "100%",
        maxWidth: "1200px",
        justifyContent: "space-between",
        margin: "50px auto",
      }}
    >
      {
        f.map((ff, i) => (
          <Box
          key={i}
          sx={{
            display: "flex",
            flexDirection:{xs:'column', sm:'horizontal'},
            border: "0.5px solid rgba(53, 184, 190, 0.35)",
            borderRadius: "6px",
            width: {xs:'49%', sm:'100%', md:'49%'},
            padding:'25px',
            transition:'.1s ease-in',
            marginBottom:'22px',
            "&:hover":{
              border:"0.5px solid rgba(53, 184, 190, .6)"
            }
          }}
        >
          <FoodBank sx={{ width: "130px", height: "auto" }} />
          <Box sx={{width:'100%', display:'flex', flexDirection:'column', justifyContent:'space-between'}} >
            <Box sx={{display:{ xs:'block',sm:'flex'}, justifyContent:'space-between', alignItems:'center', marginBottom:'9px'}} > 
              <Typography variant='h6' >Burger Spicy</Typography>
              <Typography color='primary' >$9.12 USD</Typography>
            </Box>
            <Typography>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum, reiciendis.</Typography>
            <Box sx={{display:'flex'}} >
              <Input sx={{width:'35px', marginRight:'10px'}} type='number'/>
              <Button variant='contained'  sx={{color:'white'}} >Add to cart</Button>
            </Box>
          </Box>
        </Box>
        ))
      }
       <Button
          variant="outlined"
          color="w"
          sx={{
            color:"w",
            backgroundColor:"#35b8be",
            width:"10%",
            fontWeight: "400",
            minHeight: "52px",
            "&:hover": {
              backgroundColor:"#1a9da3",
            },
            whiteSpace:"nowrap",
            margin:'50px auto'
          }}
          endIcon={<KeyboardArrowRightIcon />}
        >
          Next
        </Button>
    </Box>
  );
};

export default Content;

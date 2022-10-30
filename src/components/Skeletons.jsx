import { Box, Skeleton } from "@mui/material";
import React from "react";


const Skeletons = () => {
  return (
    <Box
      sx={{
        marginTop: "30px",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
      }}
    >
      {[...Array(10)].map((item, i) => (
        <Box
          key={i}
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            width: { xs: "49%", sm: "100%", md: "49%" },
            padding: "25px",
            marginBottom: "22px",
          }}
        >
          <Box marginRight="25px">
            <Skeleton
              variant="rectangular"
              width={130}
              height={130}
              animation="wave"
            />
          </Box>
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
                marginBottom: "9px",
              }}
            >
              {" "}
              <Skeleton
                variant="rectangular"
                width={130}
                height={30}
                animation="wave"
              />
              <Skeleton
                variant="rectangular"
                width={90}
                height={28}
                animation="wave"
              />
            </Box>
            <Skeleton variant="rectangular" width="90%" height={40} />
            <Box sx={{ display: "flex" }}>
              <Skeleton
                variant="rectangular"
                width={90}
                height={30}
                animation="wave"
              />
            </Box>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default Skeletons;

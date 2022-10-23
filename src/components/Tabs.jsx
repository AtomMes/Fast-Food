import { Box, Tab, Typography } from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import React from "react";

const Tabs = ({ text1, text2 }) => {
  const [value, setValue] = React.useState("1");
  const handleChange = (e, newValue) => {
    setValue(newValue);
  };

  const [tabs, setTabs] = React.useState([
    {
      name: "Description",
      id: "1",
    },
    {
      name: "Additional Information",
      id: "2",
    },
    {
      name: "Reviews",
      id: "3",
    },
  ]);

  return (
    <Box
      width="100%"
      maxWidth="900px"
      margin="80px auto"
      padding='70px'
      borderRadius='40px'
      sx={{
        bgcolor: "#E0FDFF",
      }}
    >
      <TabContext value={value}>
        <Box
          sx={{ borderBottom: 1, borderColor: "divider" }}
          display="flex"
          justifyContent="center"
        >
          <TabList
            onChange={handleChange}
            textColor="primary"
            indicatorColor="primary"
            variant="scrollable"
            centered
            margin="0 auto"
          >
            {tabs.map((tab) => (
              <Tab key={tab.id} label={tab.name} value={tab.id} />
            ))}
          </TabList>
        </Box>
        {tabs.map((tab) => (
          <TabPanel
            key={tab.id}
            value={tab.id}
            className="animate__animated animate__fadeIn"
          >
            <Typography
              color="text.secondary"
              fontSize="18px"
              fontWeight={400}
              textAlign="center"
              margin="10px 0"
            >
              {text1}
            </Typography>
            <Typography
              color="text.secondary"
              fontSize="18px"
              fontWeight={400}
              textAlign="center"
            >
              {text2}
            </Typography>
          </TabPanel>
        ))}
      </TabContext>
    </Box>
  );
};

export default Tabs;

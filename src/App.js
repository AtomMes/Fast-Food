import "./App.css";
import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Box } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#35b8be",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Banner />
        <Box
          sx={{
            width: "100%",
            maxWidth: "1200px",
            display: "flex",
            margin: "0 auto",
          }}
        >
          <Navbar />
        </Box>
      </div>
    </ThemeProvider>
  );
}

export default App;

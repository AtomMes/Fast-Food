import "./App.css";
import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Box } from "@mui/material";
import Header from "./components/Header";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#35b8be",
    },
    w: {
      main: "#ffffff",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Banner />
        <Navbar />
        <Header />
      </div>
    </ThemeProvider>
  );
}

export default App;

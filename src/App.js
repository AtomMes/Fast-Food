import "./App.css";
import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Box } from "@mui/material";
import Header from "./components/Header";
import Menu from "./components/Menu";
import Content from "./components/Content";
import Footer from "./components/Footer";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#35b8be",
    },
    w: {
      main: "#ffffff",
    },
    b:{
      main:'#000'
    }
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Banner />
        <Navbar />
        <Header />
        <Menu />
        <Content />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;

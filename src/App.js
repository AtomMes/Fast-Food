import React from "react";
import "./LightMode.css";
import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Footer from "./components/Footer";
import Order from "./pages/Order";
import Company from "./pages/Company";
import { Routes, Route } from "react-router-dom";
import FAQ from "./pages/FAQ";
import Home from "./pages/Home";
import Product from "./pages/Product";
import { Box } from "@mui/material";
import { useSelector } from "react-redux";

export const LightTheme = createTheme({
  palette: {
    primary: {
      main: "#35b8be",
    },
    w: {
      main: "#ffffff",
      light: "#f7f7f7",
    },
    b: {
      main: "#000",
    },
    g: {
      main: "#808080",
      light: "#dcdcdc",
    },
    lig: {
      main: "#f5fbfc",
    },
    ht: {
      main: "#000",
    },
  },
});

export const DarkTheme = createTheme({
  palette: {
    primary: {
      main: "#35b8be",
    },
    w: {
      main: "#000130",
    },
    b: {
      main: "#000",
    },
    g: {
      main: "#808080",
      light: "#dcdcdc",
    },
    lig: {
      main: "#01033b",
    },
    ht: {
      main: "#e8e8e8",
    },
  },
});

function App() {
  const defaultTheme =
    (JSON.parse(localStorage.getItem("theme")) && LightTheme) || DarkTheme;

  const [theme, setTheme] = React.useState(defaultTheme);

  React.useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(LightTheme == theme));
  }, [theme]);

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Banner />
        <Navbar
          setTheme={setTheme}
          theme={theme}
          DarkTheme={DarkTheme}
          LightTheme={LightTheme}
        />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/order" element={<Order />} />
          <Route path="/company" element={<Company />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/home" element={<Home />} />
          <Route path="/*" element={<Box>page is not found</Box>} />
        </Routes>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;

import "./App.css";
import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Footer from "./components/Footer";
import Order from "./pages/Order";
import Company from "./pages/Company";
import { Routes, Route } from "react-router-dom";
import FAQ from "./pages/FAQ";
import Home from "./pages/Home";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#35b8be",
    },
    w: {
      main: "#ffffff",
    },
    b: {
      main: "#000",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Banner />
        <Navbar />
        <Routes>
          <Route path="/order" element={<Order />} />
          <Route path="/company" element={<Company />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;

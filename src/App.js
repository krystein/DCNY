import React, { useState } from "react";
import Navbar from "./components/navbar/Navbar";
import Dropdown from "./components/Dropdown";
import GlobalStyle from "./globalstyles";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Index from "./components/index";
import Footer from "./components/Footer/Footer";
import Worship from "./pages/Worship";
import Pastoral from "./pages/Pastoral";
import MediaMinistry from "./pages/Media";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <BrowserRouter>
      <GlobalStyle />
      <Navbar toggle={toggle} />
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Routes>
        <Route exact path="/" element={<Index />}></Route>
        <Route path="/Worship" element={<Worship />}></Route>
        <Route path="/Pastoral" element={<Pastoral />}></Route>
        <Route path="/MediaMinistry" element={<MediaMinistry />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

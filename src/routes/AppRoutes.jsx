import { Route, Routes }from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import React from 'react';

import App from "../App";
import About from "../pages/About";
import Contact from "../pages/Contact";


const AppRoutes = () => {
    return (
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    );
};

export default AppRoutes;
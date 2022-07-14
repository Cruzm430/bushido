import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { connect } from "./redux/blockchain/blockchainActions";
import { fetchData } from "./redux/data/dataActions";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import Components from "./pages/Components";
import NotFound from "./pages/NotFound";


const App = () => { 

  return (
    <Router>
      <Routes>
        <Route exact path="/"  element={<Home />} />
        <Route exact path="/components" element={<Components />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;

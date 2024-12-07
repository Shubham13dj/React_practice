import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './Home';
import About from './About';
import Layout from './Layout';
import Help from './Help';
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App(){
  return(
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}></Route>
      <Route path="/home" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="/help" element={<Help />} />

    </Routes>
    </BrowserRouter>
  );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

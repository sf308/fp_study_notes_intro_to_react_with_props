import logo from './logo.svg';
import React, {useState} from "react";
import { Routes, Route } from 'react-router-dom';

import './App.css';

import { Music, Songs } from './pages';
import { Header, Footer } from './layout';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/" element={<Music />} />
        <Route path="/songs" element={<Songs />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

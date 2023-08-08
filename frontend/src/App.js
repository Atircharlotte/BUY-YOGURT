import React from 'react';
import './App.css';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import Event from './pages/Event';
import Cart from './pages/Cart';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<SignIn />} path="/signin" />
        <Route element={<Event />} path="/event" />
        <Route element={<Cart />} path="/cart" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import React from 'react';
import Layout from './components/layout/Layout';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import MyBooks from './pages/MyBooks';
import Goals from './pages/Goals';

function App() {
  return (
    <BrowserRouter>
  <Routes>
      <Route element={<Layout />}>
      <Route path="/" element={<Home />} />
      <Route path="/books" element={<MyBooks />} />
      <Route path="/goals" element={<Goals />} />
    </Route>
  </Routes>
</BrowserRouter>
  )
}

export default App;

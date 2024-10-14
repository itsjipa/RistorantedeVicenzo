import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Kategori from './Components/Kategori/Kategori';
import Connect from './Components/Connect/Connect';
import Menu from './Components/Menu/Menu';  // Misalnya ini halaman menu yang akan menerima kategori
import Login from './Components/Login/Login';

const App = () => {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <Router>
      {showLogin ? <Login setShowLogin = {setShowLogin}/> : <></>}
      <Navbar setShowLogin={setShowLogin} />
      <Routes>
        {/* Home route */}
        <Route path="/" element={<Kategori />} />
        <Route path="/menu/minuman-hangat" element={<Menu category="Minuman Hangat" />} />
      </Routes>
      <Connect />
    </Router>
  );
};

export default App;

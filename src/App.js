import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './components/HomePage';
import Login from './components/Login';
import Game from './components/Game';
import Merch from './components/Merch';
import About from './components/About';
import Info from './components/Info';
import { NavProvider } from './context/NavContext';
// Other page imports

function App() {
  return (
    <NavProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/game" element={<Game />} />
            <Route path="/merch" element={<Merch />} />
            <Route path="/about" element={<About />} />
            <Route path="/info" element={<Info />} />
            {/* Add other routes here */}
          </Routes>
        </Layout>
      </Router>
    </NavProvider>
  );
}

export default App;

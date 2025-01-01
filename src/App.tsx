import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import CartPage from './pages/CartPage';
import GeneralStyle from './style/GeneralStyle';
import SubNavbar from './components/SubNavbar';


const App: React.FC = () => (
  <Router>
    <GeneralStyle />
      <Navbar />
      <SubNavbar />
      <main style={{ padding: '1rem' }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </main>
      <Footer />
  </Router>
);

export default App;

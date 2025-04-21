import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import CartPage from './pages/CartPage';
import AccountPage from './pages/AccountPage';
import ProductPage from './pages/ProductPage';
import CategoriesPage from './pages/CategoriesPage';
import GeneralStyle from './style/GeneralStyle';
import SubNavbar from './components/SubNavbar';

const App: React.FC = () => (
  <Provider store={store}>
    <Router>
      <GeneralStyle />
      <Navbar />
      <SubNavbar />
      <main className='container'>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/account" element={<AccountPage />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/categories/:category" element={<CategoriesPage />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  </Provider>
);

export default App;
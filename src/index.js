import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import {BrowserRouter} from 'react-router-dom';
import HeaderNav from './components/layout/Header/HeaderNav';
import Footer from './components/layout/Footer/Footer';
import './styles/index.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <HeaderNav />
      <App />
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);



import './App.css';
//import React from 'react';
import { Routes, Route } from 'react-router-dom';
import  CartPage  from '../../pages/CartPage/CartPage';
import  HomePage  from '../../pages/HomePage/HomePage';
import  NotFoundPage  from '../../pages/NotFoundPage/NotFoundPage';
import  HistoryPage  from '../../pages/HistoryPage/HistoryPage';
import  CouponsPage  from '../../pages/CouponsPage/CouponsPage';
//import { APP_KEYS } from '../../consts';

 const App = () => {
  
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/cart' element={<CartPage />} />
        <Route path='/history' element={<HistoryPage />} />
        <Route path='/coupons' element={<CouponsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
};
export default App; 


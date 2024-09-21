import { Footer } from '../../components/Footer/Footer';
//import React from 'react';
import { Header } from '../../components/Header/Header';
import { Main } from '../../components/Main/Main';

const HomePage = () => {
  return (
    <div className="homepage">
      <Header />
      <Main />
      <Footer />
    </div>
  );
};
export default HomePage;
import React from 'react';
import { BrowserRouter } from "react-router-dom";
import './App.css';
import Header from './components/Header/Header';
import Aside from './components/Aside/Aside';
import Footer from './components/Footer/Footer';
import MainPage from './components/MainPage/MainPage';

const App = () => {
  return (
    <BrowserRouter>
      <div className="App-wrapper">
        <Header />
        <main className="main">
          <Aside/>
          <MainPage/>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;

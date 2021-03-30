import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Aside from './components/MainPage/Aside/Aside';
import Footer from './components/Footer/Footer';
import MainPage from './components/MainPage/MainPage';

const App = () => {
  return (
      <div className="App-wrapper">
        <Header/>
        <main className="main">
          <Aside />
          <MainPage />
        </main>
        <Footer/>
      </div>
  );
}

export default App;

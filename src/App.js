import React from 'react';
import './App.css';
import Aside from './components/MainPage/Aside/Aside';
import Footer from './components/Footer/Footer';
import MainPage from './components/MainPage/MainPage';
import HeaderContainer from "./components/Header/HeaderContainer";

const App = () => {
  return (
      <div className="App-wrapper">
        <HeaderContainer/>
        <main className="main">
          <Aside />
          <MainPage />
        </main>
        <Footer/>
      </div>
  );
}

export default App;

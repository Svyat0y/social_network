import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Aside from './components/MainPage/Aside/Aside';
import Footer from './components/Footer/Footer';
import MainPage from './components/MainPage/MainPage';

const App = (props) => {
  return (
      <div className="App-wrapper">
        <Header/>
        <main className="main">
          <Aside sideBar={props.state.sideBar}/>
          <MainPage
              state={props.state}
              dispatch={props.dispatch}
              // addPost={props.addPost}
              // addDialogMessage={props.addMessage}
              // updatePostMessageText={props.updatePostMessageText}
              // updateDialogMessageText={props.updateDialogMessageText}
              // clearDialogMessageText={props.clearDialogMessageText}
          />
        </main>
        <Footer/>
      </div>
  );
}

export default App;

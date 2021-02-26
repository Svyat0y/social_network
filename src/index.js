import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let dialogsData = [
    {id: 1, name: 'Andy'},
    {id: 2, name: 'Panda'},
    {id: 3, name: 'Sveta'},
    {id: 4, name: 'Vika'},
    {id: 5, name: 'Dasha'},
    {id: 6, name: 'Lusya'}
]

let messagesData = [
    {id: 0, message: 'Hi'},
    {id: 1, message: 'How are you?'},
    {id: 2, message: 'Are you here??'}
]

let postData = [
    {id: 0, message: 'Ho, how are you?', likeCount: 15},
    {id: 1, message: "It's my first post", likeCount: 34},
]

ReactDOM.render(
  <React.StrictMode>
    <App messagesData={messagesData} dialogsData={dialogsData} postData={postData}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import {addPost, updatePostMessageText} from "./Redux/state";

export const rerenderEntireTree = (state) => {
	ReactDOM.render(
		<BrowserRouter>
			<React.StrictMode>
				<App
					state={state}
					addPost={addPost}
					updatePostMessageText={updatePostMessageText}
				/>
			</React.StrictMode>
		</BrowserRouter>,
		document.getElementById('root')
	);
}
reportWebVitals();

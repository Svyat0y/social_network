import store from './Redux/redux-store'
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";

const rerenderEntireTree = (state) => {
	ReactDOM.render(
		<BrowserRouter>
			<React.StrictMode>
				<App
					state={state}
					dispatch={store.dispatch.bind(store)}
					// addPost={store.addPost.bind(store)}
					// addMessage={store.addMessage.bind(store)}
					// updatePostMessageText={store.updatePostMessageText.bind(store)}
					// updateDialogMessageText={store.updateDialogMessageText.bind(store)}
					// clearDialogMessageText={store.clearDialogMessageText.bind(store)}
				/>
			</React.StrictMode>
		</BrowserRouter>,
		document.getElementById('root')
	);
}

// отрисовка всего приложения
rerenderEntireTree(store.getState())

// передаём в качестве аргумента нашу функцию отрисовки приложения
store.subscribe(() => {
	let state = store.getState()
	rerenderEntireTree(state)
})

reportWebVitals();

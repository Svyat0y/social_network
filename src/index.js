import store from './Redux/redux-store'
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";

const rerenderEntireTree = (state) => {
	ReactDOM.render(
		<BrowserRouter>
			<React.StrictMode>
				<Provider store={store}>
					<App
						// state={state}
						// dispatch={store.dispatch}
						// store={store}
					/>
				</Provider>
			</React.StrictMode>
		</BrowserRouter>,
		document.getElementById('root')
	);
}

// отрисовка всего приложения
rerenderEntireTree()

// передаём в качестве аргумента нашу функцию отрисовки приложения
store.subscribe(() => {
	rerenderEntireTree()
})
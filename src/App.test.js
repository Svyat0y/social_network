import {render, screen} from '@testing-library/react';
import App from './App';
import store from "./Redux/redux-store";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";

test('renders learn react link', () => {
	render(
		<BrowserRouter>
			<Provider store={store}>
				<App/>
			</Provider>
		</BrowserRouter>
	);
	// const linkElement = screen.getByText(/learn react/i);
	// expect(linkElement).toBeInTheDocument();
});

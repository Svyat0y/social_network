import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sideBarReducer from "./side-bar-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import appReducer from "./app-reducer";
import thunkMiddleware from "redux-thunk";
import { reducer as formReducer} from 'redux-form'

const reducers = combineReducers({
	profilePage: profileReducer,
	messagesPage: dialogsReducer,
	usersPage: usersReducer,
	sideBar: sideBarReducer,
	auth: authReducer,
	app: appReducer,
	form: formReducer
})

const store = createStore(reducers, applyMiddleware(thunkMiddleware))
window.store = store

export default store
import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sideBarReducer from "./side-bar-reducer";
import usersReducer from "./users-reducer";

const reducers = combineReducers({
	profilePage: profileReducer,
	messagesPage: dialogsReducer,
	sideBar: sideBarReducer,
	usersPage: usersReducer
})

const store = createStore(reducers)
window.store = store

export default store
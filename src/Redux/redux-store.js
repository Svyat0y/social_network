import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sideBarReducer from "./side-bar-reducer";

const reducers = combineReducers({
	profilePage: profileReducer,
	messagesPage: dialogsReducer,
	sideBar: sideBarReducer
})

const store = createStore(reducers)

export default store
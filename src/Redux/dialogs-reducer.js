const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_DIALOG_MESSAGE_TEXT = 'UPDATE-DIALOG-MESSAGE-TEXT';
const CLEAR_DIALOG_MESSAGE_TEXT = 'CLEAR-DIALOG-MESSAGE-TEXT';
const SET_MESSAGES_DATA = 'SET-MESSAGES-DATA';

let initialState = {
	dialogsData: [],
	messagesData: [],
	newMessageText: ""
}

const dialogsReducer = (state = initialState, action) => {

	switch (action.type) {
		case ADD_MESSAGE:
			if (state.newMessageText && state.newMessageText.replace(/\s/g, "")) {
				return {
					...state,
					messagesData: [...state.messagesData, {id: 3, message: state.newMessageText}],
					newMessageText: ""
				}
			}
			return state

		case UPDATE_DIALOG_MESSAGE_TEXT:
			return {
				...state,
				newMessageText: action.newText
			}

		case SET_MESSAGES_DATA:
			return {
				...state,
				dialogsData: [...state.dialogsData, ...action.messagesPageData.dialogsData],
				messagesData: [...state.messagesData, ...action.messagesPageData.messagesData]
			}

		case CLEAR_DIALOG_MESSAGE_TEXT:
			if (state.newMessageText) {
				return {
					...state,
					newMessageText: ""
				}
			}
			return state

		default:
			return state
	}
}

export const addMessageAC = () => ({type: ADD_MESSAGE});
export const onChangeMessageTextAC = (text) => ({type: UPDATE_DIALOG_MESSAGE_TEXT, newText: text});
export const clearMessageInDialogAC = () => ({type: CLEAR_DIALOG_MESSAGE_TEXT});
export const setMessagesDataAC = (messagesPageData) => ({type: SET_MESSAGES_DATA, messagesPageData: messagesPageData})

export default dialogsReducer;

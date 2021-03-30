const ADD_MESSAGE = 'ADD-MESSAGE'
const UPDATE_DIALOG_MESSAGE_TEXT = 'UPDATE-DIALOG-MESSAGE-TEXT'
const CLEAR_DIALOG_MESSAGE_TEXT = 'CLEAR-DIALOG-MESSAGE-TEXT'

let initialState = {
	dialogsData: [
		{id: 1, name: 'Andy'},
		{id: 2, name: 'Panda'},
		{id: 3, name: 'Sveta'},
		{id: 4, name: 'Vika'},
		{id: 5, name: 'Dasha'},
		{id: 7, name: 'Lusya'}
	],
	messagesData: [
		{id: 0, message: 'Hi'},
		{id: 1, message: 'How are you?'},
		{id: 2, message: 'Are you here??'}
	],
	newMessageText: ""
}

const dialogsReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_MESSAGE: {
			let stateCopy = {...state}
			stateCopy.messagesData = [...state.messagesData]
			if (state.newMessageText && state.newMessageText.replace(/\s/g, "")) {
				let newDialogMessage = {
					id: 3,
					message: state.newMessageText
				}
				stateCopy.messagesData.push(newDialogMessage)
				stateCopy.newMessageText = ""
			}
			return stateCopy
		}

		case UPDATE_DIALOG_MESSAGE_TEXT: {
			let stateCopy = {...state}
			stateCopy.newMessageText = action.newText
			return stateCopy
		}

		case CLEAR_DIALOG_MESSAGE_TEXT: {
			let stateCopy = {...state}
			if (state.newMessageText) {
				stateCopy.newMessageText = ""
			}
			return stateCopy
		}

		default:
			return state
	}
}
export default dialogsReducer

export const addMessageActionCreator = () => ({type: ADD_MESSAGE})
export const onChangeMessageTextActionCreator = (text) => ({type: UPDATE_DIALOG_MESSAGE_TEXT, newText: text})
export const clearMessageInDialogActionCreator = () => ({type: CLEAR_DIALOG_MESSAGE_TEXT})
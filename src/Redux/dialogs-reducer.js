const ADD_MESSAGE = 'ADD-MESSAGE'
const UPDATE_DIALOG_MESSAGE_TEXT = 'UPDATE-DIALOG-MESSAGE-TEXT'
const CLEAR_DIALOG_MESSAGE_TEXT = 'CLEAR-DIALOG-MESSAGE-TEXT'

const dialogsReducer = (state, action) => {


	switch (action.type) {
		case ADD_MESSAGE:
			if (state.newMessageText && state.newMessageText.replace(/\s/g, "")) {
				let newDialogMessage = {
					id: 3,
					message: state.newMessageText
				}
				state.messagesData.push(newDialogMessage)
				state.newMessageText = ""
			}
			return state

		case UPDATE_DIALOG_MESSAGE_TEXT:
			state.newMessageText = action.newText
			return state

		case CLEAR_DIALOG_MESSAGE_TEXT:
			if (state.newMessageText) {
				state.newMessageText = ""
			}
			return state

		default:
			return state
	}
}

export default dialogsReducer

export const addMessageActionCreator = () => ({type: ADD_MESSAGE})
export const onChangeMessageTextActionCreator = (text) => ({type: UPDATE_DIALOG_MESSAGE_TEXT, newText: text})
export const clearMessageInDialogActionCreator = () => ({type: CLEAR_DIALOG_MESSAGE_TEXT})
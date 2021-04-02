const ADD_MESSAGE = 'ADD-MESSAGE'
const UPDATE_DIALOG_MESSAGE_TEXT = 'UPDATE-DIALOG-MESSAGE-TEXT'
const CLEAR_DIALOG_MESSAGE_TEXT = 'CLEAR-DIALOG-MESSAGE-TEXT'

let initialState = {
	dialogsData: [
		{id: 1,
			userImg: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6b7WENFquctsWy8WgMSHmFJbVyJXf0lQ4R2XRAQcd2WgOK2IIfFlLUFcAcsdnpA8S_Wg&usqp=CAU',
			name: 'Andy'},
		{id: 2,
			userImg: 'https://meragor.com/files/styles//ava_800_800_wm/standoff_158.jpg',
			name: 'Panda'},
		{id: 3,
			userImg: 'https://i2.wp.com/andrey-eltsov.ru/wp-content/uploads/2017/09/DopNaAvu1.jpg',
			name: 'Dasha'},
		{id: 4,
			userImg: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSag9tV0QvMc5HMbiwGKch0lAbSwE9v7i638w&usqp=CAU',
			name: 'July'}
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
export default dialogsReducer

export const addMessageActionCreator = () => ({type: ADD_MESSAGE})
export const onChangeMessageTextActionCreator = (text) => ({type: UPDATE_DIALOG_MESSAGE_TEXT, newText: text})
export const clearMessageInDialogActionCreator = () => ({type: CLEAR_DIALOG_MESSAGE_TEXT})
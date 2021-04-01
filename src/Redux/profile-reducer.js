const ADD_POST = 'ADD-POST'
const UPDATE_POST_MESSAGE_TEXT = 'UPDATE-POST-MESSAGE-TEXT'

let initialState = {
	postData: [
		{id: 0, message: 'Hi, how are you?', likeCount: 15},
		{id: 1, message: "It's my first post", likeCount: 34}
	],
	newPostText: ""
}

const profileReducer = (state = initialState, action) => {

	switch (action.type) {
		case ADD_POST:
			if (state.newPostText && state.newPostText.replace(/\s/g, "")) {
				return {
					...state,
					postData: [...state.postData, {id:3, message: state.newPostText, likeCount: 0}],
					newPostText: ""
				}
			}
			return state

		case UPDATE_POST_MESSAGE_TEXT:
			return {
				...state,
				newPostText: action.newText
			}

		default:
			return state
	}
}

export default profileReducer

export const onChangePostTextActionCreator = (text) => ({type: UPDATE_POST_MESSAGE_TEXT, newText: text})
export const addPostActionCreator = () => ({type: ADD_POST})


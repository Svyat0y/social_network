const ADD_POST = 'ADD-POST'
const UPDATE_POST_MESSAGE_TEXT = 'UPDATE-POST-MESSAGE-TEXT'

let initialState = {
	postData: [
		{id: 0,
			userImg: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6b7WENFquctsWy8WgMSHmFJbVyJXf0lQ4R2XRAQcd2WgOK2IIfFlLUFcAcsdnpA8S_Wg&usqp=CAU',
			name: 'Andy', message: 'Hi, how are you?', likeCount: 15},
		{id: 1,
			userImg: 'https://meragor.com/files/styles//ava_800_800_wm/standoff_158.jpg',
			name: 'Panda', message: "It's my first post", likeCount: 34}
	],
	newPostText: ""
}

const profileReducer = (state = initialState, action) => {

	switch (action.type) {
		case ADD_POST:
			if (state.newPostText && state.newPostText.replace(/\s/g, "")) {
				return {
					...state,
					postData: [...state.postData, {id:3,
						userImg: 'https://www.meme-arsenal.com/memes/53336f6e6ad81d19f0d6196424f53e08.jpg',
						name: 'Vasya', message: state.newPostText, likeCount: 0}],
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


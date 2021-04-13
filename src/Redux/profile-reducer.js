const ADD_POST = 'ADD-POST'
const UPDATE_POST_MESSAGE_TEXT = 'UPDATE-POST-MESSAGE-TEXT'
const SET_POST_DATA = 'SET-POST-DATA'

let initialState = {
	postData: [],
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
						name: 'Васюнь', message: state.newPostText, likeCount: 0}],
					newPostText: ""
				}
			}
			return state

		case UPDATE_POST_MESSAGE_TEXT:
			return {
				...state,
				newPostText: action.newText
			}

		case SET_POST_DATA:
			return {
				...state,
				postData: [...state.postData, ...action.postDataItems]
			}

		default:
			return state
	}
}

export const onChangePostText = (text) => ({type: UPDATE_POST_MESSAGE_TEXT, newText: text})
export const addPost = () => ({type: ADD_POST})
export const setPostData = (postDataItems) => ({type: SET_POST_DATA, postDataItems: postDataItems})

export default profileReducer


const ADD_POST = 'ADD-POST'
const UPDATE_POST_MESSAGE_TEXT = 'UPDATE-POST-MESSAGE-TEXT'

const profileReducer = (state, action) => {

	switch (action.type) {
		case ADD_POST:
			if (state.newPostText && state.newPostText.replace(/\s/g, "")) {
				let newPost = {
					id: 5,
					message: state.newPostText,
					likeCount: 0,
				}
				state.postData.push(newPost)
				state.newPostText = ""
			}
			return state
		case UPDATE_POST_MESSAGE_TEXT:
			state.newPostText = action.newText
			return state

		default:
			return state
	}
}

export default profileReducer

export const onChangePostTextActionCreator = (text) => ({type: UPDATE_POST_MESSAGE_TEXT, newText: text})
export const addPostActionCreator = () => ({type: ADD_POST})


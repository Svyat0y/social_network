import {profileAPI} from "../api/api";

const ADD_POST = 'ADD_POST'
// const UPDATE_POST_MESSAGE_TEXT = 'UPDATE_POST_MESSAGE_TEXT'
const SET_POST_DATA = 'SET_POST_DATA'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_STATUS = 'SET_STATUS'

let initialState = {
	postData: [],
	// newPostText: '',
	profile: null,
	status: ''
}

const profileReducer = (state = initialState, action) => {

	switch (action.type) {
		case ADD_POST:
			if (action.newPostMessage && action.newPostMessage.replace(/\s/g, "")) {
				return {
					...state,
					postData: [...state.postData, {
						id: 3,
						userImg: 'https://www.meme-arsenal.com/memes/53336f6e6ad81d19f0d6196424f53e08.jpg',
						name: 'Васюнь', message: action.newPostMessage, likeCount: 0
					}],
					// newPostText: ""
				}
			}
			return state

		// case UPDATE_POST_MESSAGE_TEXT:
		// 	return {
		// 		...state,
		// 		newPostText: action.newText
		// 	}

		case SET_POST_DATA:
			return {
				...state,
				postData: [...state.postData, ...action.postDataItem]
			}

		case SET_USER_PROFILE: {
			return {
				...state, profile: action.profile
			}
		}

		case SET_STATUS: {
			return {
				...state, status: action.status
			}
		}

		default:
			return state
	}
}

// export const onChangePostText = (text) => ({type: UPDATE_POST_MESSAGE_TEXT, newText: text})
export const addPost = (newPostMessage) => ({type: ADD_POST, newPostMessage})
export const setPostData = (postDataItem) => ({type: SET_POST_DATA, postDataItem})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const setStatus = (status) => ({type: SET_STATUS, status})

export const getUserProfile = (userId) => (dispatch) => {
	profileAPI.getProfile(userId).then(data => {
		dispatch(setUserProfile(data))
	})
}

export const getUserStatus = (userId) => (dispatch) => {
	profileAPI.getStatus(userId).then(data => {
		dispatch(setStatus(data))
	})
}

export const updateUserStatus = (status) => (dispatch) => {
	profileAPI.updateStatus(status).then(data => {
		if(data.resultCode === 0) {
			dispatch(setStatus(status))
		}
	})
}

export default profileReducer


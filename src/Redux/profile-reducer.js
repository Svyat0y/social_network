import {profileAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const ADD_POST = 'ADD_POST'
// const UPDATE_POST_MESSAGE_TEXT = 'UPDATE_POST_MESSAGE_TEXT'
const SET_POST_DATA = 'SET_POST_DATA'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_STATUS = 'SET_STATUS'
const SET_PHOTO = 'SET_PHOTO'

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

		case SET_PHOTO: {
			return {
				...state, profile: {...state.profile, photos: action.photos}
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
export const setUserPhoto = (photos) => ({type: SET_PHOTO, photos})

export const getUserProfile = (userId) => async (dispatch) => {
	const data = await profileAPI.getProfile(userId)
	dispatch(setUserProfile(data))
}

export const getUserStatus = (userId) => async (dispatch) => {
	const data = await profileAPI.getStatus(userId)
	dispatch(setStatus(data))
}

export const updateUserStatus = (status) => async (dispatch) => {
	const data = await profileAPI.updateStatus(status)
	if (data.resultCode === 0) {
		dispatch(setStatus(status))
	}
}

export const savePhoto = (photo) => async (dispatch) => {
	const data = await profileAPI.setPhoto(photo)
	if(data.resultCode === 0) {
		dispatch(setUserPhoto(data.data.photos))
	}
}

export const saveBioProfile = (profile) => async (dispatch, getState) => {
	const userId = getState().auth.id
	const data = await profileAPI.setOwnProfile(profile)
	if(data.resultCode === 0) {
		dispatch(getUserProfile(userId))
	}
	else {
		dispatch(stopSubmit('settings', {_error: data.messages[0]}))
	}
}

export const refreshProfileInSettings = () => (dispatch, getState) => {
	const userId = getState().auth.id
	dispatch(getUserProfile(userId))
}

export default profileReducer


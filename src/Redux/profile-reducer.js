import {profileAPI} from "../api/api";

const ADD_POST = 'ADD_POST'
const UPDATE_POST_MESSAGE_TEXT = 'UPDATE_POST_MESSAGE_TEXT'
const SET_POST_DATA = 'SET_POST_DATA'
const SET_USER_PROFILE = 'SET_USER_PROFILE'

let initialState = {
	postData: [],
	newPostText: "",
	profile: null
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
				postData: [...state.postData, ...action.postDataItem]
			}

		case SET_USER_PROFILE: {
			return {
				...state, profile: action.profile
			}
		}

		default:
			return state
	}
}

export const onChangePostText = (text) => ({type: UPDATE_POST_MESSAGE_TEXT, newText: text})
export const addPost = () => ({type: ADD_POST})
export const setPostData = (postDataItem) => ({type: SET_POST_DATA, postDataItem})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})

export const getProfile = (userId) => {
	return (dispatch) => {
		if (!userId) {
			userId = 16553
		}
		profileAPI.getProfile(userId).then(data => {
			dispatch(setUserProfile(data))
		})
	}
}

export default profileReducer


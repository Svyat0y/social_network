import {authAPI, securityAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'SET_USER_DATA'
const SET_CAPTCHA = 'SET_CAPTCHA'

let initialState = {
	id: null,
	email: null,
	login: null,
	isAuth: false,
	captchaUrl: null
}

const authReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_CAPTCHA:
		case SET_USER_DATA: {
			return {
				...state, ...action.payload
			}
		}

		default:
			return state
	}
}


export const setUserData = (id, email, login, isAuth) => ({type: SET_USER_DATA, payload: {id, email, login, isAuth}})
export const setCaptchaUrl = (captchaUrl) => ({type: SET_CAPTCHA, payload: {captchaUrl}})

export const getAuthUserData = () => async (dispatch) => {
	let data = await authAPI.me()
	if (data.resultCode === 0) {
		let {id, email, login} = data.data
		dispatch(setUserData(id, email, login, true))
	}
}

export const login = (email, password, rememberMe, captcha) => async (dispatch) => {
	let data = await authAPI.login(email, password, rememberMe, captcha)
	if (data.resultCode === 0) {
		dispatch(getAuthUserData())
	}
		// else if (data.resultCode === 10) {
		// 	dispatch(stopSubmit('login', {_error: 'Please enter captcha'}))
	// }
	else {
		if(data.resultCode === 10) {
		dispatch(getCaptchaUrl())
		}
		let message = data.messages ? data.messages[0] : 'Some error'
		dispatch(stopSubmit('login', {_error: message}))
	}
}

export const getCaptchaUrl = () => async (dispatch) => {
	const data = await securityAPI.getCaptcha()
	dispatch(setCaptchaUrl(data.url))
}

export const logout = () => async (dispatch) => {
	let data = await authAPI.logout()
	if (data.resultCode === 0) {
		dispatch(setUserData(null, null, null, false))
		dispatch(setCaptchaUrl(null))
	}
}

export default authReducer


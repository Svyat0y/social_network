const SET_USER_DATA = 'SET_USER_DATA'
// const UNSET_USER_DATA = 'SET_USER_DATA'

let initialState = {
	id: null,
	email: null,
	login: null,
	isAuth: false
}

const authReducer = (state = initialState, action) => {

	switch (action.type) {

		case SET_USER_DATA: {
			return {
				...state, ...action.data,
				isAuth: true
			}
		}
		// case UNSET_USER_DATA: {
		// 	return {
		// 		...state, isLogin: false
		// 	}
		// }

		default:
			return state
	}
}


export const setUserData = (id, email, login) => ({type: SET_USER_DATA, data: {id, email, login}})
// export const unSetUserData = (id, email, login) => ({type: UNSET_USER_DATA})

export default authReducer


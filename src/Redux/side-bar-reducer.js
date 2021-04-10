const SET_SIDEBAR_DATA = 'SET_SIDEBAR_DATA'

let initialState = {
	avatarsData: []
}

const sideBarReducer = (state = initialState, action) => {

	switch (action.type) {
		case SET_SIDEBAR_DATA:
			return {
				...state,
				avatarsData: [...state.avatarsData, ...action.sideBarAvatars]
			}
		default:
			return state
	}
}

export const setSideBarAC = (avatars) => ({type: SET_SIDEBAR_DATA, sideBarAvatars: avatars})

export default sideBarReducer;
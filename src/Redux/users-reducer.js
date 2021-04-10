const TOGGLE_FOLLOW = 'TOGGLE-FOLLOW';
const SET_USERS = 'SET_USERS';

let initialState = {
	users: []
}

const usersReducer = (state = initialState, action) => {

	switch (action.type) {
		case TOGGLE_FOLLOW:
			return {
				...state,
				users: state.users.map( u => {
					if(u.id === action.userId && u.followed) {
						return {...u, followed: false}
					}
					else if (u.id === action.userId && !u.followed) {
						return {...u, followed: true}
					}
					return u
				})
			}

		case SET_USERS:
			return {...state, users: [...state.users, ...action.users]}

		default:
			return state
	}
}

export const setUsersAC = (users) => ({type: SET_USERS, users})
export const followAC = (userId) => ({type: TOGGLE_FOLLOW, userId})

export default usersReducer
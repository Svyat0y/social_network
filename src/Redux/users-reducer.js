const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
// const SET_USERS = 'SET_USERS'

let initialState = {
	users: [
		{id: 1,
			userImg: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6b7WENFquctsWy8WgMSHmFJbVyJXf0lQ4R2XRAQcd2WgOK2IIfFlLUFcAcsdnpA8S_Wg&usqp=CAU',
			followed: false, fullName: 'Andy', status: 'i am a boss', location: {country: 'Ukraine', city: 'Kiev'}},
		{id: 2,
			userImg: 'https://meragor.com/files/styles//ava_800_800_wm/standoff_158.jpg',
			followed: false, fullName: 'Panda', status: 'i like react.js', location: {country: 'Ukraine', city: 'Kiev'}},
		{id: 3,
			userImg: 'https://i2.wp.com/andrey-eltsov.ru/wp-content/uploads/2017/09/DopNaAvu1.jpg',
			followed: false, fullName: 'Dasha', status: 'i like karaoke in mister cat', location: {country: 'Ukraine', city: 'Kiev'}},
		{id: 4,
			userImg: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSag9tV0QvMc5HMbiwGKch0lAbSwE9v7i638w&usqp=CAU',
			followed: false, fullName: 'July', status: 'i like to paint', location: {country: 'Ukraine', city: 'Kiev'}}
	],
}

const usersReducer = (state = initialState, action) => {

	switch (action.type) {
		case FOLLOW:

			return {
				...state,
				users: state.users.map( u => {
					if(u.id === action.userId) {
						return {...u, followed: true}
					}
					return u
				})
			}

		case UNFOLLOW:
			return {
				...state,
				users: state.users.map( u => {
						if (u.id === action.userId) {
							return {...u, followed: false}
						}
						return u
					})
			}
		// case SET_USERS:
		// 	return {...state, users: [...state.users, ...action.users]}

		default:
			return state
	}
}
export default usersReducer

export const followAC = (userId) => ({type: FOLLOW, userId})
export const unFollowAC = (userId) => ({type: UNFOLLOW, userId})
// export const setUsersAC = (users) => ({type: SET_USERS, users})
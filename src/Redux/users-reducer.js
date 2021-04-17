const TOGGLE_FOLLOW = 'TOGGLE_FOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT'

let initialState = {
	users: [],
	totalUsersCount: 0,
	pageSize: 100,
	currentPage: 1,
	isFetching: false,
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
			return {...state, users: action.users}

		case SET_CURRENT_PAGE:
			return {...state, currentPage: action.currentPage}

		case TOGGLE_IS_FETCHING:
			return {...state, isFetching: action.isFetching}

		case SET_TOTAL_COUNT: {
			return {...state, totalUsersCount: action.totalCount}
		}

		default:
			return state
	}
}

export const setUsers = (users) => ({type: SET_USERS, users})
export const toggleFollow = (userId) => ({type: TOGGLE_FOLLOW, userId})
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage})
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})
export const setTotalCount = (totalCount) => ({type: SET_TOTAL_COUNT, totalCount})

export default usersReducer
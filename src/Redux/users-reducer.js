import {followedAPI, usersAPI} from "../api/api";

const TOGGLE_FOLLOW = 'TOGGLE_FOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS'

let initialState = {
	users: [],
	totalUsersCount: 0,
	pageSize: 100,
	currentPage: 1,
	isFetching: false,
	isFollowingProgress: []
}

const usersReducer = (state = initialState, action) => {

	switch (action.type) {
		case TOGGLE_FOLLOW:
			return {
				...state,
				users: state.users.map(u => {
					if (u.id === action.userId && u.followed) {
						return {...u, followed: false}
					} else if (u.id === action.userId && !u.followed) {
						return {...u, followed: true}
					}
					return u
				})
			}

		case SET_USERS:
			return {...state, users: action.users}

		case SET_CURRENT_PAGE:
			return {...state, currentPage: action.currentPage}

		case SET_TOTAL_COUNT: {
			return {...state, totalUsersCount: action.totalCount}
		}

		case TOGGLE_IS_FETCHING:
			return {...state, isFetching: action.isFetching}

		case TOGGLE_IS_FOLLOWING_PROGRESS: {
			return {
				...state,
				isFollowingProgress: action.isFollowing
					? [...state.isFollowingProgress, action.userId]
					: state.isFollowingProgress.filter(id => id !== action.userId)
			}
		}

		default:
			return state
	}
}

export const setUsers = (users) => ({type: SET_USERS, users})
export const toggleFollow = (userId) => ({type: TOGGLE_FOLLOW, userId})
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage})
export const setTotalCount = (totalCount) => ({type: SET_TOTAL_COUNT, totalCount})
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})
export const toggleIsFollowingProgress = (isFollowing, userId) => ({type: TOGGLE_IS_FOLLOWING_PROGRESS, isFollowing, userId})

export const requestUsers = (currentPage, pageSize) => {
	return async (dispatch) => {
		dispatch(toggleIsFetching(true))
		dispatch(setCurrentPage(currentPage))

		let data = await usersAPI.getUsers(currentPage, pageSize)
		dispatch(toggleIsFetching(false))
		dispatch(setUsers(data.items))
		dispatch(setTotalCount(data.totalCount))
	}
}

const followUnfollowFlow = async (dispatch, userId, apiMethod) => {
	dispatch(toggleIsFollowingProgress(true, userId))

	let data = await apiMethod
	if (data.resultCode === 0) {
		dispatch(toggleFollow(userId))
		dispatch(toggleIsFollowingProgress(false, userId))
	}
}

export const followAccept = (userId) => (dispatch) => {
		// let apiMethod = followedAPI.getSub(userId)
		followUnfollowFlow(dispatch, userId, followedAPI.getSub(userId))

		// dispatch(toggleIsFollowingProgress(true, userId))
		// let data = await apiMethod
		// if (data.resultCode === 0) {
		// 	dispatch(toggleFollow(userId))
		// 	dispatch(toggleIsFollowingProgress(false, userId))
		// }
}
export const unFollowAccept = (userId) => (dispatch) => {
		followUnfollowFlow(dispatch, userId, followedAPI.deleteSub(userId))

		// let apiMethod = followedAPI.deleteSub(userId)


		// dispatch(toggleIsFollowingProgress(true, userId))
		// let data = await apiMethod
		// if (data.resultCode === 0) {
		// 	dispatch(toggleFollow(userId))
		// 	dispatch(toggleIsFollowingProgress(false, userId))
		// }
}

export default usersReducer
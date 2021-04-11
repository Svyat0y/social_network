import React from 'react';
import {connect} from "react-redux";
import {followAC, setCurrentPageAC, setIsFetchingAC, setTotalCountAC, setUsersAC} from "../../../Redux/users-reducer";
import Users from "./Users";

const mapStateToProps = (state) => {
	return {
		users: state.usersPage.users,
		totalUsersCount: state.usersPage.totalUsersCount,
		currentPage: state.usersPage.currentPage,
		pageSize: state.usersPage.pageSize,
		isFetchingAnimation: state.usersPage.isFetchingAnimation
	}
}
const mapDispatchToProps = (dispatch) => {
	return {
		setUsers: (users) => {
			dispatch(setUsersAC(users))
		},
		toggleFollow: (userId) => {
			dispatch(followAC(userId))
		},
		setCurrentPage: (currentPage) => {
			dispatch(setCurrentPageAC(currentPage))
		},
		onIsFetching: (fetching) => {
			dispatch(setIsFetchingAC(fetching))
		},
		setTotalCount: (totalCount) => {
			dispatch(setTotalCountAC(totalCount))
		}
	}
}
const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;
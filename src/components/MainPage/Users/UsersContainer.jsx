import React from 'react';
import {connect} from "react-redux";
import {followAC, setUsersAC, unFollowAC} from "../../../Redux/users-reducer";
import Users from "./Users";

const mapStateToProps = (state) => {
	return {
		users: state.usersPage.users
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onFollow: (userId) => {
			dispatch(unFollowAC(userId))
		},
		unfollow: (userId) => {
			dispatch(followAC(userId))
		},
		// satUsers: (users) => {
		// 	dispatch(setUsersAC(users))
		// }
	}
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersContainer
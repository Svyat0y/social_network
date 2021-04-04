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
		setUsers: (users) => {
			dispatch(setUsersAC(users))
		},
		onFollow: (userId) => {
			dispatch(followAC(userId))
		},
		unfollow: (userId) => {
			dispatch(unFollowAC(userId))
		}
	}
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;
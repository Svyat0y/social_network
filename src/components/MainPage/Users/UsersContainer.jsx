import React from 'react';
import {connect} from "react-redux";
import {followAC, setUsersAC} from "../../../Redux/users-reducer";
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
		toggleFollow: (userId) => {
			dispatch(followAC(userId))
		}
	}
}
const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;
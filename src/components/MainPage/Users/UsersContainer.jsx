import React from 'react';
import {connect} from "react-redux";
import {followAC, setCurrentPageAC, setIsFetchingAC, setTotalCountAC, setUsersAC} from "../../../Redux/users-reducer";
import * as axios from "axios";
import Users from "./Users";

class UsersContainer extends React.Component {

	componentDidMount() {
		this.startFetchingAnimation()
		axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
			.then(response => {
				this.props.setUsers(response.data.items)
				this.props.setTotalCount(response.data.totalCount)
			})
	}
	onPageChanged = (currentPage) => {
		this.props.setCurrentPage(currentPage)
		axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${this.props.pageSize}`)
			.then(response => {
				this.props.setUsers(response.data.items)
			})
	}
	startFetchingAnimation = () => {
		this.props.onIsFetching(true)
	}

	render() {
		return 	<div><Users
			totalUsersCount={this.props.totalUsersCount}
			pageSize={this.props.pageSize}
			currentPage={this.props.currentPage}
			users={this.props.users}
			isFetchingAnimation={this.props.isFetchingAnimation}
			onPageChanged={this.onPageChanged}
			startFetchingAnimation={this.startFetchingAnimation}
			toggleFollow={this.props.toggleFollow}
		/></div>
	}
}

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

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);

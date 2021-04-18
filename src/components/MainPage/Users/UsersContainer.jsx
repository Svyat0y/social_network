import React from 'react';
import {connect} from 'react-redux';
import {
	toggleFollow,
	setCurrentPage,
	toggleIsFetching,
	setTotalCount,
	setUsers,
	toggleIsFollowingProgress
} from '../../../Redux/users-reducer';
import Users from './Users';
import {usersAPI} from "../../../api/api";

class UsersContainer extends React.Component {

	componentDidMount() {
		this.props.toggleIsFetching(true)

		usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
				this.props.toggleIsFetching(false)
				this.props.setUsers(data.items)
				this.props.setTotalCount(data.totalCount)
			})
	}

	onPageChanged = (currentPage) => {
		this.props.setCurrentPage(currentPage)
		this.props.toggleIsFetching(true)

		usersAPI.getPage(currentPage, this.props.pageSize).then(data => {
				this.props.toggleIsFetching(false)
				this.props.setUsers(data.items)
			})
	}

	render() {
		return <>
			<Users {...this.props} onPageChanged={this.onPageChanged} />
		</>
	}
}

const mapStateToProps = (state) => {
	return {
		users: state.usersPage.users,
		totalUsersCount: state.usersPage.totalUsersCount,
		currentPage: state.usersPage.currentPage,
		pageSize: state.usersPage.pageSize,
		isFetching: state.usersPage.isFetching,
		isFollowingProgress: state.usersPage.isFollowingProgress
	}
}

export default connect(mapStateToProps,
	{setUsers, toggleFollow, setCurrentPage, toggleIsFetching, setTotalCount, toggleIsFollowingProgress})(UsersContainer);

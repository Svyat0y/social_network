import React from 'react';
import {connect} from 'react-redux';
import {followAccept, getUsers, unFollowAccept} from '../../../Redux/users-reducer';
import Users from './Users';

class UsersContainer extends React.Component {

	componentDidMount() {
		this.props.getUsers(this.props.currentPage, this.props.pageSize)
	}
	onPageChanged = (currentPage) => {
		this.props.getUsers(currentPage, this.props.pageSize)

	}
	render() {
		return <>
			<Users {...this.props} onPageChanged={this.onPageChanged} />
		</>
	}s
}

const mapStateToProps = (state) => {
	return {
		users: state.usersPage.users,
		totalUsersCount: state.usersPage.totalUsersCount,
		currentPage: state.usersPage.currentPage,
		pageSize: state.usersPage.pageSize,
		isFetching: state.usersPage.isFetching,
		isFollowingProgress: state.usersPage.isFollowingProgress,
		isAuth: state.auth.isAuth
	}
}

export default connect(mapStateToProps,
	{followAccept, unFollowAccept, getUsers})(UsersContainer);

import React from 'react';
import {connect} from 'react-redux';
import {followAccept, requestUsers, unFollowAccept} from '../../../Redux/users-reducer';
import Users from './Users';
import {
	getCurrentPage, getIsAuth,
	getIsFetching,
	getIsFollowingProgress,
	getPageSize,
	getTotalUsersCount,
	getUsers
} from "../../../Redux/users-selector";

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
	}
}

const mapStateToProps = (state) => {
	return {
		users: getUsers(state),
		totalUsersCount: getTotalUsersCount(state),
		currentPage: getCurrentPage(state),
		pageSize: getPageSize(state),
		isFetching: getIsFetching(state),
		isFollowingProgress: getIsFollowingProgress(state),
		isAuth: getIsAuth(state)
	}
}

export default connect(mapStateToProps,
	{followAccept, unFollowAccept, getUsers: requestUsers})(UsersContainer);

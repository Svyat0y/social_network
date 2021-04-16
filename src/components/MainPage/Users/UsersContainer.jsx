import React from 'react';
import {connect} from 'react-redux';
import {toggleFollow, setCurrentPage, toggleIsFetching, setTotalCount, setUsers} from '../../../Redux/users-reducer';
import * as axios from 'axios';
import Users from './Users';

class UsersContainer extends React.Component {

	componentDidMount() {
		this.props.toggleIsFetching(true)
		axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
			.then(response => {
				this.props.toggleIsFetching(false)
				this.props.setUsers(response.data.items)
				this.props.setTotalCount(response.data.totalCount)
			})
	}

	onPageChanged = (currentPage) => {
		this.props.setCurrentPage(currentPage)
		this.props.toggleIsFetching(true)
		axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${this.props.pageSize}`)
			.then(response => {
				this.props.toggleIsFetching(false)
				this.props.setUsers(response.data.items)
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
		isFetching: state.usersPage.isFetching
	}
}

export default connect(mapStateToProps,
	{setUsers, toggleFollow, setCurrentPage, toggleIsFetching, setTotalCount})(UsersContainer);

import React from 'react';
import Users from "./Users/Users";
// import style from './Users.module.css'
import * as axios from 'axios'

// {
// 	id: 0,
// 		userImg:
// 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6b7WENFquctsWy8WgMSHmFJbVyJXf0lQ4R2XRAQcd2WgOK2IIfFlLUFcAcsdnpA8S_Wg&usqp=CAU',
// followed: false, fullName: 'Andy', status: 'i am a boss', location: {country: 'Ukraine', city: 'Kiev'} }

// const Users = (props) => {
//
// 	if (props.users.length === 0) {
// 		axios.get('https://social-network.samuraijs.com/api/1.0/users?page=1&count=5')
// 			.then(response => props.setUsers(response.data.items))
// 	}
//
// 	const toggleFollow = (userId) => {
// 		props.toggleFollow(userId)
// 	}
//
// 	let users = props.users.map(user => <UserItem user={user} toggleFollow={toggleFollow} key={user.id}/>)
//
// 	return <div> {users} </div>
// }
// export default Users;

class UsersAPIComponent extends React.Component {

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

export default UsersAPIComponent
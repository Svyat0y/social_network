import React from 'react';
import UserItem from "./UserItem/UserItem";
import * as axios from 'axios'

// {
// 	id: 0,
// 		userImg: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6b7WENFquctsWy8WgMSHmFJbVyJXf0lQ4R2XRAQcd2WgOK2IIfFlLUFcAcsdnpA8S_Wg&usqp=CAU',
// 	followed: false,
// 	fullName: 'Andy',
// 	status: 'i am a boss',
// 	location: {country: 'Ukraine', city: 'Kiev'}
// }

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

class Users extends React.Component  {

	constructor(props) {
		super(props);

		axios.get('https://social-network.samuraijs.com/api/1.0/users?page=1&count=5')
			.then(response => this.props.setUsers(response.data.items))
	}

	render() {

		const toggleFollow = userId => this.props.toggleFollow(userId)

		let users = this.props.users.map(user => <UserItem user={user} toggleFollow={toggleFollow} key={user.id}/>)

		return <div> {users} </div>
	}
}

export default Users
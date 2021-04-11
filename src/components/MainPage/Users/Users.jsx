import React from 'react';
import UserItem from "./UserItem/UserItem";
import style from './Users.module.css'
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

class Users extends React.Component {

	componentDidMount() {
		this.startFetchingAnimation()
		axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
			.then(response => {
				this.props.setUsers(response.data.items)
				this.props.setTotalCount(response.data.totalCount)
			})
	}
	onPageNumber = (currentPage) => {
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

		const toggleFollow = userId => this.props.toggleFollow(userId)

		let pages = []
		let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
		for (let i = 1; i <= pagesCount; i++) {
			pages.push(i)
		}

		let users = this.props.users.map(user => <UserItem user={user} toggleFollow={toggleFollow} key={user.id}/>)

		return (
			<div>
				<div>
					{pages.map((p, index) => <span
						key={index}
						className={`${style.pg_number} ${this.props.currentPage === p && style.pg_number_active}`}
						onClick={() => {
							this.onPageNumber(p)
							this.startFetchingAnimation()
						}}>{p}</span>)}
				</div>

				<div>
					{
						this.props.isFetchingAnimation === false
							?
							users
							:
							<div className={style.fetching}>

							</div>
					}
				</div>
			</div>
		)
	}
}

export default Users
import React from 'react';
import style from "./Users.module.css";

const Users = (props) => {

	let pages = []
	let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
	for (let i = 1; i <= pagesCount; i++) {
		pages.push(i)
	}

	return (
		<div>
			<div>
				{pages.map((p, index) => <span
					key={index}
					className={`${style.pg_number} ${props.currentPage === p && style.pg_number_active}`}
					onClick={() => {
						props.onPageChanged(p)
						props.startFetchingAnimation()
					}}>{p}</span>)}
			</div>

			<div>
				{
					props.isFetchingAnimation === false
						?
						props.users.map(user => <div className={style.wrapper}>
							<div className={style.box_wrapper}>
								<div className={style.img_wrapper}>
									<img src={user.photos.small} alt="avatar"/>
								</div>
								<div>
									<button onClick={() => props.toggleFollow(user.id)}
											className={`${style.btnFollowed} ${user.followed ? style.btnUnFollow : ''}`}>
										{user.followed ? 'Unfollow' : 'Follow'}
									</button>
								</div>
							</div>
							<div>
								<span className={style.span_wrapper}><span className={style.spanName}>name:</span> {user.name}</span>
								<span className={style.span_wrapper}><span className={style.spanName}>country:</span> user.location.country</span>
								<span className={style.span_wrapper}><span className={style.spanName}>city:</span> user.location.city</span>
								<span className={style.span_wrapper}><span className={style.spanName}>status:</span> {user.status}</span>
							</div>
						</div>)
						:
						<div className={style.fetching}>

						</div>
				}
			</div>
		</div>
	);
}

export default Users;
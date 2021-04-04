import React from 'react'
import style from './Users.module.css'

const Users = (props) => {
	return <div>
		{
			props.users.map(u => <div className={style.wrapper} key={u.id}>
					<div className={style.box_wrapper}>
						<div className={style.img_wrapper}>
							<img src={u.userImg} alt="avatar"/>
						</div>
						<div>
							{u.followed
								? <button onClick={() => props.onFollow(u.id)}
										  className={`${style.btnFollowed} + ${style.btnFollow}`}>Unfollow</button>
								: <button onClick={() => props.unfollow(u.id)} className={style.btnFollowed}>Follow</button>}
						</div>
					</div>
					<div>
						<span className={style.span_wrapper}><span className={style.spanName}>name:</span> {u.fullName}</span>
						<span className={style.span_wrapper}><span className={style.spanName}>country:</span> {u.location.country}</span>
						<span className={style.span_wrapper}><span className={style.spanName}>city:</span> {u.location.city}</span>
						<span className={style.span_wrapper}><span className={style.spanName}>status:</span> {u.status}</span>
					</div>
				</div>
			)
		}
	</div>
}

export default Users
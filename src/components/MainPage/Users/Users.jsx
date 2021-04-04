import React from 'react';
import style from './Users.module.css';

const Users = (props) => {

	if (props.users.length === 0) {
		props.setUsers([
				{
					id: 0,
					userImg: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6b7WENFquctsWy8WgMSHmFJbVyJXf0lQ4R2XRAQcd2WgOK2IIfFlLUFcAcsdnpA8S_Wg&usqp=CAU',
					followed: false,
					fullName: 'Andy',
					status: 'i am a boss',
					location: {country: 'Ukraine', city: 'Kiev'}
				},
				{
					id: 1,
					userImg: 'https://meragor.com/files/styles//ava_800_800_wm/standoff_158.jpg',
					followed: false,
					fullName: 'Panda',
					status: 'i like react.js',
					location: {country: 'Ukraine', city: 'Kiev'}
				},
				{
					id: 2,
					userImg: 'https://i2.wp.com/andrey-eltsov.ru/wp-content/uploads/2017/09/DopNaAvu1.jpg',
					followed: false,
					fullName: 'Dasha',
					status: 'i like karaoke in mister cat',
					location: {country: 'Ukraine', city: 'Kiev'}
				},
				{
					id: 3,
					userImg: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSag9tV0QvMc5HMbiwGKch0lAbSwE9v7i638w&usqp=CAU',
					followed: false,
					fullName: 'July',
					status: 'i like to paint',
					location: {country: 'Ukraine', city: 'Kiev'}
				}
			]
		)
	}

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

export default Users;
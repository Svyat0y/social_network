import React from 'react';
import style from "./Users.module.css";
import {NavLink} from "react-router-dom";
import images from "../../../assets/images/images";

const User = (props) => {
	return (
		props.users.map(user => <div key={user.id} className={style.wrapper}>
			<div className={style.box_wrapper}>
				<NavLink to={'/profile/' + user.id}>
					<div className={style.img_wrapper}>
						<img src={user.photos.small ? user.photos.small : images.imgAvatarNotFound} alt="avatar"/>
					</div>
				</NavLink>
				<div>
					{
						props.isAuth
							?
							!user.followed
								? <button disabled={props.isFollowingProgress.some(id => id === user.id)}
										  onClick={() => props.followAccept(user.id)}
										  className={`${style.btnFollowed} ${user.followed ? style.btnUnFollow : ''}`}>
									follow
								</button>
								: <button disabled={props.isFollowingProgress.some(id => id === user.id)}
										  onClick={() => props.unFollowAccept(user.id)}
										  className={`${style.btnFollowed} ${user.followed ? style.btnUnFollow : ''}`}>
									unfollow
								</button>
							:
							''
					}
				</div>
			</div>
			<div>
				<span className={style.span_wrapper}>name: <span className={style.spanName}>{user.name}</span></span>
				<span className={style.span_wrapper}>country: <span className={style.spanName}>user.location.country</span></span>
				<span className={style.span_wrapper}>city: <span className={style.spanName}>user.location.city</span></span>
				<span className={style.span_wrapper}>status: <span className={style.spanName}>{user.status}</span></span>
			</div>
		</div>)
	);
}

export default User;
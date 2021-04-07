import React from 'react';
import style from "../Users.module.css";

const UserItem = (props) => {
	return (
		<div className={style.wrapper}>
			<div className={style.box_wrapper}>
				<div className={style.img_wrapper}>
					<img src={props.user.userImg} alt="avatar"/>
				</div>
				<div>
					{/*{*/}
					{/*	props.user.followed*/}
					{/*	? <button onClick={() => props.toggleFollow(props.user.id)}*/}
					{/*			  className={`${style.btnFollowed} ${style.btnUnFollow}`}>Unfollow</button>*/}
					{/*	: <button onClick={() => props.toggleFollow(props.user.id)}*/}
					{/*			  className={style.btnFollowed}>Follow</button>*/}
					{/*}*/}
					<button onClick={() => props.toggleFollow(props.user.id)}
							className={`${style.btnFollowed} ${props.user.followed ? style.btnUnFollow : ''}`}>
						{props.user.followed
							? 'Unfollow'
							: 'Follow'}
					</button>
				</div>
			</div>
			<div>
				<span className={style.span_wrapper}><span className={style.spanName}>name:</span> {props.user.fullName}</span>
				<span className={style.span_wrapper}><span className={style.spanName}>country:</span> {props.user.location.country}</span>
				<span className={style.span_wrapper}><span className={style.spanName}>city:</span> {props.user.location.city}</span>
				<span className={style.span_wrapper}><span className={style.spanName}>status:</span> {props.user.status}</span>
			</div>
		</div>
	);
}

export default UserItem;
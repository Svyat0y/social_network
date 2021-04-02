import React from 'react'
import style from './MyPost.module.css'

const MyPost = (props) => {
	return (
		<div className={style.main_wrapper}>
			<div className={style.box_wr}>
				<div className={style.img_wrapper}>
					<img src={props.userImg} alt="avatar"/>
				</div>
				<span className={style.userName}>{props.name}</span>
			</div>
			<div className={style.description_wrapper}>
				<div className={style.message_wr}>
					<p>{props.message}</p>
				</div>
				<div>
					<span className={style.likeMessage}>like</span>
					<span className={style.likeCount}>{' ' + props.likeCount}</span>
				</div>
			</div>
		</div>
	);
}

export default MyPost
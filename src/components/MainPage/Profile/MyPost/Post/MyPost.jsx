import React from 'react';
import classes from './MyPost.module.css';
import userAvatar from "../../../../../img/user_avatar.svg";

const MyPost = (props) => {
	return (
		<div className={classes.myPosts_wrapper}>
			<div className={classes.img_wrapper}>
				<img src={userAvatar} alt="avatar"/>
			</div>
			<div className={classes.myPost_description_wrapper}>
				<p>
					{props.message}
				</p>
				<span className={classes.likeMessage}>
                        like!
				</span>
				<span className={classes.likeCount}>
                        {' ' + props.likeCount}
				</span>
			</div>
		</div>
	);
}

export default MyPost;
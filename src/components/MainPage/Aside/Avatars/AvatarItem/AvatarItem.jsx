import React from 'react';
import classes from "./AvatarItem.module.css";
import userAvatar from "../../../../../img/user_avatar.svg";

const AvatarItem = (props) => {
	return (
		<div className={classes.user_box}>
			<div className={classes.user_img_wr}>
				<img src={userAvatar} alt="avatar"/>
			</div>
			<div className={classes.user_name}>{props.userName}</div>
		</div>
	);
}

export default AvatarItem;
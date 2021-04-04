import React from 'react';
import style from "./AvatarItem.module.css";

const AvatarItem = (props) => {
	return (
		<div className={style.wrapper}>
			<div className={style.user_img_wr}>
				<img src={props.userImg} alt="avatar"/>
			</div>
			<div className={style.user_name}>{props.userName}</div>
		</div>
	);
}

export default AvatarItem;
import React from "react";
import style from "./MyMessages.module.css";
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
	return (
		<NavLink to={'/myMessages/' + props.id}>
			<div className={style.dialogItem_wrapper}>
				<div className={style.user_img_wr}>
					<img src={props.userImg} alt="avatar"/>
				</div>
				<li className={style.dialog}>
					{props.name}
				</li>
			</div>
		</NavLink>
	);
}

export default DialogItem;
import React from 'react';
import style from './Avatars.module.css';
import AvatarItem from "./AvatarItem/AvatarItem";

const Avatars = (props) => {

	let avatars = props.stateAvatarsData.map(avatar => <AvatarItem userImg={avatar.userImg} userName={avatar.userName} key={avatar.id}/>)

	return (
		<div className={style.avatar_wrapper}>
			<span>My Friends</span>
			<div className={style.user_block_wrapper}>
				{avatars}
			</div>
		</div>
	);
}

export default Avatars;
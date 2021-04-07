import React from 'react';
import style from './Avatars.module.css';
import AvatarItem from "./AvatarItem/AvatarItem";

const Avatars = (props) => {

	if(!props.stateAvatarsData.length) {
		props.setSideBarData([
			{id: 0,
				userImg: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6b7WENFquctsWy8WgMSHmFJbVyJXf0lQ4R2XRAQcd2WgOK2IIfFlLUFcAcsdnpA8S_Wg&usqp=CAU',
				userName: 'Andy'},
			{id: 1,
				userImg: 'https://meragor.com/files/styles//ava_800_800_wm/standoff_158.jpg',
				userName: 'Panda'},
			{id: 2,
				userImg: 'https://i2.wp.com/andrey-eltsov.ru/wp-content/uploads/2017/09/DopNaAvu1.jpg',
				userName: 'Dasha'}
		])
	}

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
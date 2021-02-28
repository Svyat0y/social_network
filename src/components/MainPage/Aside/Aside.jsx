import React from 'react';
import {NavLink} from 'react-router-dom';
import classes from './Aside.module.css';
import userAvatar from './img/user_avatar.svg';


const Avatars = (props) => {

	let avatarsData = [
		{userName: 'Andy', id: 0},
		{userName: 'Panda', id: 1},
		{userName: 'Dasha', id: 2},
		{userName: 'Vika', id: 3},
		{userName: 'Masha', id: 4},
		{userName: 'Tanya', id: 5}
	]

	let avatars = avatarsData.map(avatar => <AvatarItem userName={avatar.userName} key={avatar.id}/>)

	return (
		<div className={classes.avatar_wrapper}>
			<span>My Friends</span>
			<div className={classes.user_block_wrapper}>
				{avatars}
			</div>
		</div>
	);
}
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

const Aside = () => {
	return (
		<aside className={classes.aside}>
			<div className={classes.nav_wrapper}>
				<ul className={classes.nav}>
					<li><NavLink exact to='/' activeClassName={classes.active}>My page</NavLink></li>
					<li><NavLink to='/myMessages' activeClassName={classes.active}>My messages</NavLink></li>
					<li><NavLink to='/myMusic' activeClassName={classes.active}>My Music</NavLink></li>
					<li><NavLink to='/notifications' activeClassName={classes.active}>My notifications</NavLink></li>
					<li><NavLink to='/mySettings' activeClassName={classes.active}>My settings</NavLink></li>
				</ul>
				<Avatars/>
			</div>
		</aside>
	);
}

export default Aside;
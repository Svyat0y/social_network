import React from 'react';
import {NavLink} from 'react-router-dom';
import style from './Aside.module.css';
import AvatarsContainer from "./Avatars/AvatarsContainer";

const Aside = () => {
	return (
		<aside className={style.aside}>
			<div className={style.nav_wrapper}>
				<ul className={style.nav}>
					<li><NavLink exact to='/' activeClassName={style.active}>My page</NavLink></li>
					<li><NavLink to='/myMessages' activeClassName={style.active}>My messages</NavLink></li>
					<li><NavLink to='/myMusic' activeClassName={style.active}>My Music</NavLink></li>
					<li><NavLink to='/notifications' activeClassName={style.active}>My notifications</NavLink></li>
					<li><NavLink to='/findUsers' activeClassName={style.active}>Find Users</NavLink></li>
					<li><NavLink to='/mySettings' activeClassName={style.active}>My settings</NavLink></li>
				</ul>
				<AvatarsContainer />
			</div>
		</aside>
	);
}

export default Aside;
import React from 'react';
import {NavLink} from 'react-router-dom';
import classes from './Aside.module.css';
import Avatars from "./Avatars/Avatars";


const Aside = (props) => {
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
				<Avatars stateAvatarsData={props.sideBar.avatarsData}/>
			</div>
		</aside>
	);
}

export default Aside;
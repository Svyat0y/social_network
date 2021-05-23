import React from 'react';
import style from './Header.module.css';
import images from "../../assets/images/images";
import {NavLink} from "react-router-dom";

const Header = (props) => {
	return (
		<header className={style.header}>
			<div className={style.logo_wr}>logo</div>
			<div className={style.login_block_wr}>
				<NavLink to={!props.isAuth ? '/login' : '/profile'} className={!props.isAuth ? style.login_text : style.login_text_login}>{!props.isAuth ? 'login' : 'Logout'}</NavLink>
				{
					props.isAuth
						?
						<div className={style.img_wrapper}>
							<NavLink to={'/profile'}><img src={images.imgAvatarNotFound} alt="avatar"/></NavLink>
						</div>
						:
						null
				}
			</div>
		</header>
	);
}

export default Header;
import React from 'react';
import style from './Header.module.css';
import images from "../../assets/images/images";

const Header = (props) => {
	return (
		<header className={style.header}>
			<div className={style.logo_wr}>logo</div>
			<div className={style.login_block_wr}>
				<span className={!props.isLogin ? style.login_text : style.login_text_login}>{!props.isLogin ? 'login' : 'LogOut'}</span>
				{
					props.isLogin
						?
						<div className={style.img_wrapper}>
							<img src={images.imgAvatarNoFound} alt="avatar"/>
						</div>
						:
						null
				}
			</div>
		</header>
	);
}

export default Header;
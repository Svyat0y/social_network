import React from 'react';
import style from './MyPosts.module.css';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const MyPost = (props) => {

	return (

		<div className={style.post_wr}>
			<div className={style.post_box_wr}>
				<div className={style.post_img_wr}>
					<img src={props.userImg} alt="avatar"/>
				</div>
				<span>{props.name}</span>
			</div>
			<div className={style.post_description_wr}>
				<div className={style.post_message_wr}>
					<p>{props.message}</p>
				</div>
				<div>
					<span className={style.post_likeMessage}><FontAwesomeIcon icon={faThumbsUp} />
						<span className={style.post_likeCount}>{' ' + props.likeCount}</span>
					</span>
				</div>
			</div>
		</div>
	);
}

export default MyPost
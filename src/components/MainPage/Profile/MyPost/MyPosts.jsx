import React from 'react';
import classes from './MyPosts.module.css';
import MyPost from "./Post/MyPost";
import {addPostActionCreator, onChangePostTextActionCreator} from "../../../../Redux/profile-reducer";

const MyPosts = (props) => {

	let state = props.store.getState().profilePage

	const posts = state.postData.map(p => <MyPost likeCount={p.likeCount} message={p.message} key={p.id}/>)

	// вызываем функцию onClick, считываем данные с textarea и добавляем введенный пост
	const addPost = () => {
		props.dispatch(addPostActionCreator())
	}

	const onChangePostText = (e) => {
		let text = e.target.value
		props.dispatch(onChangePostTextActionCreator(text))
	}

	return (
		<div className={classes.myPost_main_wr}>
			<span>My Post</span>
			<form>
				<textarea
					onChange={onChangePostText}
					value={state.newPostText}
					placeholder='write a message'
					name="post"
					autoFocus={true}
				/>
				<button
					onClick={addPost}
					type="button"
				>
					Add post
				</button>
			</form>
			{posts}
		</div>
	);
}

export default MyPosts;
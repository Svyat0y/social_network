import React from 'react';
import classes from './MyPosts.module.css';
import MyPost from "./Post/MyPost";
const MyPosts = (props) => {

	const posts = props.state.postData.map(p => <MyPost likeCount={p.likeCount} message={p.message} key={p.id}/>)

	// вызываем функцию onClick, считываем данные с textarea и добавляем введенный пост
	const addPost = () => {
		props.addPost()
	}

	const onChangePostText = (e) => {
		let text = e.target.value
		props.onChangePostText(text)
	}

	return (
		<div className={classes.myPost_main_wr}>
			<span>My Post</span>
			<form>
				<textarea
					onChange={onChangePostText}
					value={props.state.newPostText}
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
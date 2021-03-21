import React from 'react';
import classes from './MyPosts.module.css';
import MyPost from "./Post/MyPost";

const MyPosts = (props) => {

	const posts = props.postData.map(p => <MyPost likeCount={p.likeCount} message={p.message} key={p.id}/>)

	const newPostElement = React.createRef()

	// вызываем функцию onClick, считываем данные с textarea и добавляем введенный пост
	const addPost = () => {
		props.addPost()
	}

	const onChangePostText = () => {
		let text = newPostElement.current.value
		props.updatePostMessageText(text)
	}

	return (
		<div className={classes.myPost_main_wr}>
			<span>My Post</span>
			<form>
				<textarea
					onChange={onChangePostText}
					ref={newPostElement}
					value={props.newPostText}
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
import React from 'react';
import classes from './MyPosts.module.css';
import MyPost from "./Post/MyPost";

const MyPosts = (props) => {

	let posts = props.postData.map(p => <MyPost likeCount={p.likeCount} message={p.message} key={p.id}/>)

	const newPostElement = React.createRef()

	// вызываем функцию onClick, считываем данные с textarea и добавляем введенный пост
	const addPost = () => {
		let text = newPostElement.current.value
		props.addPost(text)
		newPostElement.current.value = ''
	}

	return (
		<div className={classes.myPost_main_wr}>
			<span>My Post</span>
			<form>
				<textarea ref={newPostElement} name="post"/>
				<button onClick={addPost} type="button">Add post</button>
			</form>
			{posts}
		</div>
	);
}

export default MyPosts;
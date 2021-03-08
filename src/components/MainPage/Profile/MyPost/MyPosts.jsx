import React from 'react';
import classes from './MyPosts.module.css';
import MyPost from "./Post/MyPost";

const MyPosts = (props) => {

	let posts = props.postData.map(p => <MyPost likeCount={p.likeCount} message={p.message} key={p.id}/>)

	const newPostElement = React.createRef()

	const addPost = () => {
		let text = newPostElement.current.value
		alert(text)

	}

	return (
		<div className={classes.myPost_main_wr}>
			<span>My Post</span>
			<form>
				<textarea ref={newPostElement} name="post"/>
				<button onClick={addPost} type="button">Add post</button>
			</form>
			{posts}
			{posts}
			{posts}
			{posts}
			{posts}
			{posts}
			{posts}
		</div>
	);
}

export default MyPosts;
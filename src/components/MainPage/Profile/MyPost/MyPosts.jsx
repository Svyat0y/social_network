import React from 'react'
import style from './MyPosts.module.css'
import MyPost from "./Post/MyPost"

const MyPosts = (props) => {

	const posts = props.stateProfilePage.postData.map(p => <MyPost userImg={p.userImg} name={p.name} likeCount={p.likeCount}
																   message={p.message} key={p.id} id={p.id}/>)

	const addPost = () => {
		props.addPost()
	}

	const onChangePostText = (e) => {
		let text = e.target.value
		props.onChangePostText(text)
	}

	return (
		<div className={style.myPost_main_wr}>
			<span>My Post</span>
			<form>
				<textarea
					onChange={onChangePostText}
					value={props.stateProfilePage.newPostText}
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
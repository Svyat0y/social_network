import React from 'react'
import style from './MyPosts.module.css'
import MyPost from "./Post/MyPost"

const MyPosts = (props) => {

	if(!props.stateProfilePage.postData.length) {
		props.setPostData([
			{id: 0,
				userImg: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6b7WENFquctsWy8WgMSHmFJbVyJXf0lQ4R2XRAQcd2WgOK2IIfFlLUFcAcsdnpA8S_Wg&usqp=CAU',
				name: 'Andy', message: 'Hi, how are you?', likeCount: 15},
			{id: 1,
				userImg: 'https://meragor.com/files/styles//ava_800_800_wm/standoff_158.jpg',
				name: 'Panda', message: "It's my first post", likeCount: 34}
		])
	}

	const posts = props.stateProfilePage.postData.map(p => <MyPost userImg={p.userImg} name={p.name} likeCount={p.likeCount}
																   message={p.message} key={p.id}/>)

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
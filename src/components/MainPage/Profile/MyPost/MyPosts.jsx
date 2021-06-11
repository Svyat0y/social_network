import React from 'react'
import style from './MyPosts.module.css'
import MyPost from "./MyPost"
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator} from "../../../../utils/validators/validators";
// import {Textarea} from "../../../common/FormControls/FormControls";
import {Element} from "../../../common/FormControls/FormControls";

const MyPosts = (props) => {

	if(!props.stateProfilePage.postData.length) {
		props.setPostData([
			{id: 0,
				userImg: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6b7WENFquctsWy8WgMSHmFJbVyJXf0lQ4R2XRAQcd2WgOK2IIfFlLUFcAcsdnpA8S_Wg&usqp=CAU',
				name: 'Andy', message: 'Hi, how are you?', likeCount: 15},
			{id: 1,
				userImg: 'https://image1.thematicnews.com/uploads/images/00/00/41/2015/04/30/ad358ed4d0.jpg',
				name: 'Panda', message: "It's my first post", likeCount: 34}
		])
	}

	const posts = props.stateProfilePage.postData.map(p => <MyPost userImg={p.userImg} name={p.name} likeCount={p.likeCount}
																   message={p.message} key={p.id}/>)

	const addPostMessage = (values) => {
		props.addPost(values.newPostMessage)
	}

	// const onChangePostText = (e) => {
	// 	let text = e.target.value
	// 	props.onChangePostText(text)
	// }

	return (
		<div className={style.main_wr}>
			<h3>My Post</h3>
			<AddPostMessageRedux onSubmit={addPostMessage} />
			{posts}
		</div>
	);
}

const maxLength300 = maxLengthCreator(300)
const Textarea = Element('textarea')

const AddPostMessage = (props) => {
	return (
		<form onSubmit={props.handleSubmit}>
			<Field component={Textarea} name='newPostMessage' validate={[maxLength300]} placeholder='write a message' />
			{/*<textarea*/}
			{/*	onChange={onChangePostText}*/}
			{/*	value={props.stateProfilePage.newPostText}*/}
			{/*	placeholder='write a message'*/}
			{/*	name="post"*/}
			{/*	autoFocus={true}*/}
			{/*	/>*/}
			<button>Add post</button>
		</form>
	)
}

const AddPostMessageRedux = reduxForm({form: 'addPostMessageForm'})(AddPostMessage)

export default MyPosts;
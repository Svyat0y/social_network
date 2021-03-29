import React from 'react';
import {addPostActionCreator, onChangePostTextActionCreator} from "../../../../Redux/profile-reducer";
import MyPosts from "./MyPosts";

const MyPostsContainer = (props) => {

	let state = props.store.getState().profilePage

	// вызываем функцию onClick, считываем данные с textarea и добавляем введенный пост
	const addPost = () => {
		props.dispatch(addPostActionCreator())
	}

	const onChangePostText = (text) => {
		props.dispatch(onChangePostTextActionCreator(text))
	}


	return <MyPosts onChangePostText={onChangePostText} addPost={addPost} state={state}/>
}

export default MyPostsContainer
import React from 'react';
import {addPostActionCreator, onChangePostTextActionCreator} from "../../../../Redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
	return {
		stateProfilePage: state.profilePage
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		addPost: () => {
			dispatch(addPostActionCreator())
		},
		onChangePostText: (text) => {
			dispatch(onChangePostTextActionCreator(text))
		}
	}
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer
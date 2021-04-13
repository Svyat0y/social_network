import React from 'react';
import {addPostAC, onChangePostTextAC, setPostDataAC} from "../../../../Redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
	return {
		stateProfilePage: state.profilePage
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		setPostData: (postDataItems) => {
			dispatch(setPostDataAC(postDataItems))
		},
		addPost: () => {
			dispatch(addPostAC())
		},
		onChangePostText: (text) => {
			dispatch(onChangePostTextAC(text))
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(MyPosts)
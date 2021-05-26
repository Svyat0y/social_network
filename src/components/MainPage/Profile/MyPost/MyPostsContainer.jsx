import React from 'react';
import {addPost, setPostData} from "../../../../Redux/profile-reducer";
import MyPosts from './MyPosts';
import {connect} from 'react-redux';

const mapStateToProps = (state) => {
	return {
		stateProfilePage: state.profilePage
	}
}

export default connect(mapStateToProps, {
	setPostData,
	addPost
})(MyPosts)
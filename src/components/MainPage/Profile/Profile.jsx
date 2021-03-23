import React from 'react';
import classes from './Profile.module.css';
import MyPosts from "./MyPost/MyPosts";
import MyPageHeader from "./MyPageHeader/MyPageHeader";

const Profile = (props) => {
    return (
        <div className={classes.wrapper}>
            <MyPageHeader />
            <MyPosts
                postData={props.stateProfilePage.postData}
                dispatch={props.dispatch}
                // newPostText={props.stateProfilePage.newPostText}
                // addPost={props.addPost}
                // updatePostMessageText={props.updatePostMessageText}
            />
        </div>
    );
}

export default Profile;
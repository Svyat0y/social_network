import React from 'react';
import classes from './Profile.module.css';
import MyPostsContainer from "./MyPost/MyPostsContainer";
import MyPageHeader from "./MyPageHeader/MyPageHeader";

const Profile = () => {
    return (
        <div className={classes.wrapper}>
            <MyPageHeader />
            <MyPostsContainer />
        </div>
    );
}

export default Profile;
import React from 'react';
import style from './Profile.module.css';
import MyPostsContainer from "./MyPost/MyPostsContainer";
import MyPageHeader from "./MyPageHeader/MyPageHeader";

const Profile = () => {
    return (
        <div className={style.wrapper}>
            <MyPageHeader />
            <MyPostsContainer />
        </div>
    );
}

export default Profile;
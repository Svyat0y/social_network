import React from 'react';
import style from './Profile.module.css';
import MyPostsContainer from "./MyPost/MyPostsContainer";
import ProfileHeader from "./ProfileHeader/ProfileHeader";

const Profile = (props) => {

    return (
        <div className={style.wrapper}>
            <ProfileHeader profile={props.profile} />
            <MyPostsContainer />
        </div>
    );
}

export default Profile
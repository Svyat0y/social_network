import React from 'react';
import classes from './Profile.module.css';
import MyPostsContainer from "./MyPost/MyPostsContainer";
import MyPageHeader from "./MyPageHeader/MyPageHeader";

const Profile = (props) => {
    return (
        <div className={classes.wrapper}>
            <MyPageHeader />
            <MyPostsContainer
                store={props.store}
                dispatch={props.dispatch}
            />
        </div>
    );
}

export default Profile;
import React from 'react';
import classes from './Profile.module.css';
import MyPosts from "./MyPost/MyPosts";
import MyPageHeader from "./MyPageHeader/MyPageHeader";

const Profile = (props) => {
    return (
        <div className={classes.wrapper}>
            <MyPageHeader />
            <MyPosts
                store={props.store}
                dispatch={props.dispatch}
            />
        </div>
    );
}

export default Profile;
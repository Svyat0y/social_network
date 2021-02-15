import React from 'react';
import classes from './MyPage.module.css';
import MyPosts from "./MyPosts/MyPosts";
import MyPageHeader from "./MyPageHeader/MyPageHeader";

const MyPage = () => {
    return (
        <div className={classes.wrapper}>
            <MyPageHeader />
            <MyPosts />
        </div>
    );
}

export default MyPage;
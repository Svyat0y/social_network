import React from 'react';
import classes from './MyPosts.module.css';
import MyPost from "./Post/MyPost";

const MyPosts = () => {
    return (
        <div className={classes.myPost_main_wr}>
            <span>My Post</span>
            <form>
                <textarea name="post"/>
                <button type="button">Add post</button>
            </form>
            <MyPost />
            <MyPost />
            <MyPost />
            <MyPost />
        </div>
    );
}

export default MyPosts;
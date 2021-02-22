import React from 'react';
import classes from './MyPosts.module.css';
import MyPost from "./Post/MyPost";

const MyPosts = () => {

    let postData = [
        {id: 0, message: 'Ho, how are you?', likeCount: 15},
        {id: 1, message: "It's my first post", likeCount: 34},
    ]

    return (
        <div className={classes.myPost_main_wr}>
            <span>My Post</span>
            <form>
                <textarea name="post"/>
                <button type="button">Add post</button>
            </form>
            <MyPost likeCount={postData[0].likeCount} message={postData[0].message}/>
            <MyPost likeCount={postData[1].likeCount} message={postData[1].message}/>
        </div>
    );
}

export default MyPosts;
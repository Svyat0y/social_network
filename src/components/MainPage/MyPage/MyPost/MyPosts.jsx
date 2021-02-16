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
            <MyPost message={'Ho, how are you?'}/>
            <MyPost message={"It's my first post"}/>
            <MyPost message={"It's my first ddddddddd ddddd   sadasda asdasdasdasda sadsadsadsadsadsadsadasdasdsadsadsadasdasdasdsadsadsa sdsadsasadsadsdsadsadsadsadasdasdsa ddddd"}/>
        </div>
    );
}

export default MyPosts;
import React from 'react';
import classes from './MyPage.module.css';
import MyPosts from "./MyPosts/MyPage";

const MyPage = () => {
    return (
        <div className={classes.wrapper}>
            Hi Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, corporis eaque et illo qui
            voluptate?
            Aliquid dignissimos enim excepturi illum laboriosam modi officia quisquam vel. Ad aperiam aspernatur beatae
            deserunt dignissimos doloremque dolorum eius eligendi eos error facilis id, iusto maxime molestias natus
            nemo, nesciunt quis quisquam, saepe ut voluptatum?npm
            <MyPosts />
        </div>
    );
}

export default MyPage;
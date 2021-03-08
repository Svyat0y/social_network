import React from "react";
import classes from "./../MyMessages.module.css";
import {NavLink} from "react-router-dom";
import userAvatar from "../../../../img/user_avatar.svg";

const DialogItem = (props) => {
    return (
        <div className={classes.dialogItem_wrapper}>
            <div className={classes.user_img_wr}>
                <img src={userAvatar} alt="avatar"/>
            </div>
            <li className={classes.dialog}>
                <NavLink to={'/myMessages/' + props.id}>{props.name}</NavLink>
            </li>
        </div>
    );
}

export default DialogItem;
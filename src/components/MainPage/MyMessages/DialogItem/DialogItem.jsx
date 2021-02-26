import React from "react";
import classes from "./../MyMessages.module.css";
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    return (
        <li className={classes.dialog}>
            <NavLink to={'/myMessages/' + props.id}>{props.name}</NavLink>
        </li>
    );
}

export default DialogItem;
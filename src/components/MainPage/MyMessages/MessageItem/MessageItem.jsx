import React from "react";
import classes from "./../MyMessages.module.css";

const MessageItem = (props) => {
    return <div className={classes.messageItem}>{props.message}</div>
}

export default MessageItem;
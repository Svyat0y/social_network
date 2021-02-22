import React from 'react';
import classes from './MyMessages.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    return (
        <li className={classes.dialog}>
            <NavLink to={'/myMessages/' + props.id}>{props.name}</NavLink>
        </li>
    );
}

const MessageItem = (props) => {
    return <div className={classes.message}>{props.message}</div>
}

const MyMessages = (props) => {
    return (
        <div className={classes.wrapper}>
            <ul className={classes.dialog_items}>
                <DialogItem name='Andy' id='1' />
                <DialogItem name='Panda' id='2' />
                <DialogItem name='Sveta' id='3' />
                <DialogItem name='Vika' id='4' />
                <DialogItem name='Dasha' id='5' />
                <DialogItem name='Lusya' id='6' />
            </ul>
            <div className={classes.dialog_messages}>
                <MessageItem message='Hi' />
                <MessageItem message='How are you??' />
                <MessageItem message='Are you here' />
            </div>
        </div>
    );
}

export default MyMessages;
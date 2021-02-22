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

    let dialogsData = [
        {id: 1, name: 'Andy'},
        {id: 2, name: 'Panda'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'Vika'},
        {id: 5, name: 'Dasha'},
        {id: 6, name: 'Lusya'}
    ]

    let messagesData = [
        {id: 0, message: 'Hi'},
        {id: 1, message: 'How are you?'},
        {id: 2, message: 'Are you here??'}
    ]

    return (
        <div className={classes.wrapper}>
            <ul className={classes.dialog_items}>
                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />
                <DialogItem name='Sveta' id='3' />
                <DialogItem name='Vika' id='4' />
                <DialogItem name='Dasha' id='5' />
                <DialogItem name='Lusya' id='6' />
            </ul>
            <div className={classes.dialog_messages}>
                <MessageItem message={messagesData[0].message} />
                <MessageItem message={messagesData[1].message} />
                <MessageItem message={messagesData[2].message} />
            </div>
        </div>
    );
}

export default MyMessages;
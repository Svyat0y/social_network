import React from 'react';
import classes from './MyMessages.module.css';
import MessageItem from "./MessageItem/MessageItem";
import DialogItem from "./DialogItem/DialogItem";

const MyMessages = (props) => {

    let dialogs = props.stateMessagesPage.dialogsData.map(dialog => <DialogItem name={dialog.name} key={dialog.id}/>)
    let messages = props.stateMessagesPage.messagesData.map(message => <MessageItem message={message.message} key={message.id}/>)

    return (
        <div className={classes.wrapper}>
            <ul className={classes.dialog_items}>
                {dialogs}
            </ul>
            <div className={classes.dialog_messages}>
                {messages}
            </div>
        </div>
    );
}

export default MyMessages;
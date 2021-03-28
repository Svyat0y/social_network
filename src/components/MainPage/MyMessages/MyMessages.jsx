import React from 'react';
import classes from './MyMessages.module.css';
import MessageItem from "./MessageItem/MessageItem";
import DialogItem from "./DialogItem/DialogItem";
import {addMessageActionCreator, clearMessageInDialogActionCreator, onChangeMessageTextActionCreator} from "../../../Redux/dialogs-reducer";

const MyMessages = (props) => {

	let state = props.store.getState().messagesPage

	let dialogs = state.dialogsData.map(dialog => <DialogItem name={dialog.name} key={dialog.id}/>)
	let messages = state.messagesData.map(message => <MessageItem message={message.message} key={message.id}/>)

	// добавляем сообщение
	const addDialogMessage = () => {
		props.dispatch(addMessageActionCreator())
	}

	// отслеживаем вводимые данные
	const onChangeMessageText = (e) => {
		let text = e.target.value
		props.dispatch(onChangeMessageTextActionCreator(text))
	}

	// чистим введенные данные
	const clearMessageInDialog = () => {
		props.dispatch(clearMessageInDialogActionCreator())
	}

	return (
		<div className={classes.wrapper}>
			<div className={classes.dialog_items}>
				{dialogs}
			</div>
			<div className={classes.dialog_messages}>
				<div className={classes.dialogMessagesItem_wr}>
					{messages}
				</div>
				<form>
						<textarea
							onChange={onChangeMessageText}
							value={state.newMessageText}
							placeholder='write a message'
							name="text"
							autoFocus={true}
						/>
					<div className={classes.btnMessages}>
						<button
							onClick={addDialogMessage}
							type="button"
						>
							Add message
						</button>
						<button
							onClick={clearMessageInDialog}
							type="button"
						>
							Clear message
						</button>
					</div>
				</form>
			</div>
		</div>
	);
}

export default MyMessages;
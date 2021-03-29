import React from 'react';
import classes from './MyMessages.module.css';
import MessageItem from "./MessageItem/MessageItem";
import DialogItem from "./DialogItem/DialogItem";
const MyMessages = (props) => {

	let dialogs = props.stateMessagesPage.dialogsData.map(dialog => <DialogItem name={dialog.name} key={dialog.id}/>)
	let messages = props.stateMessagesPage.messagesData.map(message => <MessageItem message={message.message} key={message.id}/>)

	// добавляем сообщение
	const addDialogMessage = () => {
		props.addDialogMessage()
	}

	// отслеживаем вводимые данные
	const onChangeMessageText = (e) => {
		let text = e.target.value
		props.onChangeMessageText(text)
	}

	// чистим введенные данные
	const clearMessageInDialog = () => {
		props.clearMessageInDialog()
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
							value={props.stateMessagesPage.newMessageText}
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
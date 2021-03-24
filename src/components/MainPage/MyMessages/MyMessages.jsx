import React from 'react';
import classes from './MyMessages.module.css';
import MessageItem from "./MessageItem/MessageItem";
import DialogItem from "./DialogItem/DialogItem";
import {addMessageActionCreator, clearMessageInDialogActionCreator, onChangeMessageTextActionCreator} from "../../../Redux/state";

const MyMessages = (props) => {

	let dialogs = props.stateMessagesPage.dialogsData.map(dialog => <DialogItem name={dialog.name} key={dialog.id}/>)
	let messages = props.stateMessagesPage.messagesData.map(message => <MessageItem message={message.message} key={message.id}/>)

	const newMessageElementIDialogs = React.createRef()

	// добавляем сообщение
	const addDialogMessage = () => {
		props.dispatch(addMessageActionCreator())
	}

	// отслеживаем вводимые данные
	const onChangeMessageText = () => {
		let text = newMessageElementIDialogs.current.value
		props.dispatch(onChangeMessageTextActionCreator(text))
	}

	// чистим введенные данные
	const clearMessageInDialog = () => {
		props.dispatch(clearMessageInDialogActionCreator())
	}

	return (
		<div className={classes.main_wrapper}>
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
							ref={newMessageElementIDialogs}
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
		</div>
	);
}

export default MyMessages;
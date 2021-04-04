import React from 'react';
import style from './MyMessages.module.css';
import MessageItem from "./MessageItem/MessageItem";
import DialogItem from "./DialogItem/DialogItem";

const MyMessages = (props) => {

	let dialogs = props.stateMessagesPage.dialogsData.map(dialog => <DialogItem userImg={dialog.userImg} name={dialog.name} key={dialog.id} />)
	let messages = props.stateMessagesPage.messagesData.map(message => <MessageItem message={message.message} key={message.id} />)

	const addDialogMessage = () => {
		props.addDialogMessage()
	}

	const onChangeMessageText = (e) => {
		let text = e.target.value
		props.onChangeMessageText(text)
	}

	const clearMessageInDialog = () => {
		props.clearMessageInDialog()
	}

	return (
		<div className={style.wrapper}>
			<div className={style.dialog_items}>
				{dialogs}
			</div>
			<div className={style.dialog_messages}>
				<div className={style.dialogMessagesItem_wr}>
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
					<div className={style.btnMessages}>
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
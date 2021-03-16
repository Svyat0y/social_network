import React from 'react';
import classes from './MyMessages.module.css';
import MessageItem from "./MessageItem/MessageItem";
import DialogItem from "./DialogItem/DialogItem";

const MyMessages = (props) => {

	let dialogs = props.stateMessagesPage.dialogsData.map(dialog => <DialogItem name={dialog.name} key={dialog.id}/>)
	let messages = props.stateMessagesPage.messagesData.map(message => <MessageItem message={message.message} key={message.id}/>)

	const newMessageElementIDialogs = React.createRef()

	const addMessageInDialog = () => {
		if (newMessageElementIDialogs.current.value) {
			let messageInDialog = newMessageElementIDialogs.current.value
			alert(messageInDialog)
		} else {
			return false
		}
	}

	const clearMessageInDialog = () => {
		if (newMessageElementIDialogs.current.value) {
			newMessageElementIDialogs.current.value = ''
		} else {
			return false
		}
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
							placeholder='write a message'
							name="text"
						/>
						<div className={classes.btnMessages}>
							<button
								onClick={addMessageInDialog}
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
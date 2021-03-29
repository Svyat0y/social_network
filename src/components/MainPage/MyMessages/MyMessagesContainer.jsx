import React from 'react';
import {addMessageActionCreator, clearMessageInDialogActionCreator, onChangeMessageTextActionCreator} from "../../../Redux/dialogs-reducer";
import MyMessages from "./MyMessages";

const MyMessagesContainer = (props) => {

	let state = props.store.getState().messagesPage

	// добавляем сообщение
	const addDialogMessage = () => {
		props.dispatch(addMessageActionCreator())
	}

	// отслеживаем вводимые данные
	const onChangeMessageText = (text) => {
		props.dispatch(onChangeMessageTextActionCreator(text))
	}

	// чистим введенные данные
	const clearMessageInDialog = () => {
		props.dispatch(clearMessageInDialogActionCreator())
	}

	return (
		<MyMessages
			addDialogMessage={addDialogMessage}
			onChangeMessageText={onChangeMessageText}
			clearMessageInDialog={clearMessageInDialog}
			state={state}/>
	)
}

export default MyMessagesContainer;
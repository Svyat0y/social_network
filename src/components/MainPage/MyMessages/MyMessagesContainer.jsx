import React from 'react';
import {addMessageActionCreator, clearMessageInDialogActionCreator, onChangeMessageTextActionCreator} from "../../../Redux/dialogs-reducer";
import MyMessages from "./MyMessages";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
	return {
		stateMessagesPage: state.messagesPage
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		addDialogMessage: () => {
			dispatch(addMessageActionCreator())
		},
		onChangeMessageText: (text) => {
			dispatch(onChangeMessageTextActionCreator(text))
		},
		clearMessageInDialog: () => {
			dispatch(clearMessageInDialogActionCreator())
		}
	}
}

const MyMessagesContainer = connect(mapStateToProps, mapDispatchToProps)(MyMessages)

export default MyMessagesContainer;
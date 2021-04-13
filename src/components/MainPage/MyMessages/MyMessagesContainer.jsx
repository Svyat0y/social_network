import React from 'react';
import {
	addMessageAC,
	clearMessageInDialogAC,
	onChangeMessageTextAC, setMessagesDataAC,
} from "../../../Redux/dialogs-reducer";
import MyMessages from "./MyMessages";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
	return {
		stateMessagesPage: state.messagesPage
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		setMessagesData: (messagesPageData) => {
			dispatch(setMessagesDataAC(messagesPageData))
		},
		addDialogMessage: () => {
			dispatch(addMessageAC())
		},
		onChangeMessageText: (text) => {
			dispatch(onChangeMessageTextAC(text))
		},
		clearMessageInDialog: () => {
			dispatch(clearMessageInDialogAC())
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(MyMessages)
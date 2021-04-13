import React from 'react';
import {addDialogMessage, clearMessageInDialog, onChangeMessageText, setMessagesData } from "../../../Redux/dialogs-reducer";
import MyMessages from "./MyMessages";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
	return {
		stateMessagesPage: state.messagesPage
	}
}

export default connect(mapStateToProps,
	{setMessagesData, addDialogMessage, onChangeMessageText, clearMessageInDialog})(MyMessages)
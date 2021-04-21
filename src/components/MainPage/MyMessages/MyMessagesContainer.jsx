import React from 'react';
import {addDialogMessage, clearMessageInDialog, onChangeMessageText, setMessagesData } from "../../../Redux/dialogs-reducer";
import MyMessages from "./MyMessages";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../../hoc/withAuthRedirect";

const mapStateToProps = (state) => {
	return {
		stateMessagesPage: state.messagesPage
	}
}

const AuthRedirectComponent = withAuthRedirect(MyMessages)

export default connect(mapStateToProps,
	{setMessagesData, addDialogMessage, onChangeMessageText, clearMessageInDialog})(AuthRedirectComponent)
import React from 'react';
import Avatars from "./Avatars";
import {connect} from "react-redux";
import {setSideBarAC} from "../../../../Redux/side-bar-reducer";

const mapStateToProps = (state) => {
	return {
		stateAvatarsData: state.sideBar.avatarsData
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		setSideBarData: (avatars) => {
			dispatch(setSideBarAC(avatars))
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Avatars);
import React from 'react';
import Avatars from "./Avatars";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
	return {
		stateAvatarsData: state.sideBar.avatarsData
	}
}

const mapDispatchToProps = (dispatch) => {
	return {}
}

const AvatarsContainer = connect(mapStateToProps, mapDispatchToProps)(Avatars);

export default AvatarsContainer;
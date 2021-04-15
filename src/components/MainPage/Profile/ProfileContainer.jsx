import React from 'react';
import style from './Profile.module.css';
import {connect} from "react-redux";
import {setUserProfile} from "../../../Redux/profile-reducer";
import * as axios from "axios";
import Profile from "./Profile";

class ProfileContainer extends React.Component {

	componentDidMount() {
		axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
			.then(response => {
				this.props.setUserProfile(response.data)
			})
	}

	render() {
		return (
			<div className={style.wrapper}>
				<Profile {...this.props} profile={this.props.profile}/>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		profile: state.profilePage.profile
	}
}

export default connect(mapStateToProps,
	{setUserProfile})(ProfileContainer)
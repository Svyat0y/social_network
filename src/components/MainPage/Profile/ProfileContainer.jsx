import React from 'react';
import style from './Profile.module.css';
import {connect} from "react-redux";
import {setUserProfile} from "../../../Redux/profile-reducer";
import Profile from "./Profile";
import {withRouter} from 'react-router-dom';
import Preloader from "../../common/Preloader/Preloader";
import {profileAPI} from "../../../api/api";

class ProfileContainer extends React.Component {

	componentDidMount() {

		let userId = this.props.match.params.userId
		if (!userId) {
			userId = 16553
		}
		profileAPI.getProfile(userId).then(data => {
			this.props.setUserProfile(data)
		})

	}

	render() {

		if (!this.props.profile) {
			return (
				<div className={style.preloader_wr}>
					<Preloader/>
				</div>
			)
		}

		return (
			<div className={style.wrapper}>
				<Profile {...this.props} profile={this.props.profile}/>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		profile: state.profilePage.profile,
		isFetching: state.profilePage.isFetching
	}
}

const WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps,
	{setUserProfile})(WithUrlDataContainerComponent)
import React from 'react';
import style from './Profile.module.css';
import {connect} from "react-redux";
import {setUserProfile} from "../../../Redux/profile-reducer";
import * as axios from "axios";
import Profile from "./Profile";
import {withRouter} from 'react-router-dom';
import Preloader from "../../common/Preloader/Preloader";

class ProfileContainer extends React.Component {

	componentDidMount() {

		let userId = this.props.match.params.userId
		if (!userId) {
			userId = 16553
		}

		axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
			.then(response => {
				this.props.setUserProfile(response.data)
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
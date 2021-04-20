import React from 'react';
import style from './Profile.module.css';
import {connect} from "react-redux";
import {getProfile} from "../../../Redux/profile-reducer";
import Profile from "./Profile";
import {withRouter} from 'react-router-dom';
import Preloader from "../../common/Preloader/Preloader";

class ProfileContainer extends React.Component {

	componentDidMount() {
		this.props.getProfile(this.props.match.params.userId)
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

export default connect(mapStateToProps,{getProfile})(WithUrlDataContainerComponent)
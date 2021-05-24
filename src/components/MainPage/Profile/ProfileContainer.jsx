import React from 'react';
import style from './Profile.module.css';
import {connect} from "react-redux";
import {getUserProfile, getUserStatus, updateUserStatus} from "../../../Redux/profile-reducer";
import Profile from "./Profile";
import {withRouter} from 'react-router-dom';
import Preloader from "../../common/Preloader/Preloader";
import {withAuthRedirect} from "../../../hoc/withAuthRedirect";
import {compose} from "redux";

class ProfileContainer extends React.Component {

	componentDidMount() {
		let userId = this.props.match.params.userId
		if (!userId) {
			userId = 16553
		}
		this.props.getUserProfile(userId)
		this.props.getUserStatus(userId)
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
				<Profile {...this.props} profile={this.props.profile} updateuserStatus={this.props.updateUserStatus}/>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
		profile: state.profilePage.profile,
		status: state.profilePage.status
})

export default compose(
	connect(mapStateToProps, {getUserProfile, getUserStatus, updateUserStatus}),
	withRouter,
	// withAuthRedirect
)(ProfileContainer)

// const AuthRedirectComponent = withAuthRedirect(ProfileContainer)
//
// const WithUrlDataContainerComponent = withRouter(AuthRedirectComponent)
//
// export default connect(mapStateToProps,{getUserProfile})(WithUrlDataContainerComponent)
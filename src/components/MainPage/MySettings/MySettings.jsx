import React, {useEffect} from "react";
import style from './MySettings.module.css';
import {connect} from "react-redux";
import {refreshProfileInSettings, saveBioProfile, savePhoto} from "../../../Redux/profile-reducer";
import {compose} from "redux";
import {withAuthRedirect} from "../../../hoc/withAuthRedirect";
import {Field, reduxForm} from "redux-form";
import {Element} from "../../common/FormControls/FormControls";
import {maxLengthCreator} from "../../../utils/validators/validators";
import Preloader from "../../common/Preloader/Preloader";

const Input = Element('input')
const Textarea = Element('textarea')
const maxLength300 = maxLengthCreator(300)

const SettingsForm = ({profile, handleSubmit}) => {
	return (
		<form onSubmit={handleSubmit} className={style.bio}>
			<h5 className={style.block_title}>Main Bio</h5>
			<div className={style.settingsInputWr}>
				<span className={style.spanKey}>Full Name:</span>
				<span className={style.text}>
					<Field name={'fullName'} component={Input} placeholder={'Full name'} />
				</span>
			</div>
			<div className={style.settingsInputWr}>
				<span className={style.spanKey}>Looking For A Job:</span>
				<span className={style.text}>
					<Field name={'lookingForAJob'} component={Input} type={'checkbox'}/>
				</span>
			</div>
			<div className={style.settingsInputWr}>
				<span className={style.spanKey}>Your professional skills:</span>
				<span className={style.textarea}>
					<Field name={'lookingForAJobDescription'} component={Textarea} placeholder={'Your professional skills'} validate={[maxLength300]}/>
				</span>
			</div>
			<div className={style.settingsInputWr}>
				<span className={style.spanKey}>About Me:</span>
				<span className={style.textarea}>
					<Field name={'aboutMe'} component={Textarea} placeholder={'About me'} validate={[maxLength300]}/>
				</span>
			</div>
			<h5 className={style.block_title}>Contacts</h5>

			{Object.keys(profile.contacts).map(key => {
				return <div key={key} className={style.settingsInputWr}>
					<span className={style.spanKey}>{key}:</span>
					<span className={style.text}>
					<Field name={'contacts.' + key} component={Input} />
				</span>
				</div>
			})}
			<button>Save</button>
		</form>
	)
}

const SettingsFormWithReduxForm = reduxForm({form: 'settings'})(SettingsForm)


const MySettings = ({profile, saveBioProfile, savePhoto, refreshProfileInSettings}) => {

	const uploadPhoto = (e) => {
		if (e.target.files.length) {
			savePhoto(e.target.files[0]).then(() => {
				console.log('photo was upload')
			})
		}
	}
	useEffect(() => {
		console.log('refresh')
		if(!profile) {
			refreshProfileInSettings()
		}
	}, [profile])

	const saveSettingsForm = (formData) => {
		saveBioProfile(formData)
	}


	if(profile) {
		return (
			<div className={style.wrapper}>
				<div className={style.save_photo}>
					<span className={style.span_common}>Upload your photo: </span>
					<span><input className={style.uploadBtn} onChange={uploadPhoto} type="file"/></span>
				</div>
				<SettingsFormWithReduxForm onSubmit={saveSettingsForm} initialValues={profile} profile={profile} />
			</div>
		);
	}
	else return <div className={style.preloader_wr}>
		<Preloader />
	</div>

}

const mapStateToProps = (state) => ({
	userId: state.auth.id,
	profile: state.profilePage.profile
})
export default compose(
	connect(mapStateToProps, {savePhoto, saveBioProfile, refreshProfileInSettings}),
	withAuthRedirect
)(MySettings)

// export default connect(null, {savePhoto})(MySettings);
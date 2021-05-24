import React from 'react';
import style from "./ProfileHeader.module.css";

class ProfileStatus extends React.Component {
	state = {
		editMode: false,
		status: this.props.status
	}
	activatedEditMode = () => {
		this.setState({
			editMode: true
		})
	}
	deactivatedEditMode = () => {
		this.setState({
			editMode: false
		})
		this.props.updateUserStatus(this.state.status)
	}
	updateStatus = (e) => {
		this.setState({
			status: e.target.value
		})
	}
	handleFocus = (event) => {
		event.target.select();
	}
	componentDidUpdate(prevProps, prevState, snapshot) {
		if(prevProps.status !== this.props.status) {
			this.setState({
				status: this.props.status
			})
		}
	}

	render() {
		return (
			<>
				{this.state.editMode
					? <input autoFocus={true} onFocus={this.handleFocus} onBlur={this.deactivatedEditMode} onChange={this.updateStatus}
							 className={style.inputStatus} value={this.state.status}/>
					: <span onDoubleClick={this.activatedEditMode}
							className={style.lfj_status}>{this.props.status}</span>
				}
			</>
		)
	}
}

export default ProfileStatus;
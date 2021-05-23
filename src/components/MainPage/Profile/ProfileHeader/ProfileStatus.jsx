import React from 'react';
import style from "./ProfileHeader.module.css";

class ProfileStatus extends React.Component {
	state = {
		editMode: false
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
	}
	handleFocus = (event) => {
		event.target.select();
	}

	render() {
		return (
			<>
				{this.state.editMode
					? <input autoFocus={true} onFocus={this.handleFocus} onBlur={this.deactivatedEditMode} className={style.inputStatus} value={this.props.status}/>
					: <span onDoubleClick={this.activatedEditMode} className={style.lfj_status}>{this.props.status}</span>
				}
			</>
		)
	}
}

export default ProfileStatus;
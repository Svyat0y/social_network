import React, {useEffect, useState} from 'react';
import style from "./ProfileHeader.module.css";

const ProfileStatusWithHook = (props) => {

	const [editMode, setEditMode] = useState(false)
	const [status, setStatus] = useState(props.status)

	useEffect( () => {
		setStatus(props.status)
	}, [props.status])

	const activatedEditMode = () => {
		setEditMode(true)
	}

	const deactivatedEditMode = () => {
		setEditMode(false)
		props.updateUserStatus(status)
	}

	const updateStatus = (e) => {
		setStatus(e.target.value)
	}

	const handleFocus = (event) => {
		event.target.select();
	}

	return (
		<>
			{editMode
				? <input autoFocus={true} onFocus={handleFocus} onBlur={deactivatedEditMode} onChange={updateStatus}
						 className={style.inputStatus} value={status}/>
				: <span onDoubleClick={activatedEditMode}
						className={style.lfj_status}>{props.status}</span>
			}
		</>
	)
}


export default ProfileStatusWithHook;
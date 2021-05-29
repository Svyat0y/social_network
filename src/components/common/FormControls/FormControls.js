import React from 'react'
import style from './FormControls.module.css'


export const Element = Element => ({input, meta, ...props}) => {
	const hasErrors = meta.touched && meta.error
	return (
		<div className={`${style.formControl} ${hasErrors && style.error}`}>
			{hasErrors && <span className={style.errorMessage}>{meta.error}</span>}
			<Element {...input} {...props} />
		</div>
	)
}


// export const Textarea = ({input, meta, ...props}) => {
// 	const hasErrors = meta.touched && meta.error
// 	return (
// 		<div className={`${style.formControl} ${hasErrors && style.error}`}>
// 			{hasErrors && <span className={style.errorMessage}>{meta.error}</span>}
// 			<textarea {...input} {...props} />
// 		</div>
// 	)
// }
//
// export const Input = ({input, meta, ...props}) => {
// 	const hasErrors = meta.touched && meta.error
// 	return (
// 		<div className={`${style.formControl} ${hasErrors && style.error}`}>
// 			{hasErrors && <span className={style.errorMessage}>{meta.error}</span>}
// 			<input {...input} {...props} />
// 		</div>
// 	)
// }
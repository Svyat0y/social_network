import React from 'react';
import style from './Login.module.css';
import {Field, reduxForm} from "redux-form";
// import {Input} from "../common/FormControls/FormControls";
import {required} from "../../utils/validators/validators";
import {Element} from "../common/FormControls/FormControls";

const Login = (props) => {

	const onSubmit = (formData) => {
		console.log(formData)
	}

	return (
		<div className={style.login_wr}>
			<h1>Login</h1>
			<LoginReduxForm onSubmit={onSubmit}/>
		</div>
	);
}


const Input = Element('input')

const LoginForm = (props) => {
	return (
		<form onSubmit={props.handleSubmit}>
			<div>
				<Field name={'login'} placeholder={'Login'} component={Input} validate={[required]}/>
			</div>
			<div>
				<Field name={'password'} placeholder={'Password'} component={Input} validate={[required]}/>
			</div>
			<div>
				<Field name={'rememberMe'} component={Input} type={'checkbox'} /> remember me
			</div>
			<button>Login</button>
		</form>
	)
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

export default Login;
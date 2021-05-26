import React from 'react';
import style from './Login.module.css';
import {Field, reduxForm} from "redux-form";

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




const LoginForm = (props) => {
	return (
		<form onSubmit={props.handleSubmit}>
			<div>
				<Field name={'login'} placeholder={'Login'} component={'input'}/>
			</div>
			<div>
				<Field name={'password'} placeholder={'Password'} component={'input'}/>
			</div>
			<div>
				<Field name={'rememberMe'} component={'input'} type={'checkbox'}/> remember me
			</div>
			<button>Login</button>
		</form>
	)
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

export default Login;
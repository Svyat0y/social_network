import React from 'react';
import style from './Login.module.css';
import {Field, reduxForm} from "redux-form";
import {required} from "../../utils/validators/validators";
import {Element} from "../common/FormControls/FormControls";
import {connect} from "react-redux";
import {login} from "../../Redux/auth-reducer";
import {Redirect} from "react-router-dom";


const Input = Element('input')

const LoginForm = (props) => {
	return (
		<form onSubmit={props.handleSubmit}>
			<div>
				<Field name={'email'} placeholder={'email'} component={Input} validate={[required]}/>
			</div>
			<div>
				<Field name={'password'} placeholder={'password'} type={'password'} component={Input} validate={[required]}/>
			</div>
			<div>
				<Field name={'rememberMe'} component={Input} type={'checkbox'} /> remember me
			</div>
			<button>Login</button>
		</form>
	)
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const Login = (props) => {

	const onSubmit = (formData) => {
		props.login(formData.email, formData.password, formData.rememberMe)
	}

	if(props.isAuth) return <Redirect to={'/profile'} />

	return (
		<div className={style.login_wr}>
			<h1>Login</h1>
			<LoginReduxForm onSubmit={onSubmit}/>
		</div>
	);
}

const mapStateToProps = (state) => ({
	isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login})(Login);
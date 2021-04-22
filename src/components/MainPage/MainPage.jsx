import React from 'react';
import style from './MainPage.module.css';
import Music from "./Music/Music";
import Notifications from './Notifications/Notifications';
import MySettings from './MySettings/MySettings';
import {Route} from "react-router-dom";
import MyMessagesContainer from "./MyMessages/MyMessagesContainer";
import UsersContainer from "./Users/UsersContainer";
import ProfileContainer from "./Profile/ProfileContainer";
import Login from "../Login/Login";

const MainPage = (props) => {
	return (
		<div className={style.mainPage}>
			<Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>
			<Route path='/myMessages' render={() => <MyMessagesContainer/>}/>
			<Route path='/myMusic' render={() => <Music/>}/>
			<Route path='/notifications' render={() => <Notifications/>}/>
			<Route path='/findUsers' render={() => <UsersContainer/>}/>
			<Route path='/mySettings' render={() => <MySettings/>}/>
			<Route path='/login' render={() => <Login />}/>
		</div>
	)
}

export default MainPage;
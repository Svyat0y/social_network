import React from 'react';
import classes from './MainPage.module.css';
import MyPage from './MyPage/MyPage';
import MyMessages from './MyMessages/MyMessages';
import Music from "./Music/Music";
import Notifications from './Notifications/Notifications';
import MySettings from './MySettings/MySettings';
import {Route} from "react-router-dom";


const MainPage = () => {
	return (
		<div className={classes.mainPage}>
			<Route exact path='/' component={MyPage}/>
			<Route path='/myMessages' component={MyMessages}/>
			<Route path='/myMusic' component={Music}/>
			<Route path='/notifications' component={Notifications}/>
			<Route path='/mySettings' component={MySettings}/>
		</div>
	);
}

export default MainPage;
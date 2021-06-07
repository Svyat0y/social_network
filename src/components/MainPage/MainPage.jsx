import React from 'react';
import style from './MainPage.module.css';
import {Route} from "react-router-dom";
import UsersContainer from "./Users/UsersContainer";
import ProfileContainer from "./Profile/ProfileContainer";
import Login from "../Login/Login";
import {withLazyLoad} from "../../hoc/withLazyLoad";
// для того, чтобы реализовать ленивую подгрузку компоненты мы импортим её вот таким способом
const MySettings = React.lazy(() => import('./MySettings/MySettings'));
const Music = React.lazy(() => import('./Music/Music'));
const Notifications = React.lazy(() => import('./Notifications/Notifications'));
const MyMessagesContainer = React.lazy(() => import ("./MyMessages/MyMessagesContainer"));

const MainPage = () => {
	return (
		<div className={style.mainPage}>
			<Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>
			{/*далее пишем что-то на подобие hoc-a "withLazyLoad" и вызываем его, передаем внутрь компоненту*/}
			<Route path='/myMessages' render={withLazyLoad(MyMessagesContainer)}/>
			<Route path='/myMusic' render={withLazyLoad(Music)}/>
			<Route path='/notifications' render={withLazyLoad(Notifications)}/>
			<Route path='/findUsers' render={() => <UsersContainer/>}/>
			<Route path='/mySettings' render={withLazyLoad(MySettings)}/>
			<Route path='/login' render={() => <Login />}/>
		</div>
	)
}

export default MainPage;
import React from 'react';
import style from './MainPage.module.css';
import Profile from './Profile/Profile';
import Music from "./Music/Music";
import Notifications from './Notifications/Notifications';
import MySettings from './MySettings/MySettings';
import {Route} from "react-router-dom";
import MyMessagesContainer from "./MyMessages/MyMessagesContainer";
import UsersContainer from "./Users/UsersContainer";

const MainPage = () => {
    return (
        <div className={style.mainPage}>
            <Route exact path='/' render={() => <Profile />}/>
            <Route path='/myMessages' render={()=> <MyMessagesContainer />}/>
            <Route path='/myMusic' render={() => <Music />}/>
            <Route path='/notifications' render={() => <Notifications />}/>
            <Route path='/findUsers' render={() => <UsersContainer />}/>
            <Route path='/mySettings' render={() => <MySettings />}/>
        </div>
    )
}

export default MainPage;
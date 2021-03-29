import React from 'react';
import classes from './MainPage.module.css';
import Profile from './Profile/Profile';
import Music from "./Music/Music";
import Notifications from './Notifications/Notifications';
import MySettings from './MySettings/MySettings';
import {Route} from "react-router-dom";
import MyMessagesContainer from "./MyMessages/MyMessagesContainer";

const MainPage = (props) => {
    return (
        <div className={classes.mainPage}>
            <Route exact path='/' render={() =>
                <Profile
                    store={props.store}
                    dispatch={props.dispatch}
                />}/>
            <Route path='/myMessages' render={() =>
                <MyMessagesContainer
                    store={props.store}
                    dispatch={props.dispatch}
                />}/>
            <Route path='/myMusic' render={Music}/>
            <Route path='/notifications' render={Notifications}/>
            <Route path='/mySettings' render={MySettings}/>
        </div>
    );
}

export default MainPage;
import React from 'react';
import {NavLink} from 'react-router-dom';
import classes from './Aside.module.css';

const Aside = () => {
    return (
        <aside className={classes.aside}>
            <ul className={classes.nav}>
                <li><NavLink exact to='/' activeClassName={classes.active}>My page</NavLink></li>
                <li><NavLink to='/myMessages' activeClassName={classes.active}>My messages</NavLink></li>
                <li><NavLink to='/notifications' activeClassName={classes.active}>My notifications</NavLink></li>
                <li><NavLink to='/mySettings' activeClassName={classes.active}>My settings</NavLink></li>
            </ul>
        </aside>
    );
}

export default Aside;
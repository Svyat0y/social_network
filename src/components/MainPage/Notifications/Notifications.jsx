import React from 'react';
import style from './Notifications.module.css';
import {withAuthRedirect} from "../../../hoc/withAuthRedirect";
import Music from "../Music/Music";

const Notifications = () => {
    return (
        <div className={style.wrapper}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci assumenda beatae commodi consectetur
            delectus dolor doloribus ea expedita ipsa iure libero nemo placeat provident quasi quia, reiciendis unde
            veritatis. Amet beatae deleniti dolorem earum expedita, ipsa magni maiores molestiae quaerat quam similique
            veniam voluptate. Consectetur enim minima odit officiis placeat.
        </div>
    )
}

export default Notifications;
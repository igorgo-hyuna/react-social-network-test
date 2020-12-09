import React from 'react';
import {NavLink} from "react-router-dom";
import s from './../dialogs.module.css';

/* Вывод списка друзей */
const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;

    return <div className={s.dialogs__listItem + ' ' + s.active}>
        <NavLink to={path}>{props.name}</NavLink>
    </div>
}

export default DialogItem;

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

/* Вывод списка диалогов */
const Message = (props) => {

    // Преобразовуем класс инициализации персоны в диалоге
    let classPart;
    (props.indicator === "friendMessage") ? classPart = s.friendMessage : classPart = s.myMessage;

    return <div className={s.dialogs__messagesItem}><span className={classPart}>{props.message}</span></div>
}

export default Message;

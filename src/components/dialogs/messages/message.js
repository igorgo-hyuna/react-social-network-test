import React from 'react';
import s from './../dialogs.module.css';

/* Вывод списка диалогов */
const Message = (props) => {
    // Преобразовуем класс инициализации персоны в диалоге
    let classPart;
    (props.indicator === "friendMessage") ? classPart = s.friendMessage : classPart = s.myMessage;


    return <div className={s.dialogs__messagesItem}><span className={classPart}>{props.message}</span></div>
}

export default Message;

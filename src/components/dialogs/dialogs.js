import React from 'react';
import s from './dialogs.module.css';
import DialogItem from "./dialog-item";
import Message from "./messages";
import {addMessageActionCreater, updateNewMessageTextActionCreater} from "../../redux/dialogs-page-reducer";


const Dialogs= (props) => {
    /* Получаем страницу диалогов */
    let state = props.store.getState().dialogsPage;
    /* Преобразовуем массив друзей */
    let newDialogsData = state.dialogsData.map( el => (<DialogItem name={el.name} id={el.id} />) );
    /* Преобразовуем массив сообщений */
    let newMessageDate = state.messageDate.map( el => (<Message message={el.message} indicator={el.indicator} />));

    // Событие изминения текстового поля
    let onNewMessageChange = (event) => {
       let text = event.target.value; // Стучимся к объекту с которым произошло событие
        props.store.dispatch(updateNewMessageTextActionCreater(text));
    };

    // Событие отпрваки сообщения
    let onSendMessageClick = () => {
        props.store.dispatch(addMessageActionCreater());
    };

    return(
        <div className={s.dialogs}>

            <div className={s.dialogs__list}>
                {newDialogsData}
            </div>

            <div className={s.dialogs__messages}>
                <div>{newMessageDate}</div>
                <div className={s.dialogs__wrapp}>
                    <textarea
                        value={state.newMessageText}
                        onChange={onNewMessageChange}
                        placeholder='Please, input message...'/>
                </div>
                <div>
                    <button
                        // onClick={addNewMessageListener}
                        onClick={onSendMessageClick}>Add</button>
                </div>
            </div>

        </div>
    )
};

export default Dialogs;

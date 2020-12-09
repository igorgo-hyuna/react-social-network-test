import React from 'react';
import s from './dialogs.module.css';
import DialogItem from "./dialog-item";
import Message from "./messages";

const Dialogs= (props) => {

    /* Преобразовуем массив друзей */
    let newDialogsData = props.state.dialogsData.map( el => (<DialogItem name={el.name} id={el.id} />) );
    /* Преобразовуем массив сообщений */
    let newMessageDate = props.state.messageDate.map( el => (<Message message={el.message} indicator={el.indicator} />));


    /* Получаем текст нового сообщения */
    let newMessage = React.createRef()

    let addNewMessageListener = () => {
        let text = newMessage.current.value
        props.addMessage(text)
        newMessage.current.value = ''
    }

    return(
        <div className={s.dialogs}>

            <div className={s.dialogs__list}>
                {newDialogsData}
            </div>

            <div className={s.dialogs__messages}>
                {newMessageDate}
                <div className={s.dialogs__wrapp}>
                    <textarea ref={newMessage}></textarea>
                </div>
                <button onClick={addNewMessageListener}>Add</button>
            </div>

        </div>
    )
}

export default Dialogs;

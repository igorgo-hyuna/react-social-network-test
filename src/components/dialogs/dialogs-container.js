import React from 'react';
import DialogItem from "./dialog-item";
import Message from "./messages";
import {addMessageActionCreater, updateNewMessageTextActionCreater} from "../../redux/dialogs-page-reducer";
import Dialogs from "./dialogs";


const DialogsContainer = (props) => {

    let onNewMessageChange = (text) => {
        props.store.dispatch(updateNewMessageTextActionCreater(text));
    };

    let onSendMessageClick = () => {
        props.store.dispatch(addMessageActionCreater());
    };

    return(
        <Dialogs
            onNewMessageChange={onNewMessageChange}
            onSendMessageClick={onSendMessageClick}
            store={props.store}/>
    );
};

export default DialogsContainer;

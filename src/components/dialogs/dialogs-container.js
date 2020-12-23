import React from 'react';
import {addMessageActionCreater, updateNewMessageTextActionCreater} from "../../redux/dialogs-page-reducer";
import Dialogs from "./dialogs";
import {connect} from "react-redux";

//Функция возвращает State для объекта dialogsPage
let mapStateToProps = (state) => {
    return {
        store: state.dialogsPage
    }
};

//Функция возвращает Dispatch для объекта dialogsPage
let mapDispatchToProps = (dispatch) => {
    return {
        onNewMessageChange: (text) => {
            dispatch(updateNewMessageTextActionCreater(text));
        },
        onSendMessageClick: () => {
            dispatch(addMessageActionCreater());
        }
    }
};

// Создаём контейнерную функцию для презинтационной компоненты
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;

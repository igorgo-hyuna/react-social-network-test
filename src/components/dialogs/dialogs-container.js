import React from 'react';
import {addMessageActionCreater, updateNewMessageTextActionCreater} from "../../redux/dialogs-page-reducer";
import Dialogs from "./dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

//Функция возвращает State для объекта dialogsPage
let mapStateToProps = (state) => {
    return {
        store: state.dialogsPage,
        isAuth: state.auth.isAuth
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


export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect)
(Dialogs);

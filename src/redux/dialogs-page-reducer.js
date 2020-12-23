const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

// Значение state по умолчанию
let initialState = {

    dialogsData: [
        {id: 1, name: 'Andey'},
        {id: 2, name: 'Ksusha'},
        {id: 3, name: 'Vladimir'},
        {id: 4, name: 'Sergej'},
        {id: 5, name: 'Vanya'}
    ], /* Массив друзей */

    messageDate: [
        {id: 1, message: 'Hi', indicator: 'friendMessage'},
        {id: 2, message: 'Hello)', indicator: 'myMessage'},
        {id: 3, message: 'How are u?', indicator: 'myMessage'},
        {id: 4, message: 'fine', indicator: 'friendMessage'},
        {id: 5, message: 'and u?', indicator: 'friendMessage'},
        {id: 6, message: 'nice', indicator: 'myMessage'}
    ], /* Массив сообщений */

    newMessageText: ''
};

const dialogsPageReducer = (state = initialState, action) => {
    // Ниже равносильная запись
    // let stateCopy = {...state};
    // stateCopy.messageDate = {...state.messageDate};
    let stateCopy = {
        ...state, // Сразу делаем копию самого объекта
        messageDate: [...state.messageDate] // Потом делаем копию внутренних объектов
    };


    switch(action.type) {
        case ADD_MESSAGE: {
            let newText = state.newMessageText;
            // Копируем State
            let stateCopy = {...state};
            stateCopy.messageDate = [...state.messageDate];
            stateCopy.messageDate.push({id: 7, message: newText, indicator: 'myMessage'});
            stateCopy.newMessageText = '';
            return stateCopy;
        }

        case UPDATE_NEW_MESSAGE_TEXT: {
            // Копируем State
            let stateCopy = {...state};
            stateCopy.newMessageText = action.newText;
            return stateCopy;
        }
        default: {
            return state;
        }
    }
};
export const addMessageActionCreater = () => ({type: ADD_MESSAGE});
export const updateNewMessageTextActionCreater = (text) => ({type: UPDATE_NEW_MESSAGE_TEXT, newText: text});

export default dialogsPageReducer;
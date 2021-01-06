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
    // Копируем Sate. Ниже равносильная запись
    // let stateCopy = {...state};
    // stateCopy.messageDate = {...state.messageDate};




    switch(action.type) {
        // Добавить новое сообщение
        case ADD_MESSAGE:
            // Создаём глубокую копию объекта State, создаём гл. копию объекта диалогов и добавляем в него новоё сообщение
            return {
               ...state,
                messageDate: [...state.messageDate, {id: 7, message: state.newMessageText, indicator: 'myMessage'}],
                newMessageText: ''
            };

        // Изминение текстового поля
        case UPDATE_NEW_MESSAGE_TEXT:
            return {
                ...state,
                newMessageText: action.newText
            };

        default: {
            return state;
        }
    }
};
export const addMessageActionCreater = () => ({type: ADD_MESSAGE}); // Возвращаем тип. Сокращение в одну строку
export const updateNewMessageTextActionCreater = (text) => ({type: UPDATE_NEW_MESSAGE_TEXT, newText: text}); // Возвращаем тип. Сокращение в одну строку

export default dialogsPageReducer;
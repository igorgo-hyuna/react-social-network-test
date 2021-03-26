import profilePageReducer from "./profile-page-raducer";
import dialogsPageReducer from "./dialogs-page-reducer";
import siderbarReducer from "./sidebar-reducer";

//Мы не используем данный файл. Этот стор - пример реализации стора у редакса
let store = {

    _state: {

        profilePage: {
            posts: [
                {id: 1, message: 'Hellow! How are you?', likesCount: 11 },
                {id: 2, message: 'It is my first post', likesCount: 17 },
                {id: 2, message: 'Ololo it is wary fary!', likesCount: 3 },
                {id: 3, message: 'O nooooo!', likesCount: 3 }
            ],/* Массив личных сообщений */
            newPostText: ''
        },
        dialogsPage: {

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
        },
        sidebar: {}

    },

    //Метод стора. Callback функция наблюдатель. Заглушка. Переопределяемая, поэтому Let
    _callSubscriber() {
        console.log('State changed');
    },
    // Callback функция наблюдатель. Реальная, принимает параметр.
    subscribe(observer) {
        this._callSubscriber = observer; // Наблюдатель
    },
    // Получаем State
    getState() {
        return this._state;
    },
    //Функция-отправитель, работает с callback-функциями компонент{type: ADD_POST}
    dispatch(action) {
        this._state.profilePage = profilePageReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsPageReducer(this._state.dialogsPage, action);
        this._state.sidebar = siderbarReducer(this._state.sidebar, action);
        this._callSubscriber(this._state);
    }
};


export default store;
window.state = store; // При надобности позволяет обратиться глобально


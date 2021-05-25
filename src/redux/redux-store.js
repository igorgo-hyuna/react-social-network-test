import {combineReducers, createStore} from "redux";
import profilePageReducer from "./profile-page-raducer";
import dialogsPageReducer from "./dialogs-page-reducer";
import siderbarReducer from "./sidebar-reducer";
import usersPageReducer from "./users-raducer";
import {authReducer} from "./auth-reducer";


// Создаем объект стейт редьюсеров
let reducers = combineReducers({
    profilePage: profilePageReducer,
    dialogsPage: dialogsPageReducer,
    sidebar: siderbarReducer,
    usersPage: usersPageReducer,
    auth: authReducer
});

// Создаем хранилище на основе редьюсоров
let store = createStore(reducers);

window.store = store;

export default store;
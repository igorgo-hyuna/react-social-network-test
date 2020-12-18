import {combineReducers, createStore} from "redux";
import profilePageReducer from "./profile-page-raducer";
import dialogsPageReducer from "./dialogs-page-reducer";
import siderbarReducer from "./sidebar-reducer";


// Создаем обхект стейт редьюсеров
let reducers = combineReducers({
    profilePage: profilePageReducer,
    dialogsPage: dialogsPageReducer,
    sidebar: siderbarReducer
});

// Создаем хранилище на основе редьюсоров
let store = createStore(reducers);

export default store;
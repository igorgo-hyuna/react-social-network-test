import {applyMiddleware, combineReducers, createStore} from "redux";
import profilePageReducer from "./profile-page-raducer";
import dialogsPageReducer from "./dialogs-page-reducer";
import siderbarReducer from "./sidebar-reducer";
import usersPageReducer from "./users-raducer";
import {authReducer} from "./auth-reducer";
import thunkMiddleware from "redux-thunk"; // Импортируется для работы с санками


// Создаем объект стейт редьюсеров
let reducers = combineReducers({
    profilePage: profilePageReducer,
    dialogsPage: dialogsPageReducer,
    sidebar: siderbarReducer,
    usersPage: usersPageReducer,
    auth: authReducer
});

// Создаем хранилище на основе редьюсоров
let store = createStore(reducers, applyMiddleware(thunkMiddleware)); // applyMiddleware - промежуточный слой. Импортируется для работы с санками

window.store = store;

export default store;
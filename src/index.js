import reportWebVitals from './reportWebVitals';
import store from "./redux/redux-store";
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";

let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <React.StrictMode>
                <App state={state}
                     dispatch={store.dispatch.bind(store)} /// .bind(store) - связываем addPost, который будет использоваться в new-post.js через props с state. Аналогично для каллбэков ниже, только своих функциа в своих файлах
                     store={store}/>
            </React.StrictMode>
        </BrowserRouter>,
        document.getElementById('root')
    );
};

//Отрисовуем первый раз App
rerenderEntireTree(store.getState());
//Передаём функцию рендера приложения
store.subscribe(() => {
    let state = store.getState();
    rerenderEntireTree(state);
});

// React default import
reportWebVitals();

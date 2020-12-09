import {rerenderEntireTree} from "../render";

let state = {

    profilePage: {
        posts: [
            {id: 1, message: 'Hellow! How are you?', likesCount: 11 },
            {id: 2, message: 'It is my first post', likesCount: 17 },
            {id: 2, message: 'Ololo it is wary fary!', likesCount: 3 },
            {id: 3, message: 'O nooooo!', likesCount: 3 }
        ],/* Массив личных сообщений */
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
        ] /* Массив сообщений */
    },

    sidebar: {}

}


//Функция добавления нового поста в профайле
export let addPost = (postMessage) => {

    let newPost = {
        id: 5,
        message: postMessage,
        likesCount: 0
    }

    state.profilePage.posts.push(newPost) // Добавляем новый элемент в массив объектов
    rerenderEntireTree(state)
}

//Функция добавления нового сообщения в диалоге
export let addMessage = (dialogMessage) => {

    let newMessage = {
        id: 1,
        message: dialogMessage,
        indicator: 'myMessage'
    }

    state.dialogsPage.messageDate.push(newMessage) // Добавляем новый элемент в массив объектов
    rerenderEntireTree(state)
}

export default state;
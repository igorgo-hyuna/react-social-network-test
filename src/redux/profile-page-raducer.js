const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

// Значение state по умолчанию
let initialState = {
    posts: [
        {id: 1, message: 'Hellow! How are you?', likesCount: 11 },
        {id: 2, message: 'It is my first post', likesCount: 17 },
        {id: 2, message: 'Ololo it is wary fary!', likesCount: 3 },
        {id: 3, message: 'O nooooo!', likesCount: 3 }
    ],/* Массив личных сообщений */
    newPostText: ''
};

export const profilePageReducer = (state = initialState, action) => {

    switch(action.type){
        case ADD_POST:
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            };
            state.posts.push(newPost); // Добавляем новый элемент в массив объектов
            state.newPostText = '';
            console.log(state.newPostText);
            return state;

        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText; // Добавляем новый элемент в массив объектов
            return state;

        default:
            return state;
    }
};
export const addPostActionCreater = () => ({type: ADD_POST});
export const updateNewPostTextActionCreater = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text});
export default profilePageReducer;
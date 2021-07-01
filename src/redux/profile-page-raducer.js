import {usersAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

// Значение state по умолчанию
let initialState = {
    posts: [
        {id: 1, message: 'Hellow! How are you?', likesCount: 11},
        {id: 2, message: 'It is my first post', likesCount: 17},
        {id: 3, message: 'Ololo it is wary fary!', likesCount: 3},
        {id: 4, message: 'O nooooo!', likesCount: 3}
    ],/* Массив личных сообщений */
    newPostText: '',
    profile: null
};

export const profilePageReducer = (state = initialState, action) => {

    // Логика добавления нового поста в профайле
    switch (action.type) {
        case ADD_POST: {
            return {
                ...state,
                posts: [...state.posts, {id: 5, message: state.newPostText, likesCount: 0}],
                newPostText: ''
            };
        }

        // Логика отслеживание изминений текстового поля
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText
            };
        }

        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            };
        }

        default:
            return state;
    }
};

export const addPostActionCreater = () => ({type: ADD_POST});  // Возвращаем тип. Сокращение в одну строку
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
export const getUserProfile = (userId) => (dispatch) => {
    usersAPI.getProfile(userId)
        .then(response => {
            dispatch(setUserProfile(response.data));
        });
}
export const updateNewPostTextActionCreater = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text});
export default profilePageReducer;
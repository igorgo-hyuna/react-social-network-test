const SET_USER_DATA = 'SET_USER_DATA';


// Значение state по умолчанию
let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
};

export const authReducer = (state = initialState, action) => {

    // Логика добавления нового поста в профайле
    switch (action.type) {
        case SET_USER_DATA:

            return {
                ...state,
                ...action.data,
                isAuth: true
            };

        default:
            return state;
    }
};

export const setAuthUserData = (userId, email, login) => ({type: SET_USER_DATA, data: {userId, email, login}});
export default authReducer;
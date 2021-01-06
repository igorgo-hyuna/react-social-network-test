const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

// Значение state по умолчанию
let initialState = {
    users: [
        
    ]
};

export const usersPageReducer = (state = initialState, action) => {

    // Логика добавления нового поста в профайле
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                // users: [...state.users],
                users: state.users.map(u => {
                    if(u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            };

        case UNFOLLOW:
            return {
                ...state,
                // users: [...state.users],
                users: state.users.map(u => {
                    if(u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            };

        case SET_USERS: {
            return {...state, users: [...state.users, ...action.users]}
        }

        default:
            return state;
    }
};

export const followAC = (userId) => ({type: FOLLOW, userId});  // Возвращаем тип. Сокращение в одну строку
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId});  // Возвращаем тип. Сокращение в одну строку
export const setUsersAC = (users) => ({type: SET_USERS, users});  // Возвращаем тип. Сокращение в одну строку

export default usersPageReducer;
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT';

// Значение state по умолчанию
let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1
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
            return {...state, users: [...action.users]}
        }

        case SET_CURRENT_PAGE: {
            return {...state, currentPage: action.currentPage}
        }

        case SET_TOTAL_COUNT: {
            return {...state, totalUsersCount: action.totalUsersCount}
        }

        default:
            return state;
    }
};

export const followAC = (userId) => ({type: FOLLOW, userId});  // Возвращаем тип. Сокращение в одну строку. Тип, значение. Не сокр: type: FOLLOW, userId: userId
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId});  // Возвращаем тип. Сокращение в одну строку. Тип, значение
export const setUsersAC = (users) => ({type: SET_USERS, users});  // Возвращаем тип. Сокращение в одну строку. Тип, значение
export const setCurrentPageAC = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});  // Возвращаем тип. Сокращение в одну строку. Тип, значение
export const setTotalUsersCountAC = (totalUsersCount) => ({type: SET_TOTAL_COUNT, totalUsersCount});  // Возвращаем тип. Сокращение в одну строку. Тип, значение

export default usersPageReducer;
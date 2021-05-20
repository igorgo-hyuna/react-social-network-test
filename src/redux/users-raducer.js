const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';

// Значение state по умолчанию
let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false
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

        case TOGGLE_IS_FETCHING: {
            return {...state, isFetching: action.isFetching}
        }

        default:
            return state;
    }
};

export const follow = (userId) => ({type: FOLLOW, userId});  // Возвращаем тип. Сокращение в одну строку. Тип, значение. Не сокр: type: FOLLOW, userId: userId
export const unFollow = (userId) => ({type: UNFOLLOW, userId});  // Возвращаем тип. Сокращение в одну строку. Тип, значение
export const setUsers = (users) => ({type: SET_USERS, users});  // Возвращаем тип. Сокращение в одну строку. Тип, значение
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});  // Возвращаем тип. Сокращение в одну строку. Тип, значение
export const setTotalUsersCount = (totalUsersCount) => ({type: SET_TOTAL_COUNT, totalUsersCount});  // Возвращаем тип. Сокращение в одну строку. Тип, значение
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});  // Возвращаем тип. Сокращение в одну строку. Тип, значение

export default usersPageReducer;
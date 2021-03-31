import React from 'react';
import {connect} from "react-redux";
import {followAC, setUsersAC, unfollowAC, setCurrentPageAC, setTotalUsersCountAC} from "../../redux/users-raducer";
import * as axios from "axios";
import Users from "./users";


// Side-Эффекты
class UsersContainer extends React.Component {
    // Конструктор перебрасывает конструирование класса (наследуется от React.Component) на супер. Можно не писать, происходит по умолчанию
    // constructor(props){
    //     super(props);
    // }

    // Запрашуем пользователей у сервака, вовремя отрисовки DOM
    componentDidMount() {
        // Получаем пользователей. Response - можно прмониторить через debugger, что бы увидеть, что он возвращает
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
            });
    };

    // Клик по странице пагинации
    onPageChanged = (pageNumber) => {
        // Делаем активной страницу
        this.props.setCurrentPage(pageNumber);
        // Получаем пользователей. Response - можно прмониторить через debugger, что бы увидеть, что он возвращает
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
            });
    };

    render () {

        return <Users totalUsersCount={this.props.totalUsersCount}
                      pageSize={this.props.pageSize}
                      currentPage={this.props.currentPage}
                      users={this.props.users}
                      onPageChanged={this.onPageChanged}
                      unFollow={this.props.unFollow}
                      follow={this.props.follow}/>
    };
}

// Пробрасываем props из редьюсора в компоненту
let mapStateToProps = (state) => {
    return{
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
};

// Функции коллбэки, пробрасывают данные в редьюсер компоненты
let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId))
        },

        unFollow: (userId) => {
            dispatch(unfollowAC(userId))
        },

        setUsers: (users) => {
            dispatch(setUsersAC(users))
        },

        setCurrentPage: (pageNumber) => {
            dispatch(setCurrentPageAC(pageNumber))
        },

        setTotalUsersCount: (totalCount) => {
            dispatch(setTotalUsersCountAC(totalCount))
        }
    }
};

// const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersContainer); // Функция отвечает за передачу дизпатчей в сторе user-reducer и обратное прокидывание з него с компоненту props
// export default UsersContainer;
export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer); // Функция отвечает за передачу дизпатчей в сторе user-reducer и обратное прокидывание з него с компоненту props


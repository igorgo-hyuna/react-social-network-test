import React from 'react';
import {connect} from 'react-redux';
import {
    follow,
    setUsers,
    unFollow,
    setCurrentPage,
    setTotalUsersCount,
    toggleIsFetching
} from '../../redux/users-raducer';
import Users from './users';
import Preloader from "../common/preloader/preloader";
import {getUsers, usersAPI} from "../../api/api";

// Side-Эффекты
class UsersContainer extends React.Component {
    // Конструктор перебрасывает конструирование класса (наследуется от React.Component) на супер. Можно не писать, происходит по умолчанию
    // constructor(props){
    //     super(props);
    // }

    // Запрашуем пользователей у сервака, вовремя отрисовки DOM
    componentDidMount() {
        this.props.toggleIsFetching(true);
        // Получаем пользователей. Response - можно прмониторить через debugger, что бы увидеть, что он возвращает

        usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(data.items);
                this.props.setTotalUsersCount(data.totalCount);
            });
    };

    // Клик по странице пагинации
    onPageChanged = (pageNumber) => {
        // Делаем активной страницу
        this.props.setCurrentPage(pageNumber);
        this.props.toggleIsFetching(true);
        // Получаем пользователей. Response - можно прмониторить через debugger, что бы увидеть, что он возвращает
        usersAPI.getUsers(pageNumber, this.props.pageSize).then(data => {
            this.props.toggleIsFetching(false);
            this.props.setUsers(data.items);
        });
    };

    render () {

        return <>
                { this.props.isFetching ? <Preloader/> : null }
                <Users totalUsersCount={this.props.totalUsersCount}
                      pageSize={this.props.pageSize}
                      currentPage={this.props.currentPage}
                      users={this.props.users}
                      onPageChanged={this.onPageChanged}
                      unFollow={this.props.unFollow}
                      follow={this.props.follow}/>
                </>
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

// const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersContainer); // Функция отвечает за передачу дизпатчей в сторе user-reducer и обратное прокидывание з него с компоненту props
// export default UsersContainer;
export default connect(mapStateToProps, {follow, unFollow, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching})(UsersContainer); // Функция отвечает за передачу дизпатчей в сторе user-reducer и обратное прокидывание з него с компоненту props


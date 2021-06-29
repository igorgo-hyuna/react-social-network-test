import React from 'react';
import {connect} from 'react-redux';
import {
    follow,
    unFollow,
    setCurrentPage,
    toggleFollowingProgress,
    getUsers
} from '../../redux/users-raducer';
import Users from './users';
import Preloader from "../common/preloader/preloader";


class UsersContainer extends React.Component {
    // Конструктор перебрасывает конструирование класса (наследуется от React.Component) на супер. Можно не писать, происходит по умолчанию
    // constructor(props){
    //     super(props);
    // }

    // Запрашуем пользователей у сервака, вовремя отрисовки DOM
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    };

    // Клик по странице пагинации
    onPageChanged = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize);
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
                       follow={this.props.follow}
                       followingInProgress={this.props.followingInProgress} />
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
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
};

// const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersContainer); // Функция отвечает за передачу дизпатчей в сторе user-reducer и обратное прокидывание з него с компоненту props
// export default UsersContainer;
export default connect(mapStateToProps,
    {follow, unFollow, setCurrentPage,
        toggleFollowingProgress, getUsers})(UsersContainer); // Функция отвечает за передачу дизпатчей в сторе user-reducer и обратное прокидывание з него с компоненту props


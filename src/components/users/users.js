import React from 'react';
import s from './users.module.css';
import * as axios from 'axios';
import undefinedUserPhoto from '../../assets/images/undefined-user.png';

class Users extends React.Component {
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
    }

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
        // Получаем номер текущей страницы и округляем его
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
        let pages = []; // создаём пустой массив страниц

        for(let i=1; i<=pagesCount; i++){ // Набиваем масив количеством страниц
            pages.push(i);
        }

        // Выводим пагинацию
        return <div className={s.usersContainer}>
            <div className={s.paginationBox}>
                {pages.map(p=>{
                    return <span className={this.props.currentPage === p && s.selectedPage}
                                 onClick={() => { this.onPageChanged(p); }}>{p}</span>
                })}
            </div>
            {
                this.props.users.map(u => <div key={u.id} className={s.__item}>
                        <div className={s._topContainer}>
                            <div>
                                <img src={u.photos.small != null ? u.photos.small : undefinedUserPhoto} alt=""/>
                            </div>
                        </div>
                        <div className={s._bottomContainer}>
                            <div>
                                <span>{u.name}. </span>
                                <span>{u.status}</span>
                            </div>
                            <div>
                                <span>{"u.location.city"}, </span>
                                <span>{"u.location.country"}</span>
                            </div>
                            <div>
                                {/* Тернарное выражение */}
                                {u.followed
                                    ? <button onClick={() => {
                                        this.props.unFollow(u.id)
                                    }} className={s.btnUnFollow}>Unfollow</button>
                                    : <button onClick={() => {
                                        this.props.follow(u.id)
                                    }}>Follow</button>}
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    };
}

export default Users;

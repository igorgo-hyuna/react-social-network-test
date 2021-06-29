import React from 'react';
import s from "./users.module.css";
import undefinedUserPhoto from '../../assets/images/undefined-user.png';
import {NavLink} from "react-router-dom";
import {usersAPI} from "../../api/api";


let users = (props) => {
    // Получаем номер текущей страницы и округляем его
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = []; // создаём пустой массив страниц
    for(let i=1; i<=pagesCount; i++){ // Набиваем масив количеством страниц
        pages.push(i);
    }

    // Выводим пагинацию
    return <div className={s.usersContainer}>
        <div className={s.paginationBox}>
            {pages.map(p=>{
                return <span className={props.currentPage === p && s.selectedPage}
                             onClick={() => { props.onPageChanged(p); }}>{p}</span>
            })}
        </div>
        {
            props.users.map(u => <div key={u.id} className={s.__item}>
                    <div className={s._topContainer}>
                        <div>
                            <NavLink to={'/profile/' + u.id}>
                                <img src={u.photos.small != null ? u.photos.small : undefinedUserPhoto} alt=""/>
                            </NavLink>
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
                                ? <button disabled={props.followingInProgress.some(id=>id === u.id)}
                                          onClick={() => { props.unFollow(id => id === u.id); }}
                                          className={s.btnUnFollow}>Unfollow</button>
                                : <button disabled={props.followingInProgress.some(id=>id === u.id)}
                                          onClick={() => { props.follow(id => id === u.id); }}>Follow</button>}
                        </div>
                    </div>
                </div>
            )
        }
    </div>
};

export default users;
import React from 'react';
import s from "./users.module.css";
import undefinedUserPhoto from '../../assets/images/undefined-user.png';
import {NavLink} from "react-router-dom";
import * as axios from "axios";


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
                                ? <button disabled={props.followingInProgress.some(id=>id === u.id)} onClick={() => {
                                    props.toggleFollowingProgress(true, u.id);
                                    axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                                        withCredentials: true,
                                        headers: {
                                            "API-KEY": "b9361731-f53d-4604-bf4b-16540b08e7d6"
                                        }
                                    })
                                        .then(response => {
                                            if (response.data.resultCode === 0) {
                                                props.unFollow(u.id);
                                            }
                                            props.toggleFollowingProgress(false, u.id);
                                        });
                                }} className={s.btnUnFollow}>Unfollow</button>
                                : <button disabled={props.followingInProgress.some(id=>id === u.id)} onClick={() => {
                                    props.toggleFollowingProgress(true, u.id);
                                    axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                                        withCredentials: true,
                                        headers: {
                                            "API-KEY": "b9361731-f53d-4604-bf4b-16540b08e7d6"
                                        }
                                    })
                                        .then(response => {
                                            if (response.data.resultCode === 0) {
                                                props.follow(u.id);
                                            }
                                            props.toggleFollowingProgress(false, u.id);
                                        });
                                }}>Follow</button>}
                        </div>
                    </div>
                </div>
            )
        }
    </div>
};

export default users;
import React from 'react';
import s from './users.module.css';
import * as axios from 'axios';
import undefinedUserPhoto from '../../assets/images/undefined-user.png';


const Users = (props) => {

    if (props.users.length === 0) {
        //response - можно прмониторить через debugger, что бы увидеть, что он возвращает
        axios.get("https://social-network.samuraijs.com/api/1.0/users")
            .then(response => {
                props.setUsers(response.data.items);
            });
    }

        return <div className={s.usersContainer}>
            {
                props.users.map(u => <div key={u.id} className={s.__item}>
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
                                        props.unFollow(u.id)
                                    }} className={s.btnUnFollow}>Unfollow</button>
                                    : <button onClick={() => {
                                        props.follow(u.id)
                                    }}>Follow</button>}
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    }
    ;

    export default Users;

import React from 'react';
import s from './users.module.css';


const Users = (props) => {

    if (props.users.length === 0) {
        props.setUsers([
                {
                    id: 1,
                    photoUrl: 'https://www.rewizor.ru/files/1960668x8w.jpg',
                    followed: true,
                    fullName: 'Ihor',
                    status: 'I am a boss',
                    location: {city: 'Kremenchug', country: 'Ukraine'}
                },
                {
                    id: 2,
                    photoUrl: 'https://www.rewizor.ru/files/1960668x8w.jpg',
                    followed: false,
                    fullName: 'Anna',
                    status: 'doctor',
                    location: {city: 'Moscow', country: 'Russia'}
                },
                {
                    id: 3,
                    photoUrl: 'https://www.rewizor.ru/files/1960668x8w.jpg',
                    followed: false,
                    fullName: 'Andrey',
                    status: 'front-end developer',
                    location: {city: 'Kyiv', country: 'Ukraine'}
                },
                {
                    id: 4,
                    photoUrl: 'https://www.rewizor.ru/files/1960668x8w.jpg',
                    followed: true,
                    fullName: 'Emil',
                    status: 'HTML developer',
                    location: {city: 'Backu', country: 'Azerbaijan'}
                }
            ]
        )
    }

        return <div className={s.usersContainer}>
            {
                props.users.map(u => <div key={u.id} className={s.__item}>
                        <div className={s._topContainer}>
                            <div>
                                <img src={u.photoUrl} alt=""/>
                            </div>
                        </div>
                        <div className={s._bottomContainer}>
                            <div>
                                <span>{u.fullName}. </span>
                                <span>{u.status}</span>
                            </div>
                            <div>
                                <span>{u.location.city}, </span>
                                <span>{u.location.country}</span>
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

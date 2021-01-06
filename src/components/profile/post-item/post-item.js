import React from 'react';
import s from './post-item.module.css';

const PostItem = (props) => {
    return(
        <div className={s.post__boxItem}>
            <img src="https://www.rewizor.ru/files/1960668x8w.jpg" alt="content-img"/>
            <p>{props.message}</p>
            <div className={s.counter}>Like {props.likesCount}</div>
        </div>
    )
}

export default PostItem;

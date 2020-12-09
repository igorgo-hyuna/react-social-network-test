import React from 'react';
import s from './new-post.module.css';

const NewPost = (props) => {
    /* Переменная-ссылка на какой-то элемент из JSX */
    let newPostElement = React.createRef();

    // Функция нового поста
    let addNewPost = () => {
        let text = newPostElement.current.value; // Считываем текущее знаение
        props.addPost(text);
        newPostElement.current.value = '';
    }

    return(
        <div className={s.newPost}>
            <textarea ref={newPostElement}></textarea>
            <button onClick={ addNewPost }>Add post</button>
            <button>Remove</button>
        </div>
    );
}

export default NewPost;

import React from 'react';
import s from './new-post.module.css';

const NewPost = (props) => {
    /* Получаем страницу диалогов */
    let state = props.store;
    /* Переменная-ссылка на какой-то элемент из JSX */
    let newPostElement = React.createRef();


    // Функция нового поста
    let onAddNewPost = () => {
        props.addPost();
    };

    // Функция обработки текущего значения в поле textarea
    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    };


    return (
        <div className={s.newPost}>
            <div>
                <textarea ref={newPostElement}
                          value={state.newPostText}
                          placeholder='Please, input post text...'
                          onChange={onPostChange}/>
            </div>
            <div>
                <button onClick={onAddNewPost}>Add post</button>
            </div>
        </div>
    );
};

export default NewPost;

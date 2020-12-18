import React from 'react';
import {addPostActionCreater, updateNewPostTextActionCreater} from "../../../redux/profile-page-raducer";
import NewPost from "./new-post";


const NewPostContainer = (props) => {
    let state = props.store.getState().profilePage;

    // Функция нового поста
    let addNewPost = () => {
        props.store.dispatch(addPostActionCreater());
    };

    // Функция обработки текущего значения в поле textarea
    let onPostChange = (text) => {
        props.store.dispatch(updateNewPostTextActionCreater(text));
    };

    return(
        <NewPost
            newPostText={state.newPostText}
            updateNewPostText={onPostChange}
            addPost={addNewPost} />
    );
};

export default NewPostContainer;

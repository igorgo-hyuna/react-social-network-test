import React from 'react';
import {addPostActionCreater, updateNewPostTextActionCreater} from "../../../redux/profile-page-raducer";
import NewPost from "./new-post";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return {
        store: state.profilePage
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {
            dispatch(addPostActionCreater());
        },
        updateNewPostText: (text) => {
            dispatch(updateNewPostTextActionCreater(text));
        }
    }
};

const NewPostContainer = connect(mapStateToProps, mapDispatchToProps)(NewPost);

export default NewPostContainer;

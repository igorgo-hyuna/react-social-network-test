import React from 'react';
import PostItem from './post-item/post-item';
import ProfileInfo from "./profile-info";
import s from './profile.module.css';
import NewPostContainer from "./new-post/new-post-container";


const Profile = (props) => {
    let state = props.store;

    let postElements =
        state.posts.map(postElement =>
            <PostItem
                message={postElement.message}
                likesCount={postElement.likesCount}
                key={postElement.id}/>);
    debugger;
    return( <div className={s.postBox}>
                <ProfileInfo/>
                <NewPostContainer/>
                <div className={s.newPosts}>
                    <h2>My posts</h2>
                    {postElements}
                </div>
            </div>
    )
};

export default Profile;

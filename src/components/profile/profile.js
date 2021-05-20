import React from 'react';
import PostItem from './post-item/post-item';
import ProfileInfo from "./profile-info";
import NewPostContainer from "./new-post/new-post-container";
import s from './profile.module.css';


const Profile = (props) => {

    let postElements =
        props.posts.map(postElement =>
            <PostItem
                message={postElement.message}
                likesCount={postElement.likesCount}
                key={postElement.id}/>);

    return( <div className={s.postBox}>
                <ProfileInfo profile={props.profile}/>
                <NewPostContainer/>
                <div className={s.newPosts}>
                    <h2>My posts</h2>
                    {postElements}
                </div>
            </div>
    )
};

export default Profile;

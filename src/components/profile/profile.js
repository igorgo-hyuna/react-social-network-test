import React from 'react';
import PostItem from './post-item/post-item';
import ProfileInfo from "./profile-info";
import NewPost from "./new-post";
import s from './profile.module.css';

const Profile = (props) => {

    let postElements =
       props.state.posts.map( postElement => <PostItem message={postElement.message} likesCount={postElement.likesCount} /> );

    return(
        <div className={s.postBox}>
           <ProfileInfo />
           <NewPost addPost={props.addPost}/>
            <div className={s.newPosts}>
                <h2>My posts</h2>
                {postElements}
            </div>
        </div>
    )
}

export default Profile;

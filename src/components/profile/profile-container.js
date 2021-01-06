import React from 'react';
import {connect} from "react-redux";
import Profile from "./profile";

let mapStateToProps = (state) => {
    return{
        store: state.profilePage
    }
};


const ProfileContainer = connect(mapStateToProps, )(Profile);
export default ProfileContainer;

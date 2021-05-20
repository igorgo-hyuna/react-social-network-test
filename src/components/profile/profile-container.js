import React from 'react';
import * as axios from "axios";
import {connect} from "react-redux";
import {setUserProfile} from "../../redux/profile-page-raducer";
import Profile from "./profile";



class ProfileContainer extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then(response => {
                this.props.setUserProfile(response.data);
            });
    }

    render() {

        return(
           <Profile
               posts={this.props.posts}
               profile={this.props.profile}
           />
        )
    }
};


let mapStateToProps = (state) => ({
    posts: state.profilePage.posts,
    profile: state.profilePage.profile
});



export default connect(mapStateToProps, {setUserProfile})(ProfileContainer);

import React from 'react';
import {connect} from "react-redux";
import {getUserProfile} from "../../redux/profile-page-raducer";
import Profile from "./profile";
import {withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if(!userId) userId = 2;
        this.props.getUserProfile(userId);
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

// HOC-компонента
let AuthRedirectComponent = withAuthRedirect(ProfileContainer);

let mapStateToProps = (state) => ({
    posts: state.profilePage.posts,
    profile: state.profilePage.profile
});
let withUrlDataContainerComponent = withRouter(AuthRedirectComponent);
export default connect(mapStateToProps, {getUserProfile})(withUrlDataContainerComponent);

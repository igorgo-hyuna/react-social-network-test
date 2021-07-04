import React from 'react';
import {connect} from "react-redux";
import {getUserProfile} from "../../redux/profile-page-raducer";
import Profile from "./profile";
import {withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

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
let mapStateToProps = (state) => ({
    posts: state.profilePage.posts,
    profile: state.profilePage.profile
});

export default compose(
    connect(mapStateToProps, {getUserProfile}), //3й шаг. Срабатывает connect(mapStateToProps, {getUserProfile})(результат шага 2)
    withRouter //2й шаг. withRouter обрабатывает результат шага 1.
)(ProfileContainer);// Целевой объект

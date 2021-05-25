import React from 'react';
import Navbar from './components/navbar/navbar';
import {Route} from 'react-router-dom';
import News from './components/news/news'
import Music from "./components/music";
import Settings from "./components/settings";
import './App.css';
import DialogsContainer from "./components/dialogs/dialogs-container";
import ProfileContainer from "./components/profile/profile-container";
import UsersContainer from "./components/users/users-container";
import HeaderContainer from "./components/header/header-container";


const App = () => {
    return (
            <div className="app-wrapper">
                <HeaderContainer />
                <Navbar/>
                <div className="app-wrapper__content">

                    <Route path='/profile/:userId?'
                           render={ () => <ProfileContainer /> }/>

                    <Route path='/dialogs'
                           render={ () => <DialogsContainer /> }/>

                    <Route path='/users'
                           render={ () => <UsersContainer /> }/>

                    <Route path='/news' component={News}/>
                    <Route path='/music' component={Music}/>
                    <Route path='/settings' component={Settings}/>
                </div>
            </div>
    );
};

export default App;

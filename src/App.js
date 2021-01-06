import React from 'react';
import Header from './components/header/header';
import Navbar from './components/navbar/navbar';
import Dialogs from "./components/dialogs";
import Profile from './components/profile/profile';
import {BrowserRouter, Route} from 'react-router-dom';
import News from './components/news/news'
import Music from "./components/music";
import Settings from "./components/settings";
import './App.css';
import DialogsContainer from "./components/dialogs/dialogs-container";
import ProfileContainer from "./components/profile/profile-container";
import UsersContainer from "./components/users/users-container";


const App = () => {
    return (
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className="app-wrapper__content">

                    <Route path='/profile' render={ () =>
                        <ProfileContainer/> }/>

                    <Route /* exact */ path='/dialogs' render={ () =>
                        <DialogsContainer/> }/>

                    <Route /* exact */ path='/users' render={ () =>
                        <UsersContainer/> }/>

                    <Route path='/news' component={News}/>
                    <Route path='/music' component={Music}/>
                    <Route path='/settings' component={Settings}/>
                </div>
            </div>
    );
};

export default App;

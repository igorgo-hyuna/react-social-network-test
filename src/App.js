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


const App = (props) => {

    return (
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className="app-wrapper__content">

                    <Route path='/profile' render={ () =>
                        <Profile
                            state={props.state.profilePage}
                            addPost={props.addPost}/> } />

                    <Route /* exact */ path='/dialogs' render={ () =>
                        <Dialogs
                            state={props.state.dialogsPage}
                            addMessage={props.addMessage}/> }/>



                    <Route path='/news' component={News}/>
                    <Route path='/music' component={Music}/>
                    <Route path='/settings' component={Settings}/>
                </div>
            </div>
    );
}

export default App;

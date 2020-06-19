import React from 'react';
import './App.css';
import NavBar from "./component/navbar/NavBar";
import VideoPage from "./page/VideoPage";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import HomePage from "./page/HomePage";
import ShareVideo from "./component/video/ShareVideo";
import {VideoProvider} from "./context/VideoContext";
import {UserProvider} from "./context/UserContext";
import Login from "./page/Login";
import Register from "./page/Register";

export default function App() {
    return (
        <Router>
            <Switch>
                <div className="App">
                    <UserProvider>
                        <VideoProvider>
                            <NavBar/>
                            <Route path="/" exact component={HomePage}/>
                            <Route path="/video/:id" exact component={VideoPage}/>
                            <Route path="/share" exact component={ShareVideo}/>
                            <Route path="/login" exact component={Login}/>
                            <Route path="/register" exact component={Register}/>
                        </VideoProvider>
                    </UserProvider>
                </div>
            </Switch>
        </Router>
    );
}
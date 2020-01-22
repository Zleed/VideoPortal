import React from 'react';
import './App.css';
import NavBar from "./component/navbar/NavBar";
import VideoPage from "./page/VideoPage";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import HomePage from "./page/HomePage";
import ShareVideo from "./component/video/ShareVideo";
import {VideoProvider} from "./context/VideoContext";

export default function App() {
    return (
        <Router>
            <Switch>
                <div className="App">
                    <VideoProvider>
                        <NavBar/>
                        <Route path="/" exact component={HomePage}/>
                        <Route path="/video/:id" exact component={VideoPage}/>
                        <Route path="/share" exact component={ShareVideo}/>
                    </VideoProvider>
                </div>
            </Switch>
        </Router>
    );
}
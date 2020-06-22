import React, {useContext} from 'react';
import './App.css';
import VideoPage from "./page/VideoPage";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import HomePage from "./page/HomePage";
import ShareVideo from "./component/video/ShareVideo";
import {VideoContext, VideoProvider} from "./context/VideoContext";
import {UserProvider} from "./context/UserContext";
import Login from "./page/Login";
import Register from "./page/Register";
import FeaturedVideoPage from "./page/FeaturedVideoPage";
import TopRatedVideoPage from "./page/TopRatedVideoPage";
import PopularVideoPage from "./page/PopularVideoPage";
import FavouriteVideoPage from "./page/FavouriteVideoPage";

export default function App() {
    return (
        <Router>
            <Switch>
                <div className="App">
                    <UserProvider>
                        <VideoProvider>
                            <Route path="/" exact component={HomePage}/>
                            <Route path="/video/:id" exact component={VideoPage}/>
                            <Route path="/share" exact component={ShareVideo}/>
                            <Route path="/login" exact component={Login}/>
                            <Route path="/register" exact component={Register}/>
                            <Route path="/featured" exact component={FeaturedVideoPage}/>
                            <Route path="/toprated" exact component={TopRatedVideoPage}/>
                            <Route path="/popular" exact component={PopularVideoPage}/>
                            <Route path="/favourite" exact component={FavouriteVideoPage}/>
                        </VideoProvider>
                    </UserProvider>
                </div>
            </Switch>
        </Router>
    );
}
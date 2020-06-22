import React, {useContext, useEffect} from "react";
import VideoList from "../component/video/VideoList";
import {VideoContext} from "../context/VideoContext";
import NavBar from "../component/navbar/NavBar";
import {UserContext} from "../context/UserContext";

export default function HomePage() {

    const {videoList, videoMethod} = useContext(VideoContext);
    const {flag} = useContext(UserContext);

    useEffect(() => {
        videoMethod.getAllVideo();
    }, [flag]);


    return (
        <>
            <NavBar/>
            <VideoList title={"Featured"} videoList={videoList}/>
            <VideoList title={"Top Rated"} videoList={videoList}/>
            <VideoList title={"Popular"} videoList={videoList}/>
            <br/>
        </>
    );
}
import React, {useContext, useEffect} from "react";
import VideoList from "../component/video/VideoList";
import {VideoContext} from "../context/VideoContext";

export default function HomePage() {

    const {videoList, videoMethod} = useContext(VideoContext);

    useEffect(() => {
        videoMethod.getAllVideo();
    }, [videoList]);


    return (
        <>
            <VideoList title={"Featured"} videoList={videoList}/>
            <VideoList title={"Top Rated"} videoList={videoList}/>
            <VideoList title={"Popular"} videoList={videoList}/>
            <br/>
        </>
    );
}
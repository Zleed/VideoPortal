import React, {useContext, useEffect} from "react";
import VideoSlider from "../component/video/VideoSlider";
import {VideoContext} from "../context/VideoContext";
import NavBar from "../component/navbar/NavBar";
import {UserContext} from "../context/UserContext";

export default function HomePage() {

    const {videoList, popularList, featuredList, topRatedList, videoMethod} = useContext(VideoContext);
    const {flag} = useContext(UserContext);

    useEffect(() => {
        videoMethod.getAllVideo();
        videoMethod.getAllVideoOrderByDate();
        videoMethod.getAllVideoOrderByRating();
        videoMethod.getAllVideoOrderByPopularity();
    }, [flag]);


    return (
        <>
            <NavBar/>
            <VideoSlider title={"Featured"} videoList={featuredList}/>
            <VideoSlider title={"Top Rated"} videoList={topRatedList}/>
            <VideoSlider title={"Popular"} videoList={popularList}/>
            <br/>
        </>
    );
}
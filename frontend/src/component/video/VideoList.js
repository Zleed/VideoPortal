import React, {useContext, useEffect, useState} from 'react';
import VideoCard from "./VideoCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "../../style/VideoList.css"

const settings = {
    infinite: true,
    speed: 2500,
    slidesToShow: 4,
    slidesToScroll: 4,
};

export default function VideoList(props) {


    return (
        <>
            <h1 className="slide-title">{props.title}</h1>
            <Slider {...settings}>
                {props.videoList.map(video =>
                    <VideoCard video={video}/>)}
            </Slider>
        </>
    );
}

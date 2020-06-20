import React from 'react';
import VideoCard from "./VideoCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "../../style/VideoList.css"

const settings = {
    infinite: true,
    speed: 2500,
    slidesToShow: 10,
    slidesToScroll: 10,
    responsive: [
        {
            breakpoint: 6000,
            settings: {
                slidesToShow: 9,
                slidesToScroll: 9,
            }
        },
        {
            breakpoint: 4000,
            settings: {
                slidesToShow: 8,
                slidesToScroll: 8,
            }
        },
        {
            breakpoint: 3300,
            settings: {
                slidesToShow: 7,
                slidesToScroll: 7,
            }
        },
        {
            breakpoint: 3000,
            settings: {
                slidesToShow: 6,
                slidesToScroll: 6,
            }
        },
        {
            breakpoint: 2600,
            settings: {
                slidesToShow: 5,
                slidesToScroll: 5,
            }
        },
        {
            breakpoint: 2300,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 4,
            }
        },
        {
            breakpoint: 1500,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
            }
        },
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 960,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
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

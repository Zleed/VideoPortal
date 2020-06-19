import React, {createContext, useState} from "react";
import Axios from "axios";
import Cookies from "universal-cookie/cjs/Cookies";

export const VideoContext = createContext();

export function VideoProvider(props) {

    const cookies = new Cookies();
    const [videoList, setVideoList] = useState([]);
    const [recommendationList, setRecommendationList] = useState([]);
    const [video, setVideo] = useState({});

    const videoMethod = {
        getAllVideo: () => {
            Axios.get(`http://localhost:8762/video-service/video/`)
                .then((res) => {
                    setVideoList(res.data);
                })
        },

        getVideoById: (id) => {
            Axios.get(`http://localhost:8762/video-service/video/${id}`)
                .then((res) => {
                    setVideo(res.data);
                    setRecommendationList(res.data.recommendationList)
                })
        },

        postVideo: (data) => {
            data.preventDefault();
            Axios.post(`http://localhost:8762/video-service/video`, {
                name: data.target.name.value,
                url: data.target.url.value
            }, {
                headers: {
                    "Content-type": "application/json",
                    "Access-Control-Allow-Origin": "http://localhost:3000",
                    "Accept": "application/json",
                    "Authorization": `Bearer ${cookies.get('jwt')}`
                }
            }).then(res => {
                    console.log(cookies.get("jwt"));
                    console.log(res.data);
                }
            )
        },

        postRecommendation: (data) => {
            data.preventDefault();
            Axios.post(`http://localhost:8762/video-service/video/${data.target.videoId.value}`, {
                videoId: data.target.videoId.value,
                comment: data.target.comment.value,
                rating: data.target.rating.value
            }, {
                headers: {
                    "Content-type": "application/json",
                    "Access-Control-Allow-Origin": "http://localhost:3000",
                    "Accept": "application/json",
                    "Authorization": `Bearer ${cookies.get('jwt')}`
                }
            }).then(res => {
                    console.log(res.data);
                }
            )
        }
    };

    return (
        <VideoContext.Provider value={{video, videoList, recommendationList, videoMethod}}>
            {props.children}
        </VideoContext.Provider>
    );
}
import React, {createContext, useContext, useState} from "react";
import Axios from "axios";
import Cookies from "universal-cookie/cjs/Cookies";
import {UserContext} from "./UserContext";
import {useHistory} from "react-router-dom";

export const VideoContext = createContext();

export function VideoProvider(props) {

    const {userMethod} = useContext(UserContext);
    const cookies = new Cookies();
    const history = useHistory();

    const [videoList, setVideoList] = useState([]);
    const [featuredList, setFeaturedList] = useState([]);
    const [topRatedList, setTopRatedList] = useState([]);
    const [recommendationList, setRecommendationList] = useState([]);
    const [favVidList, setFavVidList] = useState([]);
    const [popularList, setPopularList] = useState([]);
    const [video, setVideo] = useState({});



    const [header] = useState({
        "Content-type": "application/json",
        "Access-Control-Allow-Origin": "http://localhost:3000",
        "Accept": "application/json",
        "Authorization": `Bearer ${cookies.get('jwt')}`
    });

    const videoMethod = {
        getAllVideo: () => {
            Axios.get(`http://localhost:8762/video-service/video/`)
                .then((res) => {
                    setVideoList(res.data);
                })
        },
        getAllVideoOrderByDate: () => {
            Axios.get(`http://localhost:8762/video-service/video/featured`)
                .then((res) => {
                    setFeaturedList(res.data);
                })
        },
        getAllVideoOrderByRating: () => {
            Axios.get(`http://localhost:8762/video-service/video/toprated`)
                .then((res) => {
                    setTopRatedList(res.data);
                })
        },
        getAllVideoOrderByPopularity: () => {
            Axios.get(`http://localhost:8762/video-service/video/popular`)
                .then((res) => {
                    setPopularList(res.data);
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
                url: data.target.url.value,
                userId: data.target.userId.value
            }, {
                headers: header
            }).then(res => {
                    userMethod.flipFlag();
                    history.push("/");
                }
            )
        },

        postRecommendation: (data) => {
            data.preventDefault();
            Axios.post(`http://localhost:8762/video-service/video/${data.target.videoId.value}`, {
                videoId: data.target.videoId.value,
                comment: data.target.comment.value,
                rating: data.target.rating.value,
                userId: data.target.userId.value
            }, {
                headers: header
            }).then(res => {
                userMethod.flipFlag()
            })
        },

        addFavVid: (userId, videoId) => {
            Axios.post(`http://localhost:8762/user/${userId}/fav/${videoId}`, {}, {
                headers: header
            }).then(res =>
                Axios.post(`http://localhost:8762/video-service/video/fav/pop/${videoId}`, {}, {
                headers: header
                })
            );
        },

        getFavVids: (userId) => {
            Axios.get(`http://localhost:8762/user/${userId}/fav`)
                .then(res =>
                    Axios.post(`http://localhost:8762/video-service/video/fav`, {
                        ids: res.data
                    }, {
                        headers: header
                    }).then(res =>
                        setFavVidList(res.data)
                    )
                )
        },

    };

    return (
        <VideoContext.Provider value={{video, popularList, videoList, favVidList,
            topRatedList, featuredList, recommendationList, videoMethod}}>
            {props.children}
        </VideoContext.Provider>
    );
}
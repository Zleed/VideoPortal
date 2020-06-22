import React, {useContext, useEffect} from "react";
import {makeStyles, Paper} from "@material-ui/core";
import {UserContext} from "../context/UserContext";
import NavBar from "../component/navbar/NavBar";
import VideoList from "../component/video/VideoList";
import {VideoContext} from "../context/VideoContext";
import Cookies from "universal-cookie";

const useStyles = makeStyles(() => ({
    paper: {
        width: "80vw",
        maxWidth: 700,
        padding: "1%",
        margin: "auto",
        marginTop: "5%",
    },
}));

export default function FeaturedVideoPage() {

    const cookies = new Cookies();
    const classes = useStyles();
    const {videoMethod, favVidList} = useContext(VideoContext);
    const {flag, userMethod} = useContext(UserContext);

    useEffect(() => {
        videoMethod.getFavVids(cookies.get("userId"));
    }, [flag]);

    return (
        <>
            <NavBar/>
            <br/>
            <Paper className={classes.paper}>
                {(userMethod.ifSinged()) ? <h1>Login for favourite videos.</h1> : <h1>Favourite</h1> }
                <VideoList videoList={favVidList}/>
            </Paper>
            <br/>
        </>
    );
}
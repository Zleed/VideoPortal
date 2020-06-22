import React, {useContext, useEffect} from "react";
import {makeStyles, Paper} from "@material-ui/core";
import {UserContext} from "../context/UserContext";
import NavBar from "../component/navbar/NavBar";
import VideoList from "../component/video/VideoList";
import {VideoContext} from "../context/VideoContext";

const useStyles = makeStyles(() => ({
    paper: {
        width: "80vw",
        maxWidth: 700,
        padding: "1%",
        margin: "auto",
        marginTop: "5%",
    },
}));

export default function Featured() {

    const classes = useStyles();
    const {videoMethod, popularList} = useContext(VideoContext);
    const {flag} = useContext(UserContext);

    useEffect(() => {
        videoMethod.getAllVideoOrderByPopularity();
    }, [flag]);

    return (
        <>
            <NavBar/>
            <br/>
            <Paper className={classes.paper}>
                <h1>Popular</h1>
                <VideoList videoList={popularList}/>
            </Paper>
            <br/>
        </>
    );
}